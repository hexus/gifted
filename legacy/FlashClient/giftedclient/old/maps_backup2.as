package giftedclient {
	import flash.display.MovieClip;
	import flash.sampler.getSize;
	import flash.filters.*;
	import giftedclient.tile;
	
	public class maps extends MovieClip{
		
		public var solidarr:Array = new Array(3, 4, 5, 6 , 7 , 8, 9, 10);
		
		public var spawnX = 0;
		public var spawnY = 0;
		private var worldMap:Array;
		private var worldName:String;
		private var _outerMargin = 4;
		
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
			if(num>=4 && num<30){ // Limits
				_outerMargin = num;
			}else{ // Default
				_outerMargin = 2;
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
							//trace(k+","+j+","+i+","+h);
							var newTile = new tile();
							newTile.gotoAndStop(0);
							worldMap[k][j][i][h] = newTile;
							//positionTile(j,k,h,i);
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
						var val = Number(gArr[j * regionSize + i]);
						setTile(getX,getY,i,j,val);
						//worldMap[getY][getX][j][i] = ;
					}
				}
			}else{
				trace("Incorrectly sized region array provided");
			}
		}
		
		public function setTile(rx:Number,ry:Number,cx:Number,cy:Number,val:Number,ud:Boolean=false){
			if(ry>=0 && ry<wSize && cy>=0 && cy<rSize){
				if(worldMap[ry][rx][cy][cx]!=null){
					worldMap[ry][rx][cy][cx].gotoAndStop(val);
					if(ud){updateDisplay();}
				}/*else{
					var newTile = new tile();
					newTile.gotoAndStop(val);
					worldMap[ry][rx][cy][cx] = newTile;
				}*/
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
			if(yInd<0){
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
		
		private function positionTile(rx:Number, ry:Number, cx:Number, cy:Number){
			var newTile = worldMap[ry][rx][cy][cx];
			if(newTile!=null){
				newTile.x = ((rx*regionSize) + cx) * _tileW + (_tileW * 0.5);
				newTile.y = ((ry*regionSize) + cy) * _tileH + (_tileH * 0.5);
				//newTile.visible = false;
				//addChild(newTile);
			}
		}
		
		private function addTile(cx:Number,cy:Number){
			var cords:Object = convertCords(cx,cy,true),
				rx:int = cords["rx"],
				ry:int = cords["ry"],
				dx:int = cords["x"],
				dy:int = cords["y"];
			var newtile = worldMap[ry][rx][dy][dx];
			if(!newtile.parent){
				addChild(newtile);
			}
			newtile.x = cx * _tileW + (_tileW * 0.5); // Half add because tiles
			newtile.y = cy * _tileH + (_tileW * 0.5); // are center oriented
			newtile.visible = true;
		}
		
		private function removeTile(tile){
			if(tile){
				//tile.visible = false;
				removeChild(tile);
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
			trace(numChildren + " : " + tilePool.length);
			if(!dx && lastUpdated[0]){dx = lastUpdated[0];}
			if(!dy && lastUpdated[1]){dy = lastUpdated[1];}
			if(scale!=lastScale){clearDisplay();}
			if(t<1){t=1;}
			var mw = regionSize; // Region width in tiles
			var mh = regionSize; // Region height in tiles
			
			// Calculate divisions just once to save CPU
				var dxt = Math.floor(dx / _tileW), dyt = Math.floor(dy / _tileH); // Tile-relative coords (THIS IS WHAT YOU SHOULD BE STORING IN LASTUPDATED)
				var dwt = Math.floor(game.setting.scrW / _tileW), dht = Math.floor(game.setting.scrH / _tileH); // Tile-relative screen dimensions
			var dX1 = Math.floor(dxt - ((dwt*0.5)/scale) - outerMargin); // Display X start
			var dY1 = Math.floor(dyt - ((dht*0.5)/scale) - outerMargin); // Display Y start
			var dX2 = Math.floor(dxt + ((dwt*0.5)/scale) + outerMargin); // Display X End
			var dY2 = Math.floor(dyt + ((dht*0.5)/scale) + outerMargin); // Display Y End
			
			//trace("dY1: " + dY1);
			
			// Constrain what to render
				//if(dX1<0){dX1=0;} if(dX1>fullWidth){dX1=fullWidth;}
				//if(dX2<0){dX2=0;} if(dX2>fullWidth){dX2=fullWidth;}
				if(dY1<0){dY1=0;} if(dY2<0){dY2=0;} // Don't loop display at top of world
				//if(dY1>=fullWidth){dY1=fullWidth;} if(dY2>=fullWidth){dY2=fullWidth;} // Don't loop display at bottom of world
			
			// THE FOLLOWING IS ALL UNNECESSARY
			// LOOP THROUGH TILES THAT HAVE JUST GONE OFF SCREEN
			// REMOVE THEM, ADD THE NEW ONES APPROPRIATELY
			// SHOULD DRAMATICALLY IMPROVE PERFORMANCE BY JUST
			// ITERATING OVER THE TOP ROWS AND COLUMNS THAT CHANGE
			
			
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
						var tileGet = world[ry][rx][cy][cx]; // normal tile
						if(j<=0){tileGet=null;} // empty at above world
						if(j>=wSize*rSize){ // bedrock below world (currently empty, implement plox)
							tileGet = null;
						} 
						if(tileGet){
							addTile(i,j);
						}
					}
				}
				
			// Remove current children outside view bounds (redundant?)
				
				for(var d=0; d<numChildren; d++){
					var tileRem = getChildAt(d);
					var tx = tileRem.x / _tileW; var ty = tileRem.y / _tileH;
					if(tx<dX1 || tx>dX2 || ty<dY1 || ty>dY2){
						//if(tilePool.indexOf(tileRem)<0){ // Don't add the same tile more than once now
							removeTile(tileRem);
						//}
				   	}else{
						var ti = tilePool.indexOf(tileRem); // Tile index (removes tiles in view from pool)
						if(ti>-1){tilePool.splice(ti,1);}
					}
				}
		
			lastUpdated = [dx,dy]; // Remember last updated coords
			lastScale = scale;
				
			// Recurse this procedure for the given number of times (t)
				if(t>1){
					t--; // Decrement recursively
					updateDisplay(dx,dy,scale,t);
				}
		}
		
	}
}