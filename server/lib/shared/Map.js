(function(){
var node = typeof window === 'undefined';
var deps = [];
var init = function(){
    
    var solidarr = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13]; // we can probably get rid of this soon
    
    var Map = function(name){
    	var that = this;
    	this.name = name || 'Test World';
    	var worldSize = {width:1024,height:256}
    	var tileSize = 32;
    	var spawn = {x:0,y:0};
    	
    	
    	var collisionMap = [];
    	var tileMap = [];
    	
    	this.getProperties = function(){
    		return {
    			worldSize:this.getWorldSize(),
    			tileSize:this.getTileSize(),
    			spawn:this.getSpawn()
    		}
    	}
    	this.setProperties = function(obj){
    	    for(i in obj){
    	        switch(i){
    	            case 'worldSize':
    	               worldSize = obj[i]; break;
    	            case 'tileSize':
    	               tileSize = obj[i]; break;
    	            case 'spawn':
    	               spawn = obj[i]; break;
    	        }
    	    }
    	}
    	
    	this.getWorldSize = function(){return worldSize;}
    	this.getTileSize = function(){return tileSize;}
    	this.getSolidArr = function(){return solidarr;} // deprecate this
    	this.getSpawn = function(){return spawn;}
    	this.validCoords = function(x,y){
    		return (x>=0 && x<worldSize.width && y>=0 && y<worldSize.height);
    	}
    	this.checkCollision = function(x,y){
    	    if(this.validCoords(x,y)){
    	        if(!collisionMap[y]){
    	            collisionMap[y] = [];
    	        }
    	        if(!collisionMap[y][x]){
    	            collisionMap[y][x] = 0;
    	        }
    	        return true;
    	    }
    	    return false;
    	}
    	this.checkTile = function(x,y){ // Creates dimensions if they don't yet exist
    		if(this.validCoords(x,y)){
    			if(!tileMap[y]){tileMap[y] = [];}
    			if(!tileMap[y][x]){tileMap[y][x] = 0;}
    			return true;
    		}
    		return false;
    	}
    	this.getTile = function(x,y){
    		if(this.checkTile(x,y)){
    			return tileMap[y][x];
    		}
    	}
    	this.testCollision = function(x,y){
    	    return this.getCollision(x,y) == 1;
    	}
    	this.getCollision = function(x,y){
    	    if(this.checkCollision(x,y)){
    	        return collisionMap[y][x];
    	    }
    	}
    	this.setTile = function(x,y,v){
    		if(this.checkTile(x,y)){
    		    tileMap[y][x] = v;
    		}
    	}
    	this.setCollision = function(x,y,v){
    	    if(this.checkCollision(x,y)){
        	    v = !v ? 0 : v;
        	    collisionMap[y][x] = v;
    	    }
    	}
    	this.eachTile = function(d,under){ // Arg should have signature d(x,y,v)
    	    if(typeof(d)==='function'){
                for(var y=0;y<worldSize.height;y++){
                    for(var x=0;x<worldSize.width;x++){
                        if(!under || (under && y > (worldSize.height) - this.heights[x])){ // saves time
                            d.call(this,x,y,this.getTile(x,y));
                        }
                    }
                }
            }
    	}
        this.eachTileNbhd = function(d,under){ // Much slower for neighbourhood, arg should have signature d(x,y,v,n)
            if(typeof(d)==='function'){
                var list = [];
                for(var y=0;y<worldSize.height;y++){
                    for(var x=0;x<worldSize.width;x++){
                        if(!under || (under && y > worldSize.height - this.heights[x])){ // saves time
                            var nbhd = this.getTileNbhd(x,y);
                            var n = 0;
                            for(var j in nbhd){
                                if(nbhd[j]>0){n++;}
                            }
                            var tile = {
                                x:x,
                                y:y,
                                v:this.getTile(x,y),
                                nbhd:nbhd,
                                n:n
                            }
                            list.push(tile);
                        }
                    }
                }
                for(var l in list){
                    d.call(this,list[l].x,list[l].y,list[l].v,list[l].n,list[l].nbhd);
                }
                delete(list);
            }
        }
        this.getTileNbhd = function(x,y){
            return [
                this.getTile(x+1,y),
                this.getTile(x+1,y+1),
                this.getTile(x,y+1),
                this.getTile(x-1,y+1),
                this.getTile(x-1,y),
                this.getTile(x-1,y-1),
                this.getTile(x,y-1),
                this.getTile(x+1,y-1)
            ];
        }
    	this.setWorldSize = function(w,h){
    	    worldSize.width = w;
    	    worldSize.height = h;
    	}
    	this.setTileSize = function(t){
    	    tileSize = t;
    	}
    	this.setSpawn = function(x,y){
    		spawn.x = x;
    		spawn.y = y;
    	}
    	this.reset = function(){
    	    collisionMap = [];
    	    tileMap = [];
    	}
    	this.getTileMap = function(){
    	    return tileMap;
    	}
    	this.getCollisionMap = function(){
    	    return collisionMap;
    	}
    	
    	this.stages = [];
    	
    };
    
    var m = Map.prototype;
    m.test = function(){
    	return [
    		this.getWorldSize(), this.getTileSize(), this.getSpawn()
    	]
    }
    
    // Miner class
    var mapMiner = function(args){
        if(!args){args={};}
        var that = this;
        this.x = args.x || 0;
        this.y = args.y || 0;
        this.map = args.map || null;
        this.life = args.life || 10000;
        this.width = args.width || 0;
        this.borderChance = args.borderChance || 0;
        this.borderLeft = args.borderLeft || false;
        this.borderRight = args.borderRight || false;
        this.direction = args.direction || 0;
        this.directionLimit = args.directionLimit || [0,1,2,3]; // >,v,<,^
        this.turnChances = args.turnChances || {x:0.5,y:0.5}; // x/y
        this.afterlife = args.afterlife || 1;
        this.turn = function(force){
            force = !!force;
            var newDir = that.direction;
            if((Math.random()<that.turnChances[newDir%2?'y':'x']) || force){
                if(Math.random()<0.5){
                    newDir++;
                }else{
                    newDir--;
                }
                newDir = ((newDir % 4) + 4) % 4;
            }
            if(that.directionLimit.indexOf(newDir)>-1){
                that.direction = newDir;
            }else{
                that.turn(force);
            }
            if(that.life>0){
                that.life--;
            }
        }
        this.move = function(){
            switch(that.direction){
                case 0: // Right
                   that.x++;
                   break;
                case 1: // Down
                   that.y++;
                   break;
                case 2: // Left
                   that.x--;
                   break;
                case 3: // Up
                   that.y--;
                   break;
            }
            if(that.life>0){
                that.life--;
            }
        }
        this.setTile = function(x,y,v){
        	v = !v ? 0 : v;
            that.map.setTile(x,y,v);
            that.map.setCollision(x,y,!v?0:1);
        }
        this.dig = function(){
            width = that.width;
            that.setTile(that.x,that.y);
            if(width>0){
                for(var w=1;w<width+1;w++){
                    switch(m.direction){
                        case 0: case 2:
                            that.setTile(that.x,that.y-w);
                            that.setTile(that.x,that.y+w);
                            break;
                        case 1: case 3:
                            that.setTile(that.x-w,that.y);
                            that.setTile(that.x+w,that.y);
                            break;
                    }
                }
                // Border
                if(Math.random()<that.borderChance){
	                switch(m.direction){
	                	case 0: 
	                		if(that.borderLeft!==false){
	                			that.setTile(that.x,that.y-width-1,that.borderLeft);
	                		}
	                		if(that.borderRight!==false){
	                			that.setTile(that.x,that.y+width+1,that.borderRight);
	                		}
	                		break;
	                	case 2:
	                		if(that.borderLeft!==false){
	                			that.setTile(that.x,that.y+width+1,that.borderLeft);
	                		}
	                		if(that.borderRight!==false){
	                			that.setTile(that.x,that.y-width-1,that.borderRight);
	                		}
	                		break;
	                	case 3:
	                		if(that.borderLeft!==false){
	                			that.setTile(that.x-width-1,that.y,that.borderLeft);
	                		}
	                		if(that.borderRight!==false){
	                			that.setTile(that.x+width+1,that.y,that.borderRight);
	                		}
	                		break;
	                }
                }
            }
        }
        this.age = function(){
            if(that.life<0 || that.life>that.afterlife){
                that.life = that.afterlife;
            }
        }
    }
    
    m.generate = function(canvasStages){
        if(node){
    	   console.log('Generating world \'' + this.name + '\'');
    	}else{
    	    this.stages = [];
    	}
    	
    	var wSize = this.getWorldSize(),
            fullWidth = wSize.width,
            fullHeight = wSize.height,
            heights = this.heights = [],
            smoothWidth = 20,
            smooth = 3;
    	
    	for(i=0;i<fullWidth;i++){
    		heights[i] = (fullHeight/2 - fullHeight/8) + (Math.random() * (fullHeight/2 + fullHeight/8));
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
    		heights = this.heights = newHeights;
    	}
    	
    	var topSpawn = {
    		x : Math.round(fullWidth * 0.5),
    		y : Math.round(fullHeight - heights[Math.round(fullWidth*0.5)]) - 2
    	};
    	
    	var lowSpawnSize = {width:16,height:4};
        var lowSpawn = {
            x : topSpawn.x-Math.round(lowSpawnSize.width/2),
            y : Math.round(fullHeight/2)+topSpawn.y-Math.round(lowSpawnSize.height/2),
            width: 16,
            height: 4
        }
        
        //this.setSpawn(topSpawn.x,topSpawn.y);
        this.setSpawn(lowSpawn.x,lowSpawn.y);
    	
        this.eachTile(function(x,y){
            this.setCollision(x,y,1);
            this.setTile(x,y,9);
        },true);
        
        if(!node && canvasStages){
            this.stages.push(this.createCanvasData());
            console.log('Map gen stage ' + this.stages.length);
        }
    	
    	// Let's dig!
    	var miners = {};
    	
    	function iterateMiners(){
            for(var miner in miners){
                m = miners[miner];
                if(m){
                    while(m.life!=0){
                        m.turn();
                        m.move();
                        if(m.y>0 && m.y<fullHeight){
                            if((m.x < lowSpawn.x-(lowSpawn.width/2) || m.x > lowSpawn.x+(lowSpawn.width/2)-1) ||
                            (m.y < lowSpawn.y-(lowSpawn.height/2)-1 || m.y > lowSpawn.y+(lowSpawn.height/2)+1)){
                                m.dig();
                            }
                        }else{
                            m.turn(true);
                        }
                        if(m.y < fullHeight - Math.round(heights[((m.x % fullWidth) + fullWidth) % fullWidth])){ // Reached surface
                            m.age();
                        }
                    }
                }
            }
            miners = {};
    	}
    	
    	var caveNum = 26;
    	var caveDist = Math.round(fullWidth/caveNum);
    	// Large random cave(s)
    	for(var i=0;i<caveNum;i++){
            miners['cave'+i] = new mapMiner({
                map:this, x:caveDist*i, y:lowSpawn.y, life:20000,
                direction:3, width:1, turnChances:{x:0.5,y:0.8}
            });
        }
        
        iterateMiners();
        
        if(!node && canvasStages){
            this.stages.push(this.createCanvasData());
            console.log('Map gen stage ' + this.stages.length);
        }
        
        // Fill caves randomly
        this.eachTile(function(x,y,v){
            if(v==0){
                if(Math.random()<0.4){
                    this.setTile(x,y,9);
                    this.setCollision(x,y,1);
                }
            }
        },true);
        
        if(!node && canvasStages){
            this.stages.push(this.createCanvasData());
            console.log('Map gen stage ' + this.stages.length);
        }
        
        // Cellular automataaaaa
        for(var i=0;i<2;i++){
            this.eachTileNbhd(function(x,y,v,n,nbhd){
                if(n>5 || n<1){
                    this.setTile(x,y,9);
                    this.setCollision(x,y,1);
                }else{
                    this.setTile(x,y,0);
                    this.setCollision(x,y,0);
                }
            },true);
        }
        
        if(!node && canvasStages){
            this.stages.push(this.createCanvasData());
            console.log('Map gen stage ' + this.stages.length);
        }
        
        for(var i=0;i<2;i++){
            this.eachTileNbhd(function(x,y,v,n,nbhd){
                if(n<3){
                    this.setTile(x,y,0);
                    this.setCollision(x,y,0);
                }
                if((v==1 && nbhd[2]==0 && nbhd[6]==0) || n<3){
                    this.setTile(x,y,0);
                    this.setCollision(x,y,0);
                }
                if(v==0 && nbhd[2]>0 && nbhd[6]>0){
                    this.setTile(x,y-1,0);
                    this.setCollision(x,y-1,0);
                    this.setTile(x,y+1,0);
                    this.setCollision(x,y+1,0);
                }
                if(v==0 && nbhd[0]>0 && nbhd[4]>0){
                    this.setTile(x-1,y,0);
                    this.setCollision(x-1,y,0);
                    this.setTile(x+1,y,0);
                    this.setCollision(x+1,y,0);
                }
            },true);
        }
        
        if(!node && canvasStages){
            this.stages.push(this.createCanvasData());
            console.log('Map gen stage ' + this.stages.length);
        }
        
        // Carve spawn
        for(var i=lowSpawn.x-Math.round(lowSpawn.width/2);i<lowSpawn.x+Math.round(lowSpawn.width/2);i++){
            for(var j=lowSpawn.y-Math.round(lowSpawn.height/2);j<lowSpawn.y+Math.round(lowSpawn.height/2);j++){
                this.setTile(i,j,0);
                this.setCollision(i,j,0);
            }
        }
        
        // Tunnels from spawn
    	miners['tunnelLeft'] = new mapMiner({
    	    map:this, x:lowSpawn.x + Math.floor(lowSpawn.width/2)-1, y:lowSpawn.y, life:-1,
    	    direction:0, directionLimit:[0,3], width:2, turnChances:{x:0.4,y:0.9},
    	    borderChance:0.8, borderRight:13
    	});
    	miners['tunnelRight'] = new mapMiner({
    	    map:this, x:lowSpawn.x - Math.floor(lowSpawn.width/2), y:lowSpawn.y, life:-1,
    	    direction:2, directionLimit:[2,3], width:2, turnChances:{x:0.4,y:0.9},
    	    borderChance:0.8, borderLeft:13
    	});
    	
    	iterateMiners();
    	
        if(!node && canvasStages){
            this.stages.push(this.createCanvasData());
            console.log('Map gen stage ' + this.stages.length);
        }
    	
    	// Flood fill
    	var q = [[0,0]];
    	while(q.length>0){
    	    var n = q.pop();
    	    if(this.getTile(n[0],n[1])===0){
    	        this.setTile(n[0],n[1],7);
    	        if(n[0]<fullWidth-1){
    	           q.push([n[0]+1,n[1]]);
    	        }
    	        if(n[1]<fullHeight-1){
    	           q.push([n[0],n[1]+1]);
    	        }
    	        if(n[0]>0){
    	           q.push([n[0]-1,n[1]]);
    	        }
    	        if(n[1]>0){
    	           q.push([n[0],n[1]-1]);
    	        }
    	    }
    	}
    	
        if(!node && canvasStages){
            this.stages.push(this.createCanvasData());
            console.log('Map gen stage ' + this.stages.length);
        }
    	
    	// Fill in disconnected caves
    	this.eachTile(function(x,y,v){
    	    if(v==0){
    	        this.setTile(x,y,9);
    	        this.setCollision(x,y,1);
    	    }
    	});
    	
        if(!node && canvasStages){
            this.stages.push(this.createCanvasData());
            console.log('Map gen stage ' + this.stages.length);
        }
    	
    	// Undo flood fill
    	this.eachTile(function(x,y,v){
    	    if(v==7){
    	        this.setTile(x,y);
    	    }
    	});
    	
        if(!node && canvasStages){
            this.stages.push(this.createCanvasData());
            console.log('Map gen stage ' + this.stages.length);
        }
    	
    	// Painting
        this.eachTile(function(x,y,v){
            if(v!=13){
                var heightDif = Math.abs(fullHeight - heights[x] - y);
                var t = 0;
                if(v>0){
                    t = 5;
                    if(heightDif>3){
                        t = 11;
                    }
                    if(heightDif>30){
                        t = Math.random()<(heightDif-30)/10 ? 9 : 11;
                    }
                    if(heightDif>40){
                        t = 9;
                    }
                    //this.setTile(x,y,t);
                    this.setCollision(x,y,1);
                }else{
                    if(heightDif>30){
                        t = 12;
                    }
                }
                if(t){
                    this.setTile(x,y,t);
                }
            }
        },true);

        if(!node && canvasStages){
            this.stages.push(this.createCanvasData());
            console.log('Map gen stage ' + this.stages.length);
        }

    	// Done.
    	
    	console.log(this.getCollisionMap());
    }
    
    m.expand = function(str){
    	var mapflat = str.split(','),
    		wSize = this.getWorldSize();
    	for(i=0;i<mapflat.length;i++){
    		var x = i % wSize.width;
    		var y = Math.floor(i / wSize.width) % wSize.height;
    		this.setTile(x,y,parseInt(mapflat[i]));
    	}
    }
    
    m.flat = function(){
    	var str = '';
    	for(y=0;y<this.getWorldSize().height;y++){
    		for(x=0;x<this.getWorldSize().width;x++){
    			str += this.getTile(x,y)+',';
    		}
    	}
    	return str;
    }
    
    m.convertCords = function(xCord,yCord,tiles){
        if(!tiles){tiles=false;}
        var wSize = this.getWorldSize(),
            tileSize = this.getTileSize();
        var xInd, yInd, rObj = {};
        if(!tiles){
            xInd = Math.floor(xCord/tileSize); // Divide to
            yInd = Math.floor(yCord/tileSize); // map indexes
        }else{
            xInd = xCord;
            yInd = yCord;
        }
        
        var cx,cy;
        
        // loop x with real mod
        if(xInd<0){
            cx = ((xInd % wSize.width) + wSize.width) % wSize.width;
        }else{
            cx = xInd % wSize.width;
        }   
        
        // cutoff top, loop bottom
        if(yInd<0){
            cy = 0;
            // cy = ((yInd % wSize.height) + wSize.height) % wSize.height; // loop top
        }else{
            cy = yInd % wSize.height;
        }
        
        rObj['x'] = cx;
        rObj['y'] = cy;
        return rObj;
    }
    
    m.flatLinear = function(){
        var arr = [];
        
        var wSize = this.getWorldSize();
        
        var dX1 = dY1 = 0,
            dX2 = wSize.width,
            dY2 = wSize.height;
            
        // Loop through view bounds, append tiles
        for(y=dY1;y<dY2;y++){
            for(x=dX1;x<dX2;x++){
                tileGet = this.getTile(x,y);
                arr[x+y*(dX2)] = parseInt(tileGet,10);
            }
        }
        return arr;
    }
    
    m.expandLinear = function(mapflat){
        var wSize = this.getWorldSize();
        if(mapflat.length==wSize.width*wSize.height){
            for(var i=0;i<mapflat.length;i++){
                var x = i % wSize.width,
                    y = Math.floor(i / wSize.width) % wSize.height;
                //console.log(x+' '+y);
                this.setTile(x,y,parseInt(mapflat[i]));
            }
        }
    }
    
    m.expandLinear_tiled = function(mapflat){
        for(var i=0;i<mapflat.length;i++){
            if(mapflat[i]>0){
                mapflat[i]--;
            }
        }
        this.expandLinear(mapflat);
    }
    
    m.print = function(){
    	var str = "";
    	for(y=0;y<this.getWorldSize().height;y++){
    		for(x=0;x<this.getWorldSize().width;x++){
    			str += this.getTile(x,y);
    			str += "\n";
    		}
    	}
    	return worldStr;
    }
    
    m.createCanvasData = function(){
        var flat = this.flatLinear();
        var width = this.getWorldSize().width;
        var height = this.getWorldSize().height;
        var length = width*height*4;
        
        //console.log(flat.length*4,length,width,height);
        data = [];
        for (i = 0; i < length; i+=4) {
            var tile = flat[i/4];
            var colour = {r:0,g:0,b:0,a:255};
            switch(tile){
                case 5:
                    colour.r = 60;
                    colour.g = 130;
                    colour.b = 20;
                    break;
                case 6:
                    colour.r = 220;
                    colour.g = 210;
                    colour.b = 160;
                    break;
            	case 7:
            		colour.r = 160;
            		colour.g = colour.b = 180;
            		break;
                case 8:
                    colour.r = 150;
                    colour.g = 130;
                    colour.b = 50;
                    break;
                case 9: case 13:
                    colour.r = colour.g = colour.b = 66;
                    break;
                case 11:
                    colour.r = 100;
                    colour.g = 60;
                    colour.b = 40;
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
    
    return Map;

}


if(node){ // Server side
    module.exports = init();
}else{ // Client side
    define([],init);
}
})();
