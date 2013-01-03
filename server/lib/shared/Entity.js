var node = typeof window === 'undefined';
var deps = ['lib/global']; // RequireJS dependencies
var init = function(Global){
    
    if(node){
        Global = require('../Global');
    }
    
    var gravity = 1, gravSpeed = 1;
    
    var Entity = function(args){
        if(!args){args={}};
        this.get = this.__defineGetter__;
        this.set = this.__defineSetter__;
        var that = this;
        
        this.hitbox = {
            width   : args.width || 32,
            height  : args.height || 32
        } || args.hitbox || null;
        this.world = Global.world || args.world || null;
        this.get('map',function(){return this.world.map;});
        
        this.state = {
            x : 0,
            xSpeed : 0,
            xLimit : 20,
            xOffset : 0,
            y : 0,
            ySpeed : 0,
            yLimit : 20,
            yOffset : 0,
            Accel : 1,
            direction : 1,
            jumpStr : 15,
            onFloor : false,
            isFlying : false,
            flySpeed : 10,
            flyDir : -1,
            gravCount : 0,
        }
        
        this.effects = {}
        
        this.get('tileH',function(){return that.map.getTileSize();});
        this.get('tileW',function(){return that.map.getTileSize();});
        this.get('gravity',function(){return gravity;});
        this.get('gravSpeed',function(){return gravSpeed;});
    }
    
    var p = Entity.prototype;
    
    p.c2 = function(v, Y){ // Returns uncollided coordinate (ie coordinate of tile)
        var tSize = this.tileW; if(Y){tSize=this.tileH;}
        return Math.floor(v/tSize) * tSize;
    }
    
    p.chkSolid = function(xCord,yCord){
        var cords = this.map.convertCords(xCord,yCord), // Check and Region coords
            cx = cords["x"],
            cy = cords["y"],
            rx = cords["rx"],
            ry = cords["ry"];
                
        if((ry==0 && cy<=0) || (ry>this.map.wSize && cy>=this.map.rSize)){// Prevent Y looping
            return true;
        }
        if((cx>=0 && cy>=0 && cx<this.map.rSize && cy<this.map.rSize) &&
           (ry>=0 && ry<this.map.wSize)){
            var leTile = this.map.world[ry][rx][cy][cx]; // Check map array for tile
            if(leTile!=null){
                if(this.map.getSolidArr().indexOf(leTile.val)>-1){ // Check map's solid array
                    return true;
                }else{
                    return false;
                }
            }else{
                return false;
            }
        }else{
            trace("Collision prevented: " + cx + " " + cy + " " + rx + " " + ry);
            return true;
        }
    }
    
    p.tick = function(){
        // hitbox, chkSolid, gravity, gravSpeed
        
        with(this.state){
            
            var Cx = x; // Center of the object
            var Cy = y;
            var Ty = Math.round(y - (this.hitbox.height * 0.5));
            var By = Math.round(y + (this.hitbox.height * 0.5));
            var Lx = Math.round(x - (this.hitbox.width  * 0.5));
            var Rx = Math.round(x + (this.hitbox.width  * 0.5));
            /*  These variables predict which tile the character would be in were it to start or
                continue moving. They are used for checking ahead with the axis in question. */
            var pTy;
            var pBy;
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
            var pLx;
            var pRx;
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
                cRx = pLx + this.hitbox.width;
                pDx = pLx;
            }else if(xSpeed>0){
                direction = 1;
                cLx = pRx - this.hitbox.width; 
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
                        if(!this.chkSolid(Lx,Ty) && this.chkSolid(Rx,Ty)){ x = Math.floor(c2(Rx) - hw) - 1; }
                        if(this.chkSolid(Lx,Ty) && !this.chkSolid(Rx,Ty)){ x = Math.floor(c2(Lx) + tileW + hw); }
                    }else{
                        ySpeed = 0;
                        y = Math.floor(c2(pTy) + tileH + hh);                      
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
                        c = c + hw + tileW; // Position sums
                    }else if(xSpeed>0){
                        c = c - hw - 1; // -1 works because of rounding 
                    } 
                    x = Math.round(c); // Move next to collided object
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
        }
    }
    
    return Entity;
    
};

if(node){ // Server side
    module.exports = init();
}else{ // Client side
    define(deps,init);
}