define(['createjs','assets','lib/global'],
function(createjs,lib,Global){
    var worldUi = function(world){
        this.initialize();
        //this.alpha = 0.8;
        
        this.world = world;
        this.mapCanvas = null;
        this.createMapCanvas();
        
        this.fullmap = this.addChild(new createjs.Container());
        this.fullmap.x = this.world.scrW/2;
        this.fullmap.y = this.world.scrH/2;
        this.fullmap.visible = false;
        
        this.minimapSize = 100;
        this.minimapScale = 1/this.world.scale;
        this.minimap = this.addChild(new createjs.Container());
        this.minimap.x = this.world.scrW - this.minimapSize;

        this.minimap.map = this.minimap.addChild(new createjs.Bitmap(this.mapCanvas));
        this.minimap.player = this.minimap.addChild(new createjs.Shape(
            new createjs.Graphics().beginStroke('#000').beginFill('#A29').drawCircle(-1,-1,2)
        ));
        
        this.fullmap.map = this.fullmap.addChild(new createjs.Bitmap(this.mapCanvas));
        this.fullmap.player = this.fullmap.addChild(new createjs.Shape(
            new createjs.Graphics().beginStroke('#000').beginFill('#A29').drawCircle(-1,-1,2)
        ));
    }
    
    var p = worldUi.prototype = new createjs.Container();
    p.constructor = worldUi;
    
    p.tick = function(){
        var tSize = this.world.map.getTileSize();
        var wX = this.world.view.x;
        var wY = this.world.view.y;
        var tX = this.world.scrollTarget.x || wX;
        var tY = this.world.scrollTarget.y || wY;
        var scale = this.minimapScale;
        var dimen = this.minimapSize/scale;
        var x = (wX/tSize) - (dimen/2);
        var y = (wY/tSize) - (dimen/2);
        
        if(x<0){x=0;}
        if(y<0){y=0;}
        if(x+dimen>this.mapCanvas.width){x = this.mapCanvas.width-dimen;}
        if(y+dimen>this.mapCanvas.height){y = this.mapCanvas.height-dimen;}
        
        this.minimap.scaleX = this.minimap.scaleY = scale;
        this.minimap.map.sourceRect = new createjs.Rectangle(x,y,dimen,dimen);
        this.minimap.player.x = (tX/tSize) - x;
        this.minimap.player.y = (tY/tSize) - y;
        
        this.fullmap.scaleX = this.fullmap.scaleY = this.world.scrW/this.mapCanvas.width;
        var fullWidth = this.world.map.getWorldSize().width * this.world.map.getRegionSize().width;
        var fullHeight = this.world.map.getWorldSize().height * this.world.map.getRegionSize().height;
        this.fullmap.map.x = -this.mapCanvas.width/2; // Center
        this.fullmap.map.y = -this.mapCanvas.height/2; // align
        this.fullmap.player.x = (tX/tSize) - (fullWidth/2); // Player
        this.fullmap.player.y = (tY/tSize) - (fullHeight/2); // pos
    }
    
    p.createMapCanvas = function(){
        var map = this.world.map;
        var data = map.createCanvasData();
        canvas = $('<canvas>').attr({id:map.name})[0];
        canvas.width = data.width;
        canvas.height = data.height;
        context = canvas.getContext("2d");
        image = context.getImageData(0, 0, canvas.width, canvas.height);
        for(i=0;i<image.data.length;i++){
            image.data[i] = data.data[i];
        }
        context.putImageData(image,0,0);
        this.mapCanvas = canvas;
    }
    
    p.updateMap = function(){
        this.createMapCanvas();
        this.fullmap.map.image = this.mapCanvas;
        this.minimap.map.image = this.mapCanvas;
    }
    
    return worldUi;
});