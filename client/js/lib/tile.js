define(['createjs','assets','lib/global'],
function(createjs,lib,Global){
    var Tile = function(frame,x,y,scale){
    	this.initialize();
    	var that = this;
        var _f = 0;
        var _scale = scale || 1;
        
        /* // may be useful for caching other objects
        this.clip = new lib.giftedclienttiles();
        this.clip.startPosition = _f;
        this.clip.mode = 0;
        this.clip.scaleX = this.clip.scaleY = this.scale;
        this.cacheTile();
        */

        this.get = this.__defineGetter__;
        this.set = this.__defineSetter__;
        
        this.get('frame',function(){ // Testing getters and setters
            return _f;
        });
        this.set('frame',function(f){
            if(_f!=f){
                _f = f || 0;
                var getFrame = Global.tiles.getFrame(_f);
                if(getFrame){
                    that.clip = new createjs.Bitmap(getFrame.image); // This is very, very fast
                    that.clip.sourceRect = getFrame.rect;
                    that.addChild(that.clip);
                    that.clip.scaleX = that.clip.scaleY = that.scale;
                    
                    that.clip2 = that.clip.clone(); // Clone because vector drawing is a bit holey with CreateJS
                    that.clip2.sourceRect = getFrame.rect;
                    //that.addChild(that.clip2);
                    that.clip2.scaleX = that.clip2.scaleY = that.scale;
                }
            }
        });
        
        this.get('scale',function(){
            return _scale;
        })
        this.set('scale',function(s){
            if(_scale!=s){
                _scale = s;
                if(that.clip){
                    that.clip.scaleX = that.clip.scaleY = that.scale;
                    that.clip2.scaleX = that.clip2.scaleY = that.scale;
                }
            }
        });
        
        this.x = x || 0;
        this.y = y || 0;
        if(frame){this.frame = frame;}
        this.scale = _scale;
        
    }
    
    var p = Tile.prototype = new createjs.Container();
    
    p.cacheTile = function(){ // redundant when using spritesheet
        this.clip.cache(-4,-4,72,72,1);
        this.clip.updateCache();
    }
    
    p.toString = function(){
        return this.frame;
    }
    
    return Tile;
});
