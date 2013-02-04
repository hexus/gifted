define(['createjs','assets','lib/global'],
function(createjs,lib,Global){
    
    var globalScale = 1;
    
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
        
        this.get('frame',function(){
            return _f;
        });
        this.set('frame',function(f){
            _f = f || 0;
            var getFrame = Global.tiles.getFrame(_f);
            if(getFrame){
                if(that.clip){
                    if(that.clip.parent){
                        that.clip.parent.removeChild(that.clip);
                    }
                }
                that.clip = new createjs.Bitmap(getFrame.image); // This is very fast
                that.clip.sourceRect = getFrame.rect;
                that.addChild(that.clip);
                that.clip.scaleX = that.clip.scaleY = that.scale;
            }
        });
        
        this.get('scale',function(){
            return _scale / globalScale;
        })
        this.set('scale',function(s){
            if(_scale!=s){
                _scale = s;
                if(that.clip){
                    that.clip.scaleX = that.clip.scaleY = that.scale;
                }
            }
        });
        
        this.x = x || 0;
        this.y = y || 0;
        this.regX = this.regY = 4;
        if(frame){this.frame = frame;}
        this.scale = _scale;
        
    }
    
    Tile.buildSheet = function(scale){ // Static
        if(!scale){scale = globalScale;}
        globalScale = scale;
        var tileSheetBuilder = new createjs.SpriteSheetBuilder();
        tileSheetBuilder.addMovieClip(new lib.giftedclienttiles(),new createjs.Rectangle(-4,-4,72,72),globalScale);
        tileSheetBuilder.build();
        Global.tiles = tileSheetBuilder.spriteSheet;
    };
    
    var p = Tile.prototype = new createjs.Container();
    
    p.tick = function(){
        
    }
    
    Tile.buildSheet();
    
    return Tile;
});
