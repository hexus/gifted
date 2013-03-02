(function(){
var node = typeof window === 'undefined'; // JSLint can suck my balls
var deps = ['createjs','lib/global']; // RequireJS dependencies

var init = function(createjs,Global){
    if(node){
        Global = require('../Global');
    }
    
    var gravity = 1, gravSpeed = 1;
    
    var Entity = function(args){
        if(!args){args={};}
        if(!node){this.initialize();}
        this.get = this.__defineGetter__;
        this.set = this.__defineSetter__;
        var that = this;
        
        this.eid = 0;
        this.hitbox = {
            width   : args.width || 32,
            height  : args.height || 32
        };
        this.world = Global.world || args.world || null;
        this.get('room',function(){return this.world;})
        this.get('map',function(){return this.world.map;});
        
        this.x = 0;
        this.y = 0;
        
        this.state = {
            x : args.x || 0,
            xSpeed : 0,
            xLimit : 12,
            xOffset : 0,
            y : args.y || 0,
            ySpeed : 0,
            yLimit : 20,
            yOffset : 0,
            Accel : 1,
            direction : 1,
            angle: 0,
            jumpStr : 12,
            onFloor : false,
            isFlying : false,
            flySpeed : 20,
            flyDir : -1,
            gravCount : 0,
        };
        
        this.lastState = {};
        
        this.rotateWithSpeed = false;
        this.hasCollided = false;
        this.isRubbish = false;
        this.isRubbishOnCollide = false;
        
        this.effects = {};
        
        this.get('x',function(){return that.state.x;});
        this.set('x',function(v){that.state.x=v;});
        this.get('y',function(){return that.state.y;});
        this.set('y',function(v){that.state.y=v;});
        this.get('tileH',function(){return that.map.getTileSize();});
        this.get('tileW',function(){return that.map.getTileSize();});
        this.get('gravity',function(){return gravity;});
        this.get('gravSpeed',function(){return gravSpeed;});
        
        if(Global.debug){
            this.hitboxShape = false;
        }
    }
    
    var p = Entity.prototype;
    if(!node){
        p = Entity.prototype = new createjs.Container();
    }
    p.constructor = Entity;
    
    p.getDelta = function(a,b,readonly){ // Might be useful later
        var delta = {};
        for(var i in a){
            if(a[i]!=b[i]){
                delta[i] = a[i];
            }
        }
        return delta;
    }
    
    p.getStateDelta = function(readonly){
    	var delta = {};
    	for(var i in this.state){
    		if(JSON.stringify(this.state[i])!=JSON.stringify(this.lastState[i])){
    			delta[i] = this.state[i];
    			if(!readonly){
    			    this.lastState[i] = JSON.parse(JSON.stringify(delta[i]));
    			}
    		}
    	}
    	
    	// Filter out unnecessary state properties
        var care;
        for(i in delta){
            care = true;
            switch(i){
                case "flyDir":
                    care = this.state.isFlying;
                    break;
                case "gravCount": case "onFloor": case "angle":
                    care = false;
                    break;
            }
            if(!care){
                delete(delta[i]);
            }
        }
    	return delta;
    }
    
    p.spawn = function(x,y){
        if(!node){
            if(!this.world.entityContainer.contains(this)){
                this.world.entityContainer.addChild(this);
            }
        }
        
        if(!(x&&y)){
            if(this.state.x==0 || this.state.y==0){
                this.x = this.map.getSpawn().x * this.map.getTileSize();
                this.y = this.map.getSpawn().y * this.map.getTileSize();
            }else{
                this.x = this.state.x;
                this.y = this.state.y;
            } 
        }else{
            this.x = x;
            this.y = y;
        }
    }
    
    p.unspawn = function(){
        if(!node){
            if(this.world.entityContainer.contains(this)){
                this.world.entityContainer.removeChild(this);
            }
        }
    }
    
    p.c2 = function(v, Y){ // Returns uncollided coordinate (ie coordinate of tile)
        var tSize = this.tileW; if(Y){tSize=this.tileH;}
        return Math.floor(v/tSize) * tSize;
    }
    
    p.chkSolid = function(xCord,yCord){
        var cords = this.map.convertCords(xCord,yCord); // Check and Region coords
        var cx = cords["x"],
            cy = cords["y"],
            rx = cords["rx"],
            ry = cords["ry"];
                
        if((ry==0 && cy<=0) || ry>this.map.getWorldSize().height && cy>=this.map.getRegionSize().height){// Prevent Y looping
            return true;
        }
        if((cx>=0 && cy>=0 && cx<this.map.getRegionSize().width && cy<this.map.getRegionSize().height) &&
           (ry>=0 && ry<this.map.getWorldSize().height)){
            var leTile = this.map.getTile(rx,ry,cx,cy); // Check map array for tile
            
            if(typeof leTile == 'object'){
                leTile = leTile.frame;
            }else{ // Typing problems going on here, only tile objects working
                leTile = parseInt(leTile);
            }
            
            if(leTile!=null){
                if(this.map.getSolidArr().indexOf(leTile)>-1){ // Check map's solid array
                    this.hasCollided = true;
                    return true;
                }else{
                    return false;
                }
            }else{
                return false;
            }
        }else{
            console.log("Out of bounds collision: " + rx + " " + ry + " " + cx + " " + cy,this.state.x,this.state.y,this.state.direction);
            return true;
        }
    }
    
    p.tick = function(){
        
        if(Global.debug && Global.debugObj.showHitboxes && !this.hitboxShape){
            var g = new createjs.Graphics();
            g.beginStroke("#F0F").beginFill("#F44").drawRect(-this.hitbox.width*0.5,-this.hitbox.height*0.5,this.hitbox.width,this.hitbox.height);
            var s = new createjs.Shape(g);
            s.alpha = 0.5;
            s.x = s.y = 0;
            this.hitboxShape = this.addChild(s);
        }
        
        if(this.life>0){
            this.life--;
        }
        
        if(!this.isRubbish){
            with(this.state){
                var Cx = x; // Center of the object
                var Cy = y;
                var Ty = Math.round(y - (this.hitbox.height * 0.5));
                var By = Math.round(y + (this.hitbox.height * 0.5));
                var Lx = Math.round(x - (this.hitbox.width  * 0.5));
                var Rx = Math.floor(x + (this.hitbox.width  * 0.5));
                /*  These variables predict which tile the character would be in were it to start or
                    continue moving. They are used for checking ahead with the axis in question. */
                var pTy=0;
                var pBy=0;
                if(ySpeed!=0){
                    pTy = Ty+ySpeed;
                    pBy = By+ySpeed;
                }else{
                    pTy = Ty-jumpStr;
                    pBy = By+Accel; // jumpStr
                    if(isFlying){
                        pTy = Ty-Accel; // flyspeed
                        pBy = By+Accel; // flySpeed
                    }
                }
                var pLx=0;
                var pRx=0;
                if(xSpeed!=0){
                    pLx = Lx+xSpeed;
                    pRx = Rx+xSpeed;
                }else{
                    pLx = Lx+(Accel*direction);
                    pRx = Rx+(Accel*direction);
                }
                
                // Switch back to true direction and make extra prediction cords
                var pDx; // Prediction of X location after movement based on direction           
                var cLx = Lx, cRx = Rx;
                if(xSpeed<0){
                    direction = -1;
                    cLx = pLx; 
                    cRx = pLx;// + this.hitbox.width;
                    pDx = pLx;
                }else if(xSpeed>0){
                    direction = 1;
                    cLx = pRx;// - this.hitbox.width; 
                    cRx = pRx;
                    pDx = pRx;
                }
                
                // Fly direction
                flyDir = ySpeed>0 ? 1 : -1;
                
                var hh = Math.floor(this.hitbox.height*0.5); // Half height
                var hw = Math.floor(this.hitbox.width*0.5); // Half width
                var qh = Math.floor(this.hitbox.height*0.25); // Quarter height
                
                // Y
                if(!this.chkSolid(Lx,pBy) && !this.chkSolid(Rx,pBy) && !this.chkSolid(Cx,pBy)){ // In mid-air
                    onFloor = false;
                    if((ySpeed+this.gravity)<=yLimit && gravCount>=this.gravSpeed){ // Apply gravity
                        if(!isFlying){
                            ySpeed += this.gravity;
                            gravCount=0;
                        }
                    }else{
                        gravCount++;
                    }
                    if(ySpeed<=0){ // if travellin upwards and there's shit above, stop dis shit
                        if( !(this.chkSolid(Lx,pTy) && this.chkSolid(Rx,pTy)) && !this.chkSolid(Cx,pTy) ){
                            // nudge character a bit if there ain't that much shit above
                            if(!this.chkSolid(Lx,Ty) && this.chkSolid(Rx,Ty)){ x = Math.floor(this.c2(Rx) - hw -1); }
                            if(this.chkSolid(Lx,Ty) && !this.chkSolid(Rx,Ty)){ x = Math.floor(this.c2(Lx) + this.tileW + hw); }
                        }else{
                            ySpeed = 0;
                            y = Math.floor(this.c2(pTy) + this.tileH + hh);
                        }
                    }
                }else{ // On a surface
                    onFloor = true;
                    if(ySpeed>=0 || (isFlying && ySpeed<0)){ // if fallin and there's shit below, land on dat shit
                        if((this.chkSolid(cLx,pBy) || this.chkSolid(cRx,pBy)) || this.chkSolid(Cx,pBy)){
                            y = Math.floor(this.c2(pBy) - hh);
                        }
                    }
                    if((!isFlying && ySpeed!=0) || (isFlying && ySpeed>0)){
                        ySpeed = 0;
                    }
                    if(ySpeed<0){ // Move up if there's not too much in the way above
                        if((this.chkSolid(Lx,pTy) && this.chkSolid(Rx,pTy)) && this.chkSolid(Cx,pTy)){
                            ySpeed = 0;
                        }
                    }
                }
                
                // X
                if(xSpeed!=0){
                    var doMove = false;
                    // Test for collisions and such
                    if(!this.chkSolid(pDx,pTy) && !this.chkSolid(pDx,pBy) && !this.chkSolid(pDx,Cy)
                       && !((this.chkSolid(pDx,Cy+qh)) || (this.chkSolid(pDx,Cy-qh)))){
                        doMove = true;
                    }else{
                        if(!this.chkSolid(pDx,Cy)){ // Main X rules
                            if( !((this.chkSolid(pDx,pBy) && ySpeed>0) ||
                                  (this.chkSolid(pDx,pTy) && ySpeed<0) ||
                                  (this.chkSolid(pDx,Ty) && ySpeed==0)||
                                  (this.chkSolid(pDx,Cy+qh)) ||
                                  (this.chkSolid(pDx,Cy-qh)) )
                               ){
                                doMove = true;
                            }
                        }
                    }
                    if(!doMove){ // If there is a collision
                        var c = this.c2(pDx);
                        if(xSpeed<0){ 
                            c = c + hw + this.tileW; // Position sums
                        }else if(xSpeed>0){
                            c = c - hw - 1; // -1 works because of rounding
                        } 
                        x = c; // Move next to collided object
                        xSpeed = 0;
                    }
                }
                
                // Effects management
                    mod = {};
                    for(var e in this.effects){
                        var k;
                        var ef = effects[e];
                        //trace("e: " + e + " ef: " + ef.type + " dur: " + ef.durationCount);
                        if(ef.durationCount>0){
                            switch(ef.type){
                                case 2: k = "xLim"; break;
                                case 3: k = "xForce"; break;
                                case 4: k = "yForce"; break;
                            }
                            if(k){
                                if(!mod[k]){mod[k] = 0;} // initialise
                                mod[k] += ef.amount; // modify
                            }
                            ef.durationCount--;
                        }
                        world.debug("e",e);
                        world.debug("ef",ef.type.toString());
                        world.debug("ed",ef.durationCount);
                        if(ef.durationCount<1){
                            var r = effects.splice(e,1); // Delete expended effects
                        }
                    }
                
                // Enforce limits
                    var xLim = isFlying ? flySpeed : xLimit;
                    xLim += mod["xLim"] ? mod["xLim"] : 0;
                    var yLim = isFlying ? flySpeed : yLimit;
                    yLim += mod["yLim"] ? mod["yLim"] : 0;
                    if(xLim<1){xLim = 1;} // Ensure they aren't
                    if(yLim<1){yLim = 1;} // negative limits
                    if(Math.abs(xSpeed)>xLim){ xSpeed = xSpeed > 0 ? xLim : -xLim; }
                    if(Math.abs(ySpeed)>yLim){ ySpeed = ySpeed > 0 ? yLim : -yLim; }
                
                // Apply force effects
                    xSpeed += mod["xForce"] ? mod["xForce"] : 0;
                    ySpeed += mod["yForce"] ? mod["yForce"] : 0;
                
                // Apply movement based on above calculations
                    x += xSpeed;
                    y += ySpeed;
                    
                    if(xSpeed!=0||ySpeed!=0){
                        this.updateRotation();
                    }
            }
            
            this.x = this.state.x;
            this.y = this.state.y;
        }
        
        if(this.life===0 || (this.hasCollided && this.isRubbishOnCollide)){
            this.isRubbish = true;
            this.state.xSpeed = 0;
            this.state.ySpeed = 0;
            this.state.isFlying = true;
        }
        //this.streamTick();
    }
    
    p.updateRotation = function(){
        if(this.rotateWithSpeed){
            with(this.state){
                angle = Math.atan2(ySpeed,xSpeed)*180/Math.PI;
                this.rotation = direction>0 ? angle : angle-180;
            }
        }
    }
    
    p.streamTick = function(){

    }

    return Entity;
    
};

if(node){ // Server side
    module.exports = init();
}else{ // Client side
    define(deps,init);
}
})();
