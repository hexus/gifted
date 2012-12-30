define(['createjs','assets','lib/global','lib/tile','node/Map'],
function(createjs,lib,Global,Tile,Map){
    var World = function(map){
        if(map instanceof Map){
            this.initialize();
            this.id = 0;
            this.name = '';
            this.users = {};
            
            this.map = map;
            this.tilePool = [];
            this.outerMargin = 0;
            this.tileScale = this.map.getTileSize()/62;
            this.mapContainer = new createjs.Container();
            
            this.view = {x:0,y:0,scale:1};
            this.lastUpdated = {x:0,y:0,scale:1};
            this.target = {};
            
            this.addChild(this.mapContainer);
            this.testTiles();
        }
    }
    
    var p = World.prototype = new createjs.Container();

    p.tick = function(timeElapsed,paused){
        
    }
    
    // Test function (draws all tiles in a row at top-left of game world)
    p.testTiles = function(){
        for(var i=0;i<Global.tiles.getNumFrames();i++){
            this.mapContainer.addChild(
                new Tile(i, i*this.map.getTileSize(), 10, this.tileScale)
            );
           //this.addTile(i*this.map.getTileSize(), 10, i);
        }
    }
    
    p.scrollTo = function(x,y,clear){
        Global.player.x = this.view.x = x;
        Global.player.y = this.view.y = y;
        this.x = Math.floor(Global.stage.canvas.width*0.5) - this.view.x;
        this.y = Math.floor(Global.stage.canvas.height*0.5) - this.view.y;
        if(clear){this.clearDisplay();}
        this.updateDisplay(this.view.x,this.view.y);
    }
    
    p.scrollDelta = function(x,y){
        if(!x){x=0;}
        if(!y){y=0;}
        this.scrollTo(this.view.x+x,this.view.y+y,true);
    }
    
    p.addTile = function(cx,cy,v){
        var cords = this.map.convertCords(cx,cy,true),
            rx = cords['rx'],
            ry = cords['ry'],
            dx = cords['dx'],
            dy = cords['dy'],
            newtile = new Tile();
        newtile.x = cx * this.map.getTileSize();
        newtile.y = cy * this.map.getTileSize();
        newtile.frame = v;
        newtile.scale = this.tileScale;
        this.mapContainer.addChild(newtile);
    }
    
    p.removeTile = function(t){
        if(t.clip){
            if(t.parent){
                this.mapContainer.removeChild(t);
            }
        }
    }
    
    p.clearDisplay = function(){
        this.mapContainer.removeAllChildren();
    }
    
    p.updateDisplay = function(x,y,scale,times,full){
        if(!scale){scale=1;} // change to last scale later
        if(!times){t=1;}
        if(!full){full=true;}
        
        var scrW = Global.stage.canvas.width,
            scrH = Global.stage.canvas.height,
            tSize = this.map.getTileSize();
        
        var dxt = Math.floor(x / tSize),
            dyt = Math.floor(y / tSize),
            dwt = Math.floor(scrW / tSize),
            dht = Math.floor(scrH / tSize); 
        
        var dX1 = Math.floor(dxt - ((dwt*0.5)/scale) - this.outerMargin),
            dY1 = Math.floor(dyt - ((dht*0.5)/scale) - this.outerMargin),
            dX2 = Math.floor(dxt + ((dwt*0.5)/scale) + this.outerMargin),
            dY2 = Math.floor(dyt + ((dht*0.5)/scale) + this.outerMargin);
        
        
        if(full){
            // Iterate through view bounds, append tiles
            for(var x=dX1;x<dX2;x++){
                for(var y=dY1;y<dY2;y++){
                    cord = this.map.convertCords(x,y,true);
                    rx = cord['rx'];
                    ry = cord['ry'];
                    cx = cord['x'];
                    cy = cord['y'];
                    
                    var tile = this.map.getTile(rx,ry,cx,cy);
                    //console.log(cord,tile);
                    if(tile>0){
                        tile = 8;
                        /*
                        this.mapContainer.addChild(
                            new Tile(tile,x*tSize,y*tSize,this.tileScale)
                        );
                        */
                       this.addTile(x,y,tile);
                    }
                }
            }
            
            // Remove tiles outside view bounds
            for(d=0;d<this.mapContainer.children.length;d++){
                var tileRem = this.mapContainer.getChildAt(d),
                    tx = tileRem.x / tSize,
                    ty = tileRem.y / tSize;
                if(tx<dX1 || tx>dX2 || ty<dY1 || ty>dY2){ // Tile pooling later
                    this.removeTile(tileRem);
                }
            }
        }else{
            
        }
        
        this.lastUpdated = {
            x:x, y:y,
            scale:scale,
            deltas:[dX1,dX2,dY1,dY2]
        };
        
        if(t>1){
            t--;
            this.updateDisplay(x,y,scale,t);
        }
        
    }
    
    return World;
});
