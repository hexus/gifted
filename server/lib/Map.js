var empty = require('./Helpers').empty;
var db = require('./DB');

var Map = function(name){
	var that = this;
	this.name = name || "Buren";
	
	var worldSize = {width:8,height:4}
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
				tileSize = world.size * 10;
				spawn.x = world.spawnX;
				spawn.y = world.spawnY;
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
	this.validCoords = function(rY,rX,tY,tX){
		return (rX>=0 && rX<worldSize.width &&
				rY>=0 && rY<worldSize.height &&
				tX>=0 && tX<regionSize.width &&
				tY>=0 && tY<regionSize.height);
	}
	this.checkTile = function(rY,rX,tY,tX){ // Creates dimensions if they don't yet exist
		if(this.validCoords(rY,rX,tY,tX)){
			if(!regions[rY]){regions[rY] = [];}
			if(!regions[rY][rX]){regions[rY][rX] = [];}
			if(!regions[rY][rX][tY]){regions[rY][rX][tY] = [];}
			if(!regions[rY][rX][tY][tX]){regions[rY][rX][tY][tX] = 0;}
			return true;
		}
		return false;
	}
	this.getTile = function(rY,rX,tY,tX){
		if(this.checkTile(rY,rX,tY,tX)){
			return regions[rY][rX][tY][tX];
		}
	}
	this.setTile = function(rY,rX,tY,tX,v){
		if(this.checkTile(rY,rX,tY,tX)){
			regions[rY][rX][tY][tX] = v;
		}
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

m.generate = function(){
	console.log('Generating world');
	
	var fullWidth = this.getWorldSize().width * this.getRegionSize().width;
	var fullHeight = this.getWorldSize().height * this.getRegionSize().height;
	var heights = [];
	var smoothWidth = 20;
	var smooth = 3;
	
	console.log("Size: " + fullWidth + ":" + fullHeight);
	
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
	
	this.spawn = {
		x : Math.round(fullWidth*0.5),
		y : heights.length - heights[Math.round(heights.length*0.5)] - 2
	};
	
	for(var y=0;y<fullHeight;y++){
		for(var x=0;x<fullWidth;x++){
			var regX = Math.floor(x / this.getRegionSize().width) % this.getWorldSize().width;
			var regY = Math.floor(y / this.getRegionSize().height) % this.getWorldSize().height;
			var tileX = x % this.getRegionSize().width;
			var tileY = y % this.getRegionSize().height;
			if(y >= fullHeight - heights[x]){
				this.setTile(regY,regX,tileY,tileX,1);
			}
		}
	}
	
	// Done
}

m.print = function(){
	var str = "";
	for(ry=0;ry<this.getWorldSize().height;ry++){
		for(rx=0;rx<this.getWorldSize().width;rx++){
			str += "Region: " + rx + "," + ry + "\n";
			for(y=0;y<this.getRegionSize().height;y++){
				for(x=0;x<this.getRegionSize().width;x++){
					str += this.getTile(ry,rx,y,x);
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
					var val = this.getTile(ry,rx,y,x);
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

