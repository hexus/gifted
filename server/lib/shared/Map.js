(function(){
var node = typeof window === 'undefined';
var deps = [];
var init = function(){

    if(node){
        var db = require('../DB');
    }
    
    var solidarr = [3, 4, 5, 6, 7, 8, 9, 10];
    
    var Map = function(name){
    	var that = this;
    	this.name = name || 'Buren';
    	var worldSize = {width:16,height:4}
    	var regionSize = {width:64,height:64}
    	var tileSize = 40;
    	var spawn = {x:0,y:0}
    	
    	var regions = [];
    	
    	this.load();
    	
    	this.getProperties = function(){
    		return {
    			worldSize:this.getWorldSize(),
    			regionSize:this.getRegionSize(),
    			tileSize:this.getTileSize(),
    			spawn:this.getSpawn()
    		}
    	}
    	this.setProperties = function(obj){
    	    for(i in obj){
    	        switch(i){
    	            case 'worldSize':
    	               worldSize = obj[i]; break;
    	            case 'regionSize':
    	               regionSize = obj[i]; break;
    	            case 'tileSize':
    	               tileSize = obj[i]; break;
    	            case 'spawn':
    	               spawn = obj[i]; break;
    	        }
    	    }
    	}
    	
    	this.getWorldSize = function(){return worldSize;}
    	this.getRegionSize = function(){return regionSize;}
    	this.getTileSize = function(){return tileSize;}
    	this.getSolidArr = function(){return solidarr;}
    	this.getSpawn = function(){return spawn;}
    	this.getRegions = function(){return regions;}
    	this.validCoords = function(rX,rY,tX,tY){
    		return (rX>=0 && rX<worldSize.width &&
    				rY>=0 && rY<worldSize.height &&
    				tX>=0 && tX<regionSize.width &&
    				tY>=0 && tY<regionSize.height);
    	}
    	this.checkTile = function(rX,rY,tX,tY){ // Creates dimensions if they don't yet exist
    		if(this.validCoords(rX,rY,tX,tY)){
    			if(!regions[rX]){regions[rX] = [];}
    			if(!regions[rX][rY]){regions[rX][rY] = [];}
    			if(!regions[rX][rY][tX]){regions[rX][rY][tX] = [];}
    			if(!regions[rX][rY][tX][tY]){
                    regions[rX][rY][tX][tY] = 0;
    			}
    			return true;
    		}
    		return false;
    	}
    	this.getTile = function(rX,rY,tX,tY){
    		if(this.checkTile(rX,rY,tX,tY)){
    			return regions[rX][rY][tX][tY];
    		}
    	}
    	this.setTile = function(rX,rY,tX,tY,v){
    		if(this.checkTile(rX,rY,tX,tY)){
    		    regions[rX][rY][tX][tY] = v;
    		}
    	}
    	this.setWorldSize = function(w,h){
    	    worldSize.width = w;
    	    worldSize.height = h;
    	}
    	this.setRegionSize = function(w,h){
    	    regionSize.width = w;
    	    regionSize.height = h;
    	}
    	this.setTileSize = function(t){
    	    tileSize = t;
    	}
    	this.setSpawn = function(x,y){
    		spawn.x = x;
    		spawn.y = y;
    	}
    	this.reset = function(){
    	    regions = [];
    	}
    	
    };
    
    var m = Map.prototype;
    m.test = function(){
    	return [
    		this.getWorldSize(), this.getRegionSize(), this.getTileSize(), this.getSpawn()
    	]
    }
    
    m.load = function(){
        if(node){
            var that = this;
            db.connection.query("SELECT * FROM worlds WHERE name='"+that.name+"'",function(err,rows){
                if(rows){
                    if(rows.length>0){
                        var world = rows[0];
                        that.setProperties({
                           worldSize:{width:world.width,height:world.height},
                           tileSize:world.size,
                           spawn:{x:world.spawnX,y:world.spawnY} 
                        });
                        that.expand(world.map); // Needs to be LONGTEXT in MySQL
                        console.log('Loaded world \''+that.name+'\'');
                    }else{
                        that.generate();
                        that.save();
                    }
                }else{
                    console.log(err);
                }
            });
        }
    }
    
    m.save = function(){ // swag
    	if(node){
            var values = [this.name, this.getTileSize(), this.getWorldSize().width, this.getWorldSize().height, this.flat(), this.getSpawn().x, this.getSpawn().y];
            var values_sql = "'" + values.join("','") + "'";
        	db.connection.query("REPLACE INTO worlds (name,size,width,height,map,spawnX,spawnY) "+
        						"VALUES ("+values_sql+")");
        }
    }
    
    m.generate = function(){
    	console.log('Generating world \'' + this.name + '\'');
    	
    	var wSize = this.getWorldSize(),
            rSize = this.getRegionSize(),
            fullWidth = wSize.width * rSize.width,
            fullHeight = wSize.height * rSize.height,
            heights = [],
            smoothWidth = 20,
            smooth = 3;
    	
    	//console.log("Size: " + fullWidth + ":" + fullHeight);
    	
    	for(i=0;i<fullWidth;i++){
    		heights[i] = (fullHeight/2 - fullHeight/8) + (Math.random() * (fullHeight/2 + fullHeight/8));
    		//heights[i] = Math.random()
    	}
    	
    	// Smoothing
    	for(i=0;i<smooth;i++){
    		var newHeights = [];
    		for(j=0;j<fullWidth;j++){
    			var sum = 0;
    			for(k=j-smoothWidth/2;k<j+smoothWidth/2;k++){
    				var index = k % fullWidth;
    				if(index < 0){index = fullWidth+index;}
    				sum = sum + heights[index];
    			}
    			newHeights[j] = sum / smoothWidth;
    		}
    		heights = newHeights;
    	}
    	
    	var spawn = {
    		x : Math.round(fullWidth * 0.5),
    		y : Math.round(fullHeight - heights[Math.round(heights.length*0.5)]) - 2
    	};
    	this.setSpawn(spawn.x,spawn.y);
    	
    	for(var y=0;y<fullHeight;y++){
    		for(var x=0;x<fullWidth;x++){
    			var regX = Math.floor(x / rSize.width) % wSize.width;
    			var regY = Math.floor(y / rSize.height) % wSize.height;
    			var tileX = x % rSize.width;
    			var tileY = y % rSize.height;
    			if(y >= fullHeight - heights[x]){
    				this.setTile(regX,regY,tileX,tileY,9);
    			}
    		}
    	}
    	
    	// Done
    }
    
    m.expand = function(str){
    	var mapflat = str.split(','),
    		wSize = this.getWorldSize(),
    		rSize = this.getRegionSize();
    	for(i=0;i<mapflat.length;i++){
    		var rx = Math.floor(i / (rSize.width * rSize.height)) % wSize.width;
    		var ry = Math.floor(i / (rSize.width * rSize.height * wSize.width)) % wSize.height;
    		var x = i % rSize.width;
    		var y = Math.floor(i / rSize.width) % rSize.height;
    		this.setTile(rx,ry,x,y,mapflat[i]);
    	}
    }
    
    m.flat = function(){
    	var str = '';
    	for(ry=0;ry<this.getWorldSize().height;ry++){
    		//out[ry] = [];
    		for(rx=0;rx<this.getWorldSize().width;rx++){
    			//out[ry][rx] = [];
    			for(y=0;y<this.getRegionSize().height;y++){
    				//out[ry][rx][y] = [];
    				for(x=0;x<this.getRegionSize().width;x++){
    					str += this.getTile(rx,ry,x,y)+',';
    				}
    			}
    		}
    	}
    	return str;
    }
    
    m.convertCords = function(xCord,yCord,tiles){
        if(!tiles){tiles=false;}
        var wSize = this.getWorldSize(),
            rSize = this.getRegionSize(),
            tileSize = this.getTileSize();
        var xInd, yInd, rObj = {};
        if(!tiles){
            xInd = Math.floor(xCord/tileSize); // Divide to
            yInd = Math.floor(yCord/tileSize); // region index
        }else{
            xInd = xCord;
            yInd = yCord;
        }
        
        var rx,ry,cx,cy;
        
        // loop x
        if(xInd<0){
            rx = ((Math.floor(xInd/rSize.width) % wSize.width) + wSize.width) % wSize.width;
            cx = ((xInd % rSize.width) + rSize.width) % rSize.width ;
        }else{
            rx = Math.floor(xInd/rSize.width) % wSize.width;
            cx = xInd % rSize.width;
        }   
        
        // cutoff top, loop bottom
        if(yInd<0){
            ry = 0;
            cy = 0;
        }else{
            ry = Math.floor(yInd/rSize.height) % wSize.height;
            cy = yInd % rSize.height;
        }
        
        rObj["rx"] = rx; // Region
        rObj["ry"] = ry;
        rObj["x"] = cx; // Tile
        rObj["y"] = cy;
        return rObj;
    }
    
    m.flatLinear = function(){
        var arr = [];
        
        var wSize = this.getWorldSize(),
            rSize = this.getRegionSize();
        
        var dX1 = 0,
            dY1 = 0,
            dX2 = wSize.width * rSize.width,
            dY2 = wSize.height * rSize.height;
            
        // Loop through view bounds, append tiles
        var rx,ry,cx,cy,cord;
        for(y=dY1;y<dY2;y++){
            for(x=dX1;x<dX2;x++){
                var cord = this.convertCords(x,y,true),
                    rx = cord["rx"],
                    ry = cord["ry"],
                    cx = cord["x"],
                    cy = cord["y"],
                    tileGet = this.getTile(rx,ry,cx,cy);
                arr[x+y*(dX2)] = parseInt(tileGet,10);
            }
        }
        return arr;
    }
    
    m.expandLinear = function(mapflat){
        var wSize = this.getWorldSize(),
            rSize = this.getRegionSize(),
            fullWidth = wSize.width * rSize.width,
            fullHeight = wSize.height * rSize.height;
        if(mapflat.length==fullWidth*fullHeight){
            for(var i=0;i<mapflat.length;i++){
                var rx = Math.floor(i / rSize.width) % wSize.width,
                    ry = Math.floor(i / (fullWidth * rSize.height)) % wSize.height,
                    x = i % rSize.width,
                    y = Math.floor(i / fullWidth) % rSize.height;
                //console.log(rx+' '+ry+' '+x+' '+y);
                this.setTile(rx,ry,x,y,parseInt(mapflat[i]));
            }
        }
    }
    
    m.print = function(){
    	var str = "";
    	for(ry=0;ry<this.getWorldSize().height;ry++){
    		for(rx=0;rx<this.getWorldSize().width;rx++){
    			str += "Region: " + rx + "," + ry + "\n";
    			for(y=0;y<this.getRegionSize().height;y++){
    				for(x=0;x<this.getRegionSize().width;x++){
    					str += this.getTile(rx,ry,x,y);
    				}
    				str += "\n";
    			}
    			str += "\n";
    		}
    	}
    	return worldStr;
    }
    
    m.createCanvasData = function(){
        var flat = this.flatLinear();
        var width = this.getWorldSize().width * this.getRegionSize().width;
        var height = this.getWorldSize().height * this.getRegionSize().height;
        var length = width*height*4;
        
        console.log(flat.length*4,length,width,height);
        data = [];
        for (i = 0; i < length; i+=4) {
            var tile = flat[i/4];
            var colour = {r:0,g:0,b:0,a:255};
            switch(tile){
                case 9:
                    colour.r = colour.g = colour.b = 66;
                    break;
                default:
                    colour.r = colour.g = colour.b = 236;
                    break;
            }
            data[i]     = colour.r;
            data[i+1]   = colour.g;
            data[i+2]   = colour.b;
            data[i+3]   = colour.a;
        }
        
        return {
            width:width,
            height:height,
            data:data
        }
    }
    
    m.createHtml = function(){ // depracated ugly shit
    	var html = '';
    	for(ry=0;ry<this.getWorldSize().height;ry++){ // Region row
    		var chunk = '';
    		chunk += '<div class="row">';
    		for(rx=0;rx<this.getWorldSize().width;rx++){ // Region column
    			//html += "<b>Region: " + rx + "," + ry + "</b><br/>";
    			chunk += '<div class="map">';
    			for(y=0;y<this.getRegionSize().height;y++){ // Tile row
    				chunk += '<div class="tilerow">';
    				for(x=0;x<this.getRegionSize().width;x++){ // Tile
    					var val = this.getTile(rx,ry,x,y);
    					chunk += '<div class="'+((val==1)?'t':'e')+'"></div>';
    				}
    				chunk += '</div>';
    			}
    			chunk += '</div>';
    			
    		}
    		chunk += '</div>';
    		html += chunk;
    	}
    	return html;
    }
    
    return Map;

}


if(node){ // Server side
    module.exports = init();
}else{ // Client side
    define([],init);
}
})();
