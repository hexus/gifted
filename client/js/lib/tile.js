define(['assets'],function(lib){
    var Tile = function(frame){
        var _frame = 0;
        this.clip = new lib.giftedclienttiles();
        
        this.__defineGetter__('frame',function(){ // Testing getters and setters
            return _frame;
        });
        this.__defineSetter__('frame',function(f){
            _frame = f || 0;
            this.clip.gotoAndStop(_frame);
        });
        
        this.addChild(this.clip);
        this.clip.gotoAndStop(0);
    }
    
    var p = Tile.prototype = new createjs.Container;
    return Tile;
});
