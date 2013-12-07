define(['createjs','lib/global','lib/player'],
function(createjs,Global,Player){
    var spritesheets_frames = {width:128,height:128,regX:63,regY:63};
    var spritesheets_animations = {
        idle: [0,0],
        run: [1,9]
    };
    
    var spritesheets = {
        legLeft:new createjs.SpriteSheet({
            framerate: 16,
            images: ['img/vichi-2_7/vichi-2_7_leg-left.png'],
            frames: spritesheets_frames,
            animations: spritesheets_animations
        }),
        legRight:new createjs.SpriteSheet({
            framerate: 16,
            images:['img/vichi-2_7/vichi-2_7_leg-right.png'],
            frames:spritesheets_frames,
            animations: spritesheets_animations
        }),
        dressLower:new createjs.SpriteSheet({
            framerate: 16,
            images:['img/vichi-2_7/vichi-2_7_dress-lower.png'],
            frames:spritesheets_frames,
            animations: spritesheets_animations
        }),
    };
    
    var Vichi = function(args){
        this.initialize();
        if(!args){args={};}
        this.super_Player.constructor.call(this,args); // Superclass constructor
        
        this.layers = {
            hairBehind: this.addChild(new createjs.Bitmap('img/vichi-2_7/vichi-2_7_hair-behind.png')),
            armRight:   this.addChild(new createjs.Bitmap('img/vichi-2_7/vichi-2_7_arm-right.png')),
            legRight:   this.addChild(new createjs.Sprite(spritesheets.legRight)),
            torso:      this.addChild(new createjs.Bitmap('img/vichi-2_7/vichi-2_7_torso.png')),
            legLeft:    this.addChild(new createjs.Sprite(spritesheets.legLeft)),
            dressLower: this.addChild(new createjs.Sprite(spritesheets.dressLower)),
            dressUpper: this.addChild(new createjs.Bitmap('img/vichi-2_7/vichi-2_7_dress-upper.png')),
            armLeft:    this.addChild(new createjs.Bitmap('img/vichi-2_7/vichi-2_7_arm-left.png')),
            head:       this.addChild(new createjs.Bitmap('img/vichi-2_7/vichi-2_7_head.png')),
            hair:       this.addChild(new createjs.Bitmap('img/vichi-2_7/vichi-2_7_hair.png')),
        };
        
        for(var l in this.layers){
            if(this.layers[l] instanceof createjs.Bitmap){
                this.layers[l].regX = this.layers[l].regY = 64;
            }
        }
        
        this.hitbox = {
            width:32,
            height:110
        };
        
        this.hitboxFull = JSON.parse(JSON.stringify(this.hitbox));
        
        this.toAnimate = ['legLeft','legRight','dressLower'];
        
        this.clip.visible = false;
        //this.hitboxFull
        
    };
    
    var p = Vichi.prototype = new Player();
    p.super_Player = Player.prototype;
    p.constructor = Vichi;
    
    p.tick = function(){
        this.super2.tick.call(this);
        if(this.state.xSpeed!=0){
            for(var l in this.toAnimate){
                if(this.layers[this.toAnimate[l]].currentAnimation!='run'){
                    this.layers[this.toAnimate[l]].gotoAndPlay('run');
                }
            }
        }else{
            for(var l in this.toAnimate){
                if(this.layers[this.toAnimate[l]].currentAnimation!='idle'){
                    this.layers[this.toAnimate[l]].gotoAndStop('idle');
                }
            }
        }
    }
    
    return Vichi;
});