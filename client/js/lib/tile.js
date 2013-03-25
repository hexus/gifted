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
            _f = parseInt(f) || 0;
            var getFrame = Global.tiles.getFrame(_f);
            if(getFrame){
                that.image = getFrame.image;
                that.sourceRect = getFrame.rect;
                that.scaleX = that.scaleY = that.scale;
            }
        });
        
        this.get('scale',function(){
            return _scale / globalScale;
        })
        this.set('scale',function(s){
            if(_scale!=s){
                _scale = s;
                that.scaleX = that.scaleY = that.scale;
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
        globalScale = scale; // Increase resolution of tiles
        var tileSheetBuilder = new createjs.SpriteSheetBuilder();
        tileSheetBuilder.addMovieClip(new lib.giftedclienttiles(),new createjs.Rectangle(-4,-4,72,72),globalScale);
        tileSheetBuilder.build();
        Global.tiles = tileSheetBuilder.spriteSheet;
    };
    
    var p = Tile.prototype = new createjs.Bitmap();
    
    p.valueOf = function(){
        return parseInt(this.frame);
    }
    
    p.toString = function(){
        return ""+this.frame;
    }
    
    Tile.buildSheet();
    
    return Tile;
});
