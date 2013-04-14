(function(){
var node = typeof window === 'undefined'; // JSLint can suck my balls
var deps = ['createjs','lib/global','shared/Effect']; // RequireJS dependencies

var init = function(createjs,Global,Effect){
    if(node){
        Global = require('../Global');
        Effect = require('./Effect');
    }
    
    var gravity = 1, gravSpeed = 1;
    
    var Entity = function(args){
        if(!args){args={};}
        if(!node){this.initialize();}
        this.get = this.__defineGetter__;
        this.set = this.__defineSetter__;
        var that = this;
        
        this.eid = args.eid || 0;
        this.hitbox = {
            width   : args.width || 32,
            height  : args.height || 32
        };
        this.world = Global.world || args.world || null;
        this.get('room',function(){return that.world;})
        this.get('map',function(){return that.world.map;});
        this.get('tileH',function(){return that.map.getTileSize();});
        this.get('tileW',function(){return that.map.getTileSize();});
        this.get('gravity',function(){return gravity;});
        this.get('gravSpeed',function(){return gravSpeed;});
        
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
            angle: args.angle || 0,
            jumpStr : 12,
            onFloor : false,
            isFlying : false,
            flySpeed : 20,
            flyDir : -1,
            gravCount : 0,
        };
        
        this.lastState = {};
        
        this.get('x',function(){return that.state.x;});
        this.set('x',function(v){that.state.x=v;});
        this.get('y',function(){return that.state.y;});
        this.set('y',function(v){that.state.y=v;});
        
        this.life = -1;
        this.isRubbish = false;
        this.hasCollided = false;
        this.isRubbishOnCollide = false;
        this.rotateWithSpeed = false;
        
        this.effects = [];
        this.affected = false;
        
        // Latency compensation
        this.interpolate = false;
        this.interpBuffer = []; // format: {time:0,states:{x:0,y:0}};
        this.interpSpeed = 3; // Expect a new state after this many ticks / interpolate over this many ticks
        this.interpWait = this.interpSpeed; // How many steps to wait before starting interpolation
        this.interpStep = this.interpSpeed+1; // How far we are through the current interpolation
        this.interpFrom = {}; // The state to interpolate from
        this.interpExclude = ['aimDir','direction','health']; // States to exclude from interpolation
        
        
        if(!node && Global.debug){
            this.hitboxShape = false;
            this.rayPoints = this.addChild(new createjs.Container());
        }
        
        /*if(this.life===0){
            if(typeof this.onDeath === 'function'){
                this.onDeath();
            }
        }*/
    }
    
    var p = Entity.prototype;
    if(!node){
        p = Entity.prototype = new createjs.Container();
    }
    p.constructor = Entity;
    
    p.applyEffect = function(e){
        if(e instanceof Effect){
            this.effects.push(e);
        }
    }
    
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
                case "gravCount": case "onFloor":
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
    
    // Bresenham's line algorithm
    p.getRay = function(){
        var x0 = this.x;
        var y0 = this.y;
        var x1 = x0 + this.state.xSpeed;
        var y1 = y0 + this.state.ySpeed;
        
        var dx = Math.abs(x1-x0);
        var dy = Math.abs(y1-y0);
        var sx = x0 < x1 ? 1 : -1;
        var sy = y0 < y1 ? 1 : -1;
        var err = dx-dy;
        
        var ray = [];
        while(x0!=x1 || y0!=y1){
            ray.push([x0,y0]);
            var e2 = 2*err;
            if(e2>-dy){
                err = err - dy;
                x0 += sx;
            }
            if(e2<dx){
                err = err + dx;
                y0 += sy;
            }
        }
        
        // Ignore half of the line (minor performance improvement for bullets)
        var rayLen = ray.length;
        for(var i=0;i<rayLen;i++){
            if(i%2==0){
                ray.splice(i,1);
            }
        }
        
        return ray;
    }
    
    p.chkCollision = function(x,y){
        var state = this.state;
        var hitbox = this.hitbox;
        var cX = (x > state.x - Math.round(hitbox.width/2)) && (x < state.x + Math.round(hitbox.width/2));
        var cY = (y > state.y - Math.round(hitbox.height/2)) && (y < state.y + Math.round(hitbox.height/2));
        return (cX && cY);
    }
    
    p.c2 = function(v, Y){ // Returns uncollided coordinate (ie coordinate of tile)
        this.hasCollided = true;
        var tSize = this.tileW; if(Y){tSize=this.tileH;}
        return Math.floor(v/tSize) * tSize;
    }
    
    p.chkSolid = function(xCord,yCord){ // Why the fuck isn't this in Map?
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
                    //this.hasCollided = true;
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
        
        var state = this.state;
        var hitbox = this.hitbox;
        
        if(!node && Global.debug){
            if(Global.debugObj.showHitboxes && !this.hitboxShape){
                var g = new createjs.Graphics();
                g.beginStroke("#F0F").beginFill("#F44").drawRect(-hitbox.width*0.5,-hitbox.height*0.5,hitbox.width,hitbox.height);
                var s = new createjs.Shape(g);
                s.alpha = 0.5;
                s.x = s.y = 0;
                this.hitboxShape = this.addChild(s);
            }
            
            // rays
            if(Global.debugObj.showRays){
                this.rayPoints.removeAllChildren();
                this.rayPoints.rotation = this.scaleX>0 ? -this.rotation : this.rotation;
                this.rayPoints.scaleX = -this.scaleX;
                this.rayPoints.scaleY = -this.scaleY;
                var ray = this.getRay();
                for(var i=0;i<ray.length;i++){
                    var g = new createjs.Graphics();
                    g.f("#F44").dc(0,0,1);
                    var s = new createjs.Shape(g);
                    s.x = this.x-ray[i][0];
                    s.y = this.y-ray[i][1];
                    this.rayPoints.addChild(s);
                }
            }
        }
        
        if(this.life>0){
            this.life--;
        }
        
        // Effects management
        for(var e in this.effects){
            var ef = this.effects[e];
            if(ef){
                for(var a in ef.state.affects){
                    if(state[a]!=null){
                        state[a] += ef.state.affects[a]; // Apply effect
                    }
                }
                ef.state.life--;
                if(ef.state.life<1){
                    this.effects.splice(e,1); // Delete expended effects
                }
            }
        }
        
        if(!this.isRubbish){
            var Cx = state.x; // Center of the object
            var Cy = state.y;
            var Ty = Math.round(state.y - (hitbox.height * 0.5));
            var By = Math.round(state.y + (hitbox.height * 0.5));
            var Lx = Math.round(state.x - (hitbox.width  * 0.5));
            var Rx = Math.floor(state.x + (hitbox.width  * 0.5));
            /*  These variables predict which tile the character would be in were it to start or
                continue moving. They are used for checking ahead with the axis in question. */
            var pTy=0;
            var pBy=0;
            if(state.ySpeed!=0){
                pTy = Ty+state.ySpeed;
                pBy = By+state.ySpeed;
            }else{
                if(state.onFloor){
                    pTy = Ty-state.jumpStr;
                }else{
                    pTy = Ty-state.Accel;
                }
                pBy = By+state.Accel; // jumpStr
                if(state.isFlying){
                    pTy = Ty-state.Accel; // flyspeed
                    pBy = By+state.Accel; // flySpeed
                }
            }
            var pLx=0;
            var pRx=0;
            if(state.xSpeed!=0){
                pLx = Lx+state.xSpeed;
                pRx = Rx+state.xSpeed;
            }else{
                pLx = Lx+(state.Accel*state.direction);
                pRx = Rx+(state.Accel*state.direction);
            }
            
            // Switch back to true direction and make extra prediction cords
            var pDx; // Prediction of X location after movement based on direction           
            var cLx = Lx, cRx = Rx;
            if(state.xSpeed<0){
                state.direction = -1;
                cLx = pLx; 
                cRx = pLx;// + this.hitbox.width;
                pDx = pLx;
            }else if(state.xSpeed>0){
                state.direction = 1;
                cLx = pRx;// - this.hitbox.width; 
                cRx = pRx;
                pDx = pRx;
            }
            
            // Fly direction
            state.flyDir = state.ySpeed>0 ? 1 : -1;
            
            var hh = Math.floor(hitbox.height*0.5); // Half height
            var hw = Math.floor(hitbox.width*0.5); // Half width
            var qh = Math.floor(hitbox.height*0.25); // Quarter height
            
            // Y
            if(!this.chkSolid(Lx,pBy) && !this.chkSolid(Rx,pBy) && !this.chkSolid(Cx,pBy)){ // In mid-air
                state.onFloor = false;
                if((state.ySpeed+this.gravity)<=state.yLimit && state.gravCount>=this.gravSpeed){ // Apply gravity
                    if(!state.isFlying){
                        state.ySpeed += this.gravity;
                        state.gravCount=0;
                    }
                }else{
                    state.gravCount++;
                }
                if(state.ySpeed<=0){ // if travellin upwards and there's shit above, stop dis shit
                    if( !(this.chkSolid(Lx,pTy) && this.chkSolid(Rx,pTy) && this.chkSolid(Cx,pTy))){
                        // nudge character a bit if there ain't that much shit above
                        if(!this.chkSolid(Lx,Ty) && this.chkSolid(Rx,Ty)){ state.x = Math.floor(this.c2(Rx) - hw - 1); }
                        if(this.chkSolid(Lx,Ty) && !this.chkSolid(Rx,Ty)){ state.x = Math.floor(this.c2(Lx) + this.tileW + hw); }
                    }else{
                        state.ySpeed = 0;
                        state.y = Math.floor(this.c2(pTy) + this.tileH + hh);
                    }
                }
            }else{ // On a surface
                state.onFloor = true;
                state.gravCount = 0;
                if(state.ySpeed>=0 || (state.isFlying && state.ySpeed<0)){ // if fallin and there's shit below, land on dat shit
                    if((this.chkSolid(cLx,pBy) || this.chkSolid(cRx,pBy)) || this.chkSolid(Cx,pBy)){
                        state.y = Math.floor(this.c2(pBy) - hh);
                        state.ySpeed = 0;
                    }
                }
                if((!state.isFlying && state.ySpeed!=0) || (state.isFlying && state.ySpeed>0)){
                    //ySpeed = 0;
                }
                if(state.ySpeed<0){ // Move up if there's not too much in the way above
                    if((this.chkSolid(Lx,pTy) && this.chkSolid(Rx,pTy)) && this.chkSolid(Cx,pTy)){
                        state.ySpeed = 0;
                    }
                }
            }
            
            // X
            if(state.xSpeed!=0){
                var doMove = false;
                // Test for collisions and such
                if(!this.chkSolid(pDx,pTy) && !this.chkSolid(pDx,pBy) && !this.chkSolid(pDx,Cy)
                   && !((this.chkSolid(pDx,Cy+qh)) || (this.chkSolid(pDx,Cy-qh)))){
                    doMove = true;
                }else{
                    if(!this.chkSolid(pDx,Cy)){ // Main X rules
                        if( !((this.chkSolid(pDx,pBy) && state.ySpeed>0) ||
                              (this.chkSolid(pDx,pTy) && state.ySpeed<0) ||
                              (this.chkSolid(pDx,Ty) && state.ySpeed==0)||
                              (this.chkSolid(pDx,Cy+qh)) ||
                              (this.chkSolid(pDx,Cy-qh)) )
                           ){
                            doMove = true;
                        }
                    }
                }
                if(!doMove){ // If there is a collision
                    var c = this.c2(pDx);
                    if(state.xSpeed<0){ 
                        c = c + hw + this.tileW; // Position sums
                    }else if(state.xSpeed>0){
                        c = c - hw - 1; // -1 works because of rounding
                    } 
                    state.x = c; // Move next to collided object
                    state.xSpeed = 0;
                }
            }
            
            // Apply movement based on above calculations
                state.x += state.xSpeed;
                state.y += state.ySpeed;
                
                if(state.xSpeed!=0||state.ySpeed!=0){
                    this.updateRotation();
                }
                
            // Enforce limits
                var xLim = state.isFlying ? state.flySpeed : state.xLimit;
                var yLim = state.isFlying ? state.flySpeed : state.yLimit;
                if(xLim<1){xLim = 1;} // Ensure they aren't
                if(yLim<1){yLim = 1;} // negative limits
                if(Math.abs(state.xSpeed)>xLim){ state.xSpeed = state.xSpeed > 0 ? xLim : -xLim; }
                if(Math.abs(state.ySpeed)>yLim){ state.ySpeed = state.ySpeed > 0 ? yLim : -yLim; }
            
            state.x = state.x;
            state.y = state.y;
        }
        
        if(Global.socket){
            if(Global.socket.connected){
                this.streamTick();
            }
        }
        
        if(this.life===0 || (this.hasCollided && this.isRubbishOnCollide)){
            this.isRubbish = true;
            state.xSpeed = 0;
            state.ySpeed = 0;
            state.isFlying = true;
            if(typeof this.onDeath === 'function'){
                this.onDeath();
            }
            if(this.spawnerParent){
                if(typeof this.spawnerParent.leave === 'function'){
                    this.spawnerParent.leave(this);
                }
            }
        }
        
            
        
    }
    
    p.updateRotation = function(){
        var state = this.state;
        if(this.rotateWithSpeed){
            state.angle = Math.atan2(state.ySpeed,state.xSpeed)*180/Math.PI;
            this.rotation = state.direction>0 ? state.angle : state.angle-180;
        }
    }
    
    p.streamTick = function(){
        if(this.interpolate){
            var state = this.state;
            var buf = this.interpBuffer;
            var interpSpeed = this.interpSpeed;
            
            // Variable interpolation speed based on the buffer size
            //interpSpeed = buf.length>2 ? interpSpeed-1 : interpSpeed;
            
            // If we're too far behind, skip to the last two states in the buffer
            if(buf.length>2){
                while(buf.length>2){
                    buf.splice(0,1);
                }
            }

            // Perform interpolation
            if(this.interpStep<interpSpeed){
                this.interpStep++;
                if(this.interpStep>0){
                    var from = this.interpFrom;
                    var to = buf[0].state;
                    var t = 1/(interpSpeed/this.interpStep);
                    for(var i in to){
                        if(typeof to[i] == 'number' && this.interpExclude.indexOf(i)<0){
                            state[i] = Math.round(this.lerp(from[i],to[i],t));
                        }else{
                            state[i] = to[i];
                        }
                    }
                    if(t==1){
                        buf.shift();
                        if(buf.length<1){ // && wait<speed, wait++
                            this.interpWait = this.interpSpeed;
                        }
                    }
                }
                
            }
            
            if(this.interpStep>=interpSpeed && buf.length>0){
                this.interpFrom = JSON.parse(JSON.stringify(state)); // Current state
                this.interpStep = 0-this.interpWait;
                if(this.interpWait>0){this.interpWait=0;}
            }
        }
    }
    
    p.lerp = function(x,y,t){ // Linear interpolation
        return x+(y-x)*t;
    }
    
    p.updateState = function(state){
        for(var i in state){
            if(this.state[i]!=null && typeof this.state[i] === typeof state[i]){
                this.state[i] = state[i];
            }
        }
        //this.tick(); // Keep physics in check immediately
    }
    
    p.bufferState = function(state){
        var time = new Date();
        var late = false;
        var lastState = this.interpBuffer[this.interpBuffer.length-1];
        
        if(this.interpolate){ // Buffer state update
            this.interpBuffer.push({time:time,state:state});
        }else{ // Apply immediately, clear buffer
            while(this.interpBuffer.length>0){
                this.interpBuffer.splice(0,1);
            }
            this.interpStep = this.interpSpeed+1;
            this.updateState(state);
        }
    }

    return Entity;
    
};

if(node){ // Server side
    module.exports = init();
}else{ // Client side
    define(deps,init);
}
})();
