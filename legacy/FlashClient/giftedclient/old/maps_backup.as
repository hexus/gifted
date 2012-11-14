package giftedclient {
	import flash.display.MovieClip;
	import flash.sampler.getSize;
	import flash.filters.*;
	import giftedclient.tile;
	
	public class maps extends MovieClip{
		
		public var solidarr:Array = new Array(2, 3, 4, 5 ,6 ,7 ,8 ,9);
		
		public var spawnX = 0;
		public var spawnY = 0;
		private var worldMap:Array;
		private var worldName:String;
		private var _outerMargin = 4;
		private const shift = 7;
		
    	private const wDefaultSize = 32;
    	private const wMaxSize = 64;
		private const rDefaultSize = 64;
		private const rMaxSize = 128;
		
		private var worldSize = wDefaultSize;
		private var regionSize = rDefaultSize;
		
		private var cellMap = [
				[6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
				[6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 6, 0, 0, 0, 0, 0, 0, 0, 6],
				[6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 6, 0, 0, 0, 0, 0, 0, 0, 6],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 6, 0, 0, 0, 6, 6, 6, 6, 6],
				[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 6, 0, 6, 6, 0, 0, 0, 0, 0, 0, 0],
				[6, 0, 0, 6, 6, 0, 0, 6, 6, 6, 6, 6, 0, 0, 6, 0, 0, 0, 0, 0, 6, 6],
				[6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 0, 0, 6],
				[6, 6, 6, 6, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 6, 0, 0, 0, 6, 6, 6, 6],
				[6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 6, 6, 6, 6, 6, 6],
				[6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
				];
		
		public var _tileW:Number;
		public var _tileH:Number;
		private var _fullWidth:Number; // Full width of map in units
		private var tilePool:Vector.<tile> = new Vector.<tile>(); // Resource pool for tile objects
		private var tilePoolSizeLimit = 50; // If it gets huge the engine gets hella slow
		private var lastUpdated:Array = new Array(); // Last coords called to updateDisplay()
		private var lastScale = 1; // Last scale value called to updateDisplay()
		
		public function maps(tSize:Number,wName:String,wSize:Number=wDefaultSize,rSize:Number=rDefaultSize) {
			_tileH = tSize;
			_tileW = tSize;
			worldName = wName;
			if(game.setting.online){
				setSizes(wSize,rSize);
			}else{
				spRegion();
			}
			_fullWidth = wSize*rSize*_tileW;
			//spawnX = (fullWidth * 0.5 / _tileW) - 10; //temp
			//spawnY = 0;
		}
		
		// Getters
		public function get world(){return worldMap;}
		public function get wSize(){return worldSize;}
		public function get rSize(){return regionSize;}
		public function get fullWidth(){return _fullWidth;}
		public function getWorldSize():Number{return worldSize;}
		public function getRegionSize():Number{return regionSize;}		
		
		public function get outerMargin(){return _outerMargin;}
		public function set outerMargin(num:Number){
			if(num>=5 && num<30){ // Limits
				_outerMargin = num;
			}else{ // Default
				_outerMargin = 5;
			}
			if(_outerMargin % 2 == 1){ // Force it to be even
				_outerMargin++;
			}
		}
		
		public function setSpawn(xCord:Number, yCord:Number){
			spawnX = xCord % fullWidth;
			spawnY = yCord % fullWidth;
		}
		
		// Initialise the map with particular world/region sizes
		public function setSizes(wSize:Number, rSize:Number){ // World and region sizes
			if(wSize < 0 || wSize > wMaxSize){wSize = wDefaultSize;} worldSize = wSize;
			if(rSize < 0 || rSize > rMaxSize){rSize = rDefaultSize;} regionSize = rSize;
			// Initialise 2D Vector (world) 
			worldMap = [];
			for(var k=0;k<wSize;k++){
				worldMap[k] = [];
				for(var j=0;j<wSize;j++){
					worldMap[k][j] = [];
					for(var i=0;i<rSize;i++){
						worldMap[k][j][i] = [];
						for(var h=0;h<rSize;h++){
							trace(k+","+j+","+i+","+h);
							worldMap[k][j][i][h] = 0;
						}
					}
				}
			}
			trace("Size of world array: "  + getSize(worldMap) + " bytes");
		}
		
		public function setRegion(getX:Number,getY:Number,gArr:Array){
			if(gArr.length==regionSize*regionSize){
				// Create and size temp region array
				for(var j=0;j<regionSize;j++){
					for(var i=0;i<regionSize;i++){
						worldMap[getY][getX][j][i] = Number(gArr[j * regionSize + i]);
					}
				}
			}else{
				trace("Incorrectly sized region array provided");
			}
		}
		
		public function setTile(rx:Number,ry:Number,cx:Number,cy:Number,val:Number){
			if(ry>=0 && ry<wSize && cy>=0 && cy<rSize){
				worldMap[ry][rx][cy][cx] = val;
				var tile = getChildByName("r-"+rx+"-"+ry+"_"+"t-"+cx+"-"+cy);
				if(val==0){
					if(tile){removeTile(tile);}
				}else{
					addTile(cx,cy,val);
				}
				updateDisplay();
			}
		}
		
		public function spRegion(){
			setSizes(1,cellMap[0].length);
			worldMap[0][0] = cellMap;
			setSpawn(12,2);
		}
		
		public function convertCords(xCord:Number,yCord:Number,tiles:Boolean=false):Object{
			var xInd:Number, yInd:Number;
			if(!tiles){
				xInd = Math.floor(xCord/_tileW); // Divide to
				yInd = Math.floor(yCord/_tileH); // region index
			}else{
				xInd = xCord;
				yInd = yCord;
			}
			
			var rx:int,ry:int,cx:int,cy:int;
			
			// loop x
			if(xInd<0){
				rx = wSize + Math.floor(xInd/rSize) % wSize;
				cx = rSize + xInd % rSize;
			}else{
				rx = Math.floor(xInd/rSize) % wSize;
				cx = xInd % rSize;
			}	
			
			// cutoff top, loop bottom
			if(yInd<=0){
				ry = 0;
				cy = 0;
			}else{
				ry = Math.floor(yInd/rSize) % wSize;
				cy = yInd % rSize;
			}
			
			var rObj = new Object();
			rObj["rx"] = rx; // Region
			rObj["ry"] = ry;
			rObj["x"] = cx; // Tile
			rObj["y"] = cy;
			return rObj;
		}		
		
		private function addTile(cx:Number,cy:Number,val:Number):tile{
			var cords:Object = convertCords(cx,cy,true),
				rx:int = cords["rx"],
				ry:int = cords["ry"],
				dx:int = cords["x"],
				dy:int = cords["y"];
			var tilename = rx + "-" + ry + "-" + dx + "-" + dy;
			var newtile:tile;
			if(tilePool.length>0){
				newtile = tilePool.shift();
			}else{
				newtile = new tile();
				addChild(newtile);
			}
			newtile.x = cx * _tileW + (_tileW * 0.5); // Half add is weird but
			newtile.y = cy * _tileH + (_tileW * 0.5); // kinda works so leave it
			newtile.name = tilename;
			newtile.gotoAndStop(val);
			return newtile;
		}
		
		private function removeTile(tile){
			if(tile){
				tile.name = "";
				tile.visible = false;
				if(tilePool.length < tilePoolSizeLimit){
					tilePool.push(tile);
				}else{
					tile = null;
				}
			}
		}
		
		public function get poolSize():int{
			return tilePool.length;
		}
		
		public function clearDisplay(){
			// Remove all children
				while(numChildren>0){
					removeChild(getChildAt(0));
				}
		}
		
		public function updateDisplay(dx=null,dy=null,scale=1,t=1):void{
			if(!dx && lastUpdated[0]){dx = lastUpdated[0];}
			if(!dy && lastUpdated[1]){dy = lastUpdated[1];}
			if(scale!=lastScale){clearDisplay();}
			if(t<1){t=1;}
			var mw = regionSize; // Region width in tiles
			var mh = regionSize; // Region height in tiles
			
			// Calculate divisions just once to save CPU
				var dxt = Math.floor(dx / _tileW), dyt = Math.floor(dy / _tileH); // Tile-relative coords
				var dwt = Math.floor(game.setting.scrW / _tileW), dht = Math.floor(game.setting.scrH / _tileH); // Tile-relative screen dimensions
			var dX1 = Math.floor(dxt - ((dwt*0.5)/scale) - outerMargin); // Display X start
			var dY1 = Math.floor(dyt - ((dht*0.5)/scale) - outerMargin); // Display Y start
			var dX2 = Math.floor(dxt + ((dwt*0.5)/scale) + outerMargin); // Display X End
			var dY2 = Math.floor(dyt + ((dht*0.5)/scale) + outerMargin); // Display Y End
			
			//trace("dY1: " + dY1);
			
			// Constrain what to render
				//if(dX1<0){dX1=0;} if(dX1>fullWidth){dX1=fullWidth;}
				//if(dX2<0){dX2=0;} if(dX2>fullWidth){dX2=fullWidth;}
				if(dY1<0){dY1=0;} //if(dY1>=fullWidth){dY1=fullWidth;} // Don't loop display at top of world
				if(dY2<0){dY2=0;} //if(dY2>=fullWidth){dY2=fullWidth;} // Don't loop display at bottom of world
			
			// Loop through view bounds, append tiles
				var rx:int,ry:int,cx:int,cy:int,cord:Object;
				for(var i=dX1;i<dX2;i++){
					for(var j=dY1;j<dY2;j++){
						
						cord = convertCords(i,j,true);
						rx = cord["rx"];
						ry = cord["ry"];
						cx = cord["x"];
						cy = cord["y"];
						
						//trace("r-" + rx + "-" + ry + "_" + "t-" + cx + "-" + cy);
						var val = world[ry][rx][cy][cx]; // normal tile
						if(j<=0){val=0;} // empty at above world
						if(j>=wSize*rSize-1){val=10;} // bedrock below world
						if(val){
							var tileAdd = getChildByName(rx + "-" + ry + "-" + cx + "-" + cy);
							if(val>0){
								if(tileAdd == null){
									tileAdd = addTile(i,j,val);
									tileAdd.visible = true;
								}
							}
						}
					}
				}
				
			// Remove current children outside view bounds
				for(var d=0; d<numChildren; d++){
					var tile = getChildAt(d);
					var tx = tile.x / _tileW; var ty = tile.y / _tileH;
					if(tx<dX1 || tx>dX2 || ty<dY1 || ty>dY2){
						if(tilePool.indexOf(tile)<0){ // Don't add the same tile more than once now
							removeTile(tile);
						}
				   	}else{
						var ti = tilePool.indexOf(tile); // Tile index (removes tiles in view from pool)
						if(ti>-1){tilePool.splice(ti,1);}
					}
				}
				
			lastUpdated = [dx,dy]; // Remember last updated coords
			lastScale = scale;
				
			// Iterate this entire process for the given number of times
				if(t>1){
					t--; // Decrement recursively
					updateDisplay(dx,dy,t);
				}
		}
		
	}
}