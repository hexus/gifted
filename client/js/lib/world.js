define(['createjs','assets','lib/global','lib/tile','shared/Map'],
function(createjs,lib,Global,Tile,Map){
    var World = function(map){
        this.initialize();
        this.get = this.__defineGetter__;
        this.set = this.__defineSetter__;
        var that = this;
        
        if(!(map instanceof Map)){
            map = new Map();
        }
        
        this.initialize();
        this.id = 0;
        this.name = '';
        this.users = {};
        
        this.map = map;
        this.tilePool = {};
        this.tileRefs = {};
        this.outerMargin = 4;
        this.tileScale = this.map.getTileSize()/62;
        this.mapContainer = new createjs.Container();
        
        this.set('scale',function(v){
            that.view.scale = that.scaleX = that.scaleY = v;
        });
        this.get('scale',function(){
            return that.view.scale;
        });
        this.view = {x:0,y:0,scale:1};
        this.lastUpdated = {x:0,y:0,scale:1};
        this.defaultTarget = new createjs.Container();
        this.scrollTarget = this.addChild(this.defaultTarget);
        this.scrollSensitivity = 0.36;
        this.update = {rate:6,count:0}
        
        this.addChild(this.mapContainer);
        this.testTiles();
    }
    
    var p = World.prototype = new createjs.Container();
    
    p.tick = function(timeElapsed,paused){
        for(u in this.users){
            this.users[u].tick();
        }
        this.iScroll();
        if(Global.debug && Global.ticker.getTicks()%64==0){
            Global.ui.updateFPS(Math.round(Global.ticker.getMeasuredFPS()));
        }
    }
    
    p.focusOn = function(target,lock){
        if(this.contains(target)){
            if(lock){ // Snap to target immediately
                
            }
            this.scrollTarget = target;
        }else{
            this.scrollTarget = this.defaultTarget;
        }
        return this.scrollTarget;
    }
    
    p.iScroll = function(){
        this.focusOn(this.scrollTarget);
        var t = this.scrollTarget;
        var sens = this.scrollSensitivity;
        var dist = Math.sqrt(((t.x-this.view.x)*(t.x-this.view.x))+((t.y-this.view.y)*(t.y-this.view.y)));
        
        if(t){
            for(var i=0;i<2;i++){
                var affect,targetCord,screenSpan,scale;
                if(i==0){
                    affect = 'x';
                    affect2 = 'width';
                    scale = this.scaleX;
                    targetCord = t.x;
                }else if(i==1){
                    affect = 'y';
                    affect2 = 'height';
                    scale = this.scaleY;
                    targetCord = t.y;
                }
                
                screenSpan = Global.stage.canvas[affect2] / scale;
                var dif = targetCord - this.view[affect];
                
                if(Math.abs(dif*sens)>sens){
                    this.view[affect] += (dif*sens);
                }else{
                    this.view[affect] = (targetCord);
                }
                
                this[affect] = (screenSpan*0.5 - this.view[affect]) * scale;
            }
        }
        
        if(this.update.count>this.update.rate){
            this.updateDisplay(this.view.x, this.view.y, this.view.scale, 1, dist > Math.floor(Global.stage.canvas.width*0.5));
            this.update.count = 0;
        }
        this.update.count++;
    }
    
    p.scrollTo = function(x,y,clear){
        //if(x&&y){
            this.view.x = x;
            this.view.y = y;
            this.x = Math.floor(Global.stage.canvas.width*0.5) - this.view.x;
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
            v = (newtile==1) ? 9 : newtile;
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
        if(t instanceof Tile){
            var cords = this.map.convertCords(t.x,t.y);
            this.map.setTile(cords['rx'],cords['ry'],cords['x'],cords['y'],t.frame);
            t.frame = 0;
            this.mapContainer.removeChild(t);
        }
    }
    
    p.clearDisplay = function(){
        for(d=0;d<this.mapContainer.children.length;d++){
            this.removeTile(this.mapContainer.getChildAt(d));
        }
        this.mapContainer.removeAllChildren();
    }
    
    p.updateDisplay = function(x,y,scale,times,full){
        if(!scale){scale=this.lastUpdated.scale || 1;} // change to last scale later
        if(!times){times=1;}
        if(!full){full=false;}
        if(scale!=this.lastUpdated.scale){
            Tile.buildSheet(scale);
            this.clearDisplay();
            full=true;
        }
        
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
            // Iterate through entire view bounds to append tiles
            for(var x=dX1;x<dX2;x++){
                for(var y=dY1;y<dY2;y++){
                    cord = this.map.convertCords(x,y,true);
                    rx = cord['rx'];
                    ry = cord['ry'];
                    cx = cord['x'];
                    cy = cord['y'];
                    
                    var tile = this.map.getTile(rx,ry,cx,cy);
                    if(tile>0){
                        tile = 9;
                        this.addTile(x,y,tile);
                    }
                }
            }
            
            // Remove all tiles outside view bounds
            for(d=0;d<this.mapContainer.children.length;d++){
                var tileRem = this.mapContainer.getChildAt(d),
                    tx = tileRem.x / tSize,
                    ty = tileRem.y / tSize;
                if(tx<dX1 || tx>dX2 || ty<dY1 || ty>dY2){ // Tile pooling later
                    this.removeTile(tileRem);
                }
            }
        }else{ // Iterate over edges of viewport for adding and removing tiles
            var deltas = this.lastUpdated.deltas || [dX1,dX2,dY1,dY2];
            
            if(dX1!=deltas[0]){
                var dx1rel = dX1 - deltas[0];
                for(var k=0; k<Math.abs(dx1rel); k++){
                    for(var l=((dY1<deltas[2])?dY1:deltas[2]); l<((dY2>deltas[3])?dY2:deltas[3]); l++){
                        var addX,remX;
                        if(dx1rel>0){ // Left
                            remX = deltas[0]+k;
                            addX = deltas[1]+k;
                        }else{ // Right
                            remX = deltas[1]-k;
                            addX = deltas[0]-k;
                        }
                        cord = this.map.convertCords(remX,l,true);
                        remTile = this.map.getTile(cord['rx'],cord['ry'],cord['x'],cord['y']);
                        this.removeTile(remTile);
                        if(l>=dY1 && l<=dY2){
                            cord = this.map.convertCords(addX,l,true); 
                            var tile = this.map.getTile(cord['rx'],cord['ry'],cord['x'],cord['y']);
                            if(tile>0){
                                tile = 9;
                                this.addTile(addX,l,tile);
                            }
                        }
                    }
                }
            }
            
            if(dY1!=deltas[2]){
                var dy1rel = dY1 - deltas[2];
                for(var m=0; m<Math.abs(dy1rel); m++){
                    for(var n=((dX1<deltas[0])?dX1:deltas[0]); n<((dX2>deltas[1])?dX2:deltas[1]); n++){
                        var addY,remY;
                        if(dy1rel>0){ // Left
                            remY = deltas[2]+m;
                            addY = deltas[3]+m;
                        }else{ // Right
                            remY = deltas[3]-m;
                            addY = deltas[2]-m;
                        }
                        cord = this.map.convertCords(n,remY,true);
                        remTile = this.map.getTile(cord['rx'],cord['ry'],cord['x'],cord['y']);
                        this.removeTile(remTile);
                        if(n>=dX1 && n<=dX2){
                            cord = this.map.convertCords(n,addY,true); 
                            var tile = this.map.getTile(cord['rx'],cord['ry'],cord['x'],cord['y']);
                            if(tile>0){
                                tile = 9;
                                this.addTile(n,addY,tile);
                            }
                        }
                    }
                }
            }
        }
        
        this.lastUpdated = {
            x:x, y:y,
            scale:scale,
            deltas:[dX1,dX2,dY1,dY2]
        };
        
        if(times>1){
            times--;
            this.updateDisplay(x,y,scale,times);
        }
        
    }
    
    return World;
});
