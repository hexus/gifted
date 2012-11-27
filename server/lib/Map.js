var empty = require('./Helpers').empty;
var db = require('./DB');

var Map = function(name){
	var that = this;
	this.name = name || 'Buren';
	var worldSize = {width:16,height:4}
	var regionSize = {width:64,height:64}
	var tileSize = 40;
	var spawn = {x:0,y:0}
	
	var regions = [];
	
	db.connection.query("SELECT * FROM worlds WHERE name='"+this.name+"'",function(err,rows){
		if(rows){
			if(rows.length>0){
				var world = rows[0];
				worldSize.width = world.width;
				worldSize.height = world.height;
				tileSize = world.size;
				spawn.x = world.spawnX;
				spawn.y = world.spawnY;
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
	
	this.getProperties = function(){
		return {
			worldSize:this.getWorldSize(),
			regionSize:this.getRegionSize(),
			tileSize:this.getTileSize(),
			spawn:this.getSpawn()
		}
	}
	this.getWorldSize = function(){return worldSize;}
	this.getRegionSize = function(){return regionSize;}
	this.getTileSize = function(){return tileSize;}
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
			if(!regions[rX][rY][tX][tY]){regions[rX][rY][tX][tY] = 0;}
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
	this.setSpawn = function(x,y){
		spawn.x = x;
		spawn.y = y;
	}
	
};

var m = Map.prototype;
m.users = new require('./Users');
m.items = []
m.test = function(){
	return [
		this.getWorldSize(), this.getRegionSize(), this.getTileSize(), this.getSpawn()
	]
}

m.save = function(){ // swag
	var values = [this.name, this.getTileSize(), this.getWorldSize().width, this.getWorldSize().height, this.flat(), this.getSpawn().x, this.getSpawn().y];
	var values_sql = "'" + values.join("','") + "'";
	db.connection.query("REPLACE INTO worlds (name,size,width,height,map,spawnX,spawnY) "+
						"VALUES ("+values_sql+")");
}

m.generate = function(){
	console.log('Generating world \'' + this.name + '\'');
	
	var fullWidth = this.getWorldSize().width * this.getRegionSize().width;
	var fullHeight = this.getWorldSize().height * this.getRegionSize().height;
	var heights = [];
	var smoothWidth = 20;
	var smooth = 3;
	
	//console.log("Size: " + fullWidth + ":" + fullHeight);
	
	for(i=0;i<fullWidth;i++){
		heights[i] = (fullHeight/2 - fullHeight/6) + (Math.random() * (fullHeight/2 + fullHeight/6));
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
		x : Math.round(fullWidth*0.5),
		y : Math.round(heights.length - heights[Math.round(heights.length*0.5)]) - 2
	};
	this.setSpawn(spawn.x,spawn.y);
	
	for(var y=0;y<fullHeight;y++){
		for(var x=0;x<fullWidth;x++){
			var regX = Math.floor(x / this.getRegionSize().width) % this.getWorldSize().width;
			var regY = Math.floor(y / this.getRegionSize().height) % this.getWorldSize().height;
			var tileX = x % this.getRegionSize().width;
			var tileY = y % this.getRegionSize().height;
			if(y >= fullHeight - heights[x]){
				this.setTile(regX,regY,tileX,tileY,1);
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
    var xInd, yInd;
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
        rx = wSize + Math.floor(xInd/rSize.width) % wSize.width;
        cx = rSize.width + xInd % rSize.width;
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
    
    var rObj = {};
    rObj["rx"] = rx; // Region
    rObj["ry"] = ry;
    rObj["x"] = cx; // Tile
    rObj["y"] = cy;
    return rObj;
}

m.flatLinear = function(){
    var byteArr = [];
    
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
            cord = this.convertCords(x,y,true);
            rx = cord["rx"];
            ry = cord["ry"];
            cx = cord["x"];
            cy = cord["y"];
            var tileGet = this.getTile(rx,ry,cx,cy);
            byteArr[x+y*(dX2)] = parseInt(tileGet,10);
        }
    }
    return byteArr;
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

m.createHtml = function(){
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

module.exports = Map;
