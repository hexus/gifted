define(['createjs','assets','lib/global','lib/tile','lib/player',
        'shared/Map','shared/Entity','shared/Character','shared/Bullet','shared/Item','shared/Weapon',
        'shared/Spawner','shared/Enemy/Flybot','shared/BulletEnemy'],
function(createjs,lib,Global,Tile,Player,Map,Entity,Character,Bullet,Item,Weapon,Spawner,Flybot,BulletEnemy){
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
        this.entities = {};
        this.entitycount = 0;
        
        this.map = map;
        this.margin = 3;
        this.tileScale = this.map.getTileSize() / Tile.originalSize(); // was /62. read from tile class instead pls.
        
        this.set('scale',function(v){
            that.view.scale = that.scaleX = that.scaleY = v;
        });
        this.get('scale',function(){
            return that.view.scale;
        });
        this.get('scrW',function(){
            return Global.stage.canvas.width / this.scale;
        });
        this.get('scrH',function(){
            return Global.stage.canvas.height / this.scale;
        });
        this.get('step',function(){
            return Global.ticker.getTicks();
        });
        this.get('fps',function(){
            return Global.ticker.getFPS();
        })
        this.get('ping',function(){
            return Global.debugObj.out.ping;
        });
        
        this.view = {x:0,y:0,scale:1};
        this.lastUpdated = {x:0,y:0,scale:1};
        this.defaultTarget = new createjs.Container();
        this.scrollTarget = this.addChild(this.defaultTarget);
        this.scrollSensitivity = 0.36;
        this.update = {rate:6,count:0};
        this.bulletAoiSpeed = Math.round(this.fps/2);
        
        this.mapContainer = this.addChild(new createjs.Container());
        this.entityContainer = this.addChild(new createjs.Container());
    }
    
    var p = World.prototype = new createjs.Container();
    
    p.tick = function(timeElapsed,paused){
        var aoi = this.getAoi(Global.player.x,Global.player.y);
        var tickAll = (this.step%Math.round(this.fps/2))==0;
        
        for(var u in this.users){
            var user = this.users[u];
            var inAoi = aoi.users[u]!=null;
            var thisPlayer = user.thisPlayer;
            user.visible = inAoi;
            user.interpolate = inAoi && !thisPlayer;
            if(inAoi || tickAll){
                user.tick();
            }
        }
        
        for(var e in this.entities){
            var entity = this.entities[e];
            var inAoi = aoi.entities[e]!=null;
            var isBullet = entity instanceof Bullet;
            entity.visible = entity.interpolate = inAoi;
            if(inAoi || entity instanceof Spawner || isBullet || tickAll){
                entity.tick();
                if(isBullet){
                    this.bulletCollisions(entity);
                }
                if(entity.isRubbish && (!Global.socket.connected || isBullet)){
                    this.removeEntity(entity);
                }
            }
        }
        
        this.iScroll();
    }
    
    p.bulletCollisions = function(e){
        var aoi = e.bulletAoi;
        if(!aoi){
            aoi = e.bulletAoi = this.getBulletAoi(e);
        }
        if(aoi.life>0){
            aoi.life--;
        }else{
            aoi = e.bulletAoi = this.getBulletAoi(e);
        }
        var users = aoi.users;
        var entities = aoi.entities;
        var rayPoints = e.getRay();
        var rayLen = rayPoints.length;
        var collidee = false;
        for(var u in users){
            var user = users[u];
            for(var r=0;r<rayLen && !collidee;r++){
                var ray = rayPoints[r];
                if(user.chkCollision(ray[0],ray[1])){
                    if(e.onContact(user)){
                        collidee = user;
                    }
                }
            }
        }
        collidee = false;
        for(var eid in entities){
            var entity = entities[eid];
            for(r=0;r<rayLen && !collidee;r++){
                ray = rayPoints[r];
                if(entity.chkCollision(ray[0],ray[1])){
                    if(e.onContact(entity)){
                        collidee = entity;
                    }
                }
            }
        }
    }
    
    p.generateMap = function(){
        this.map.generate();
        
        // at spawn
        this.addEntity(new Spawner({
            spawnerSkin:'weapon',
            babbyLimit:1,
            egg:{
                entityType:'weapon'
            }
        }));
        
        // surface spawners
        var tSize = this.map.getTileSize();
        var fullWidth = this.map.getWorldSize().width;
        var fullHeight = this.map.getWorldSize().height;
        var numSpawners = 12;
        for(var i=0;i<numSpawners;i++){
            var x = Math.floor((fullWidth/numSpawners*i) + (fullWidth/numSpawners)/2);
            this.addEntity(new Spawner({
                x:x*tSize,
                y:(fullHeight-Math.floor(this.map.heights[x]))*tSize,
                egg:{entityType:'flybot'}
            }));
        }
        
        Global.worldUi.updateMap();
    }
    
    p.addPlayer = function(id,u){
        if(u instanceof Character){
            this.users[id] = u;
            u.world = this;
            u.spawn();
        }
    }
    
    p.removePlayer = function(id){
        if(this.users[id]){
            this.users[id].unspawn();
            delete(this.users[id]);
        }
    }
    
    p.addEntity = function(e){
        if(e instanceof Entity){
            e.eid = e.eid || ++this.entitycount;
            this.entities[e.eid] = e;
            e.spawn();
            return e;
        }
    }
    
    p.removeEntity = function(e){
        if(e instanceof Entity){
            e.unspawn();
            delete(this.entities[e.eid]);
        }
    }
    
    p.recreateEntity = function(s,eid){
        if(eid){
            s.eid = eid;
        }
        var e = false;
        switch(s.entityType){
            case 'weapon':
                e = new Weapon(s);
                break;
            case 'bullet':
                e = new Bullet(s);
                break;
            case 'spawner':
                e = new Spawner(s);
                break;
            case 'flybot':
                e = new Flybot(s);
                break;
            case 'bulletenemy':
                e = new BulletEnemy(s);
                break;
        }
        if(e){
            for(var i in s){
                e.state[i] = s[i];
            }
            e.updateRotation();
        }
        return e;
    }
    
    p.getDistance = function(x,y,e){
        var distance = false;
        if(e instanceof Entity){
            distance = Math.sqrt(Math.pow(x - e.x,2) + Math.pow(y - e.y,2));
        }
        return distance;
    }
    
    p.getNearestEntity = function(Class,x,y,maxDistance){
        if(!Class){Class=false;}
        maxDistance = !maxDistance ? 0 : maxDistance;
        var collection = Class === Player ? this.users : this.entities;
        var shortestDistance = -1;
        var nearest = false;
        for(var i in collection){
            var e = collection[i];
            if(e instanceof Class || !Class){
                var distance = this.getDistance(x,y,e);
                if(shortestDistance<0 || distance < shortestDistance){
                    if(distance < maxDistance || maxDistance === 0){
                        nearest = e;
                    }
                }
            }
        }
        return nearest;
    }
    
    p.getNearestPlayer = function(x,y,maxDistance){
        return this.getNearestEntity(Player,x,y,maxDistance);
    }
    
    p.getNearestItem = function(x,y,maxDistance){
        return this.getNearestEntity(Item,x,y,maxDistance);
    }
    
    p.getAoi = function(x,y,maxDistance){ // Area of interest
        if(!maxDistance){maxDistance = 800;}
        var aoi = {
            users:{},
            entities:{}
        }
        for(var u in this.users){
            var user = this.users[u];
            if(user instanceof Player){
                var distance = this.getDistance(x,y,user);
                if(distance<maxDistance){
                    aoi.users[u] = user;
                }
            }
        }
        for(var e in this.entities){
            var entity = this.entities[e];
            if(entity instanceof Entity){
                var distance = this.getDistance(x,y,entity);
                if(distance<maxDistance){
                    aoi.entities[e] = entity;
                }
            }
        }
        return aoi;
    }
    
    p.getBulletAoi = function(bullet){
        var maxDistance = bullet.state.flySpeed * this.bulletAoiSpeed;
        var aoi = {
            users:{},
            entities:{},
            life:this.bulletAoiSpeed
        }
        
        if(bullet instanceof BulletEnemy){
            var users = this.users;
            for(var u in users){
                var user = users[u];
                if(user instanceof Player){
                    if(this.getDistance(bullet.x,bullet.y,user)<maxDistance){
                        aoi.users[u] = user;
                    }
                }
            }
        }else{
            var entities = this.entities;
            for(var e in entities){
                var entity = entities[e];
                if(entity instanceof Entity){
                    if(bullet!=entity && !(entity instanceof Bullet)
                    && entity.state.health>0 && entity.state.spawnerSkin!='weapon'){
                        if(this.getDistance(bullet.x,bullet.y,entity)<maxDistance){
                            aoi.entities[e] = entity;
                        }
                    }
                }
            }
        }
        
        return aoi;
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
        if(x&&y){
            this.view.x = x;
            this.view.y = y;
            this.x = Math.floor(Global.stage.canvas.width*0.5) - this.view.x;
            this.y = Math.floor(Global.stage.canvas.height*0.5) - this.view.y;
            if(clear){this.clearDisplay();}
        }
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
            dx = cords['x'],
            dy = cords['y'];
        var newtile = this.map.getTile(dx,dy);
        var at = 0;
        if(newtile instanceof Tile){
            v = newtile.frame;
            if(v>0){
                at = this.map.getSolidArr().indexOf(v)<0 ? 0 : this.mapContainer.getNumChildren();
                this.mapContainer.addChildAt(newtile,at);
            }
        }else{
            v = newtile;
            if(v>0){
                at = this.map.getSolidArr().indexOf(v)<0 ? 0 : this.mapContainer.getNumChildren();
                newtile = new Tile();
                newtile = this.mapContainer.addChildAt(newtile,at);
                this.map.setTile(dx,dy,newtile);
            }
        }
        if(v>0){
            newtile.x = cx * this.map.getTileSize();
            newtile.y = cy * this.map.getTileSize();
            newtile.frame = v;
            newtile.scale = this.tileScale;
        }
    }
    
    p.removeTile = function(t){
        if(t instanceof Tile){
            var cords = this.map.convertCords(t.x,t.y);
            this.map.setTile(cords['x'],cords['y'],t.frame);
            //t.frame = 0;
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
            //Tile.buildSheet(scale);
            this.clearDisplay();
            full=true;
            //times = 3;
        }
        
        var scrW = Global.stage.canvas.width,
            scrH = Global.stage.canvas.height,
            tSize = this.map.getTileSize();
        
        var dxt = Math.floor(x / tSize),
            dyt = Math.floor(y / tSize),
            dwt = Math.floor(scrW / tSize),
            dht = Math.floor(scrH / tSize); 
        
        var dX1 = Math.floor(dxt - ((dwt*0.5)/scale) - this.margin),
            dY1 = Math.floor(dyt - ((dht*0.5)/scale) - this.margin),
            dX2 = Math.floor(dxt + ((dwt*0.5)/scale) + this.margin),
            dY2 = Math.floor(dyt + ((dht*0.5)/scale) + this.margin);
        
        
        if(full){
            // Iterate through entire view bounds to append tiles
            for(var x=dX1;x<dX2;x++){
                for(var y=dY1;y<dY2;y++){
                    c = this.map.convertCords(x,y,true);
                    var tile = this.map.getTile(c.x,c.y);
                    this.addTile(x,y,tile);
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
                        c = this.map.convertCords(remX,l,true);
                        remTile = this.map.getTile(c.x,c.y);
                        this.removeTile(remTile);
                        if(l>=dY1 && l<=dY2){
                            c = this.map.convertCords(addX,l,true); 
                            var tile = this.map.getTile(c.x,c.y);
                            this.addTile(addX,l,tile);
                        }
                    }
                }
            }
            
            if(dY1!=deltas[2]){
                var dy1rel = dY1 - deltas[2];
                for(var m=0; m<Math.abs(dy1rel); m++){
                    for(var n=((dX1<deltas[0])?dX1:deltas[0]); n<((dX2>deltas[1])?dX2:deltas[1]); n++){
                        var addY,remY;
                        if(dy1rel>0){ // Top
                            remY = deltas[2]+m;
                            addY = deltas[3]+m;
                        }else{ // Bottom
                            remY = deltas[3]-m;
                            addY = deltas[2]-m;
                        }
                        c = this.map.convertCords(n,remY,true);
                        remTile = this.map.getTile(c.x,c.y);
                        this.removeTile(remTile);
                        if(n>=dX1 && n<=dX2){
                            c = this.map.convertCords(n,addY,true);
                            var tile = this.map.getTile(c.x,c.y);
                            this.addTile(n,addY,tile);
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
        }else{
            // Caching provides a bit of a performance boost
            this.mapContainer.cache(dX1*tSize,dY1*tSize,(dX2-dX1)*tSize,(dY2-dY1)*tSize,scale);
            var mapContext = this.mapContainer.cacheCanvas.getContext('2d');
            mapContext.imageSmoothingEnabled = false;
            mapContext.mozImageSmoothingEnabled = false;
        }
        
    }
    
    return World;
});
