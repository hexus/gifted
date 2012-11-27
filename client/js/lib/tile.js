define(['createjs','assets'],
function(createjs,lib){
    var Tile = function(frame){
    	this.initialize(); 
    	var that = this;
        var _f = 0;
        
    	this.clip = new lib.giftedclienttiles();
		this.addChild(this.clip);
        this.clip.gotoAndStop(0);
        
        this.__defineGetter__('frame',function(){ // Testing getters and setters
            return _f;
        });
        this.__defineSetter__('frame',function(f){
            _f = f || 0;
            that.clip.gotoAndStop(_f);
        });
    }
    
    var p = Tile.prototype = new createjs.Container();
    return Tile;
});
