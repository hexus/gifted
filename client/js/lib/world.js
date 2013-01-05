define(['createjs','assets','lib/global','lib/tile','shared/Map'],
function(createjs,lib,Global,Tile,Map){
    var World = function(map){
        if(map instanceof Map){
            this.initialize();
            this.id = 0;
            this.name = '';
            this.users = {};
            
            this.map = map;
            this.tilePool = {};
            this.tileRefs = {};
            this.outerMargin = 3;
            this.tileScale = this.map.getTileSize()/62;
            this.mapContainer = new createjs.Container();
            
            this.view = {x:0,y:0,scale:1};
            this.lastUpdated = {x:0,y:0,scale:1};
            this.scrollTarget = null;
            this.scrollSensitivity = 0.36;
            this.update = {rate:4,count:0}
            
            this.addChild(this.mapContainer);
            this.testTiles();
        }
    }
    
    var p = World.prototype = new createjs.Container();

    p.tick = function(timeElapsed,paused){
        for(u in this.users){
            this.users[u].tick();
        }
        this.iScroll();
    }
    
    p.focusOn = function(target,lock){
        if(this.contains(target)){
            if(lock){ // Snap to target immediately
                
            }
            this.scrollTarget = target;
        }else{
            this.scrollTarget = null;
        }
        return this.scrollTarget;
    }
    
    p.iScroll = function(){
        this.focusOn(this.scrollTarget);
        var t = this.scrollTarget;
        var sens = this.scrollSensitivity;
        
        if(t){
            for(var i=0;i<2;i++){
                var affect,targetCord,screenSpan,scale;
                if(i==0){
                    affect = 'x';
                    scale = this.scaleX;
                    targetCord = t.x;
                    screenSpan = Global.stage.canvas.width / scale;
                }else if(i==1){
                    affect = 'y';
                    scale = this.scaleY;
                    targetCord = t.y;
                    screenSpan = Global.stage.canvas.height / scale;
                }
                
                //console.log(t,Global.player,targetCord,this.view[affect]);
                var dif = targetCord - this.view[affect];
                
                if(Math.abs(dif*sens)>1){
                    this.view[affect] += dif*sens;
                }else{
                    this.view[affect] = targetCord;
                }
                
            }
            
            this.x = Math.floor(Global.stage.canvas.width*0.5) - this.view.x;
            this.y = Math.floor(Global.stage.canvas.height*0.5) - this.view.y;
            if(this.update.count>this.update.rate){
                this.updateDisplay(this.view.x,this.view.y);
                this.update.count = 0;
            }
            this.update.count++;
            
            //this.scrollTo(this.view.x,this.view.y);
        }
    }
    
    p.scrollTo = function(x,y,clear){
        //if(x&&y){
            this.view.x = x;
            this.view.y = y;
            this.x = Math.floor(Global.stage.canvas.width*0.5) - this.view.x ;
            this.y = Math.floor(Global.stage.canvas.height*0.5) - this.view.y;
            
            if(clear){this.clearDisplay();}

        //}
    }
    
    p.scrollDelta = function(x,y){
        if(!x){x=0;}
        if(!y){y=0;}
        this.scrollTo(this.view.x+x,this.view.y+y,true);
    }
    
    // Test function (draws all tiles in a row at top-left of game world)
    p.testTiles = function(){
        for(var i=0;i<Global.tiles.getNumFrames();i++){
            this.mapContainer.addChild(
                new Tile(i, i*this.map.getTileSize(), 10, this.tileScale)
            );
        }
    }
    
    p.addTile = function(cx,cy,v){
        var cords = this.map.convertCords(cx,cy,true),
            rx = cords['rx'],
            ry = cords['ry'],
            dx = cords['x'],
            dy = cords['y'];
        var newtile = this.map.getTile(rx,ry,dx,dy);
        if(newtile instanceof Tile){
            if(!this.mapContainer.contains(newtile)){
                this.mapContainer.addChild(newtile);
            }
        }else{
            newtile = new Tile();
            newtile = this.mapContainer.addChild(newtile);
            this.map.setTile(rx,ry,dx,dy,newtile);
        }
        newtile.x = cx * this.map.getTileSize();
        newtile.y = cy * this.map.getTileSize();
        newtile.frame = v;
        newtile.scale = this.tileScale;
    }
    
    p.removeTile = function(t){
        if(t.clip){
            if(t.parent){
                var removed = this.mapContainer.removeChild(t);
                if(removed){
                    var cords = this.map.convertCords(t.x,t.y);
                    //console.log(cords,t.frame);
                    this.map.setTile(cords['rx'],cords['ry'],cords['x'],cords['y'],t.frame);
                }
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
                        tile = 9;
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
