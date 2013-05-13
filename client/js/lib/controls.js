define(['jquery','lib/global','lib/ui','shared/Enemy/Flybot'],
function($,Global,Ui,Flybot){
    
    var connected = function(){
        return Global.socket ? Global.socket.connected : false;
    }
    
    var Controls = {},
    keysDown={},
    keysLast={},
    controlMap = {
        up : {
            key:87,
            down:function(){
                Global.player.state.moveUp = true;
            },
            up:function(){
                Global.player.state.moveUp = false;
            }
        },
        down : {
            key:83,
            down:function(){
                // Move down
                Global.player.state.moveDown = true;
                // Pick up item
                var side = Global.player.getItem('l') ? 'r' : 'l';
                if(!Global.player.getItem(side)){
                    if(connected()){
                        Global.socket.send('/itemTake ' + side);
                    }else{
                        Global.player.pickUpItem(side);
                    }
                }
            },
            up:function(){
                Global.player.state.moveDown = false;
            }
        },
        left : {
            key:65,
            down:function(){
                Global.player.state.moveLeft = true;
            },
            up:function(){
                Global.player.state.moveLeft = false;
            }
        },
        right : {
            key:68,
            down:function(){
                Global.player.state.moveRight = true;
            },
            up:function(){
                Global.player.state.moveRight = false;
            }
        },
        armLeft : {
            key:-1,//81, // Q 
            down:function(){
                Global.player.state.isAimingLeft = !Global.player.state.isAimingLeft;
            },
            up:function(){
                //Global.player.state.isAimingLeft = false;
            }
        },
        armRight : {
            key:-1,//69, // E
            down:function(){
                Global.player.state.isAimingRight = !Global.player.state.isAimingRight;
            },
            up:function(){
                //Global.player.state.isAimingRight = false;
            }
        },
        pickUpDropLeft : {
            key:-1,//90, // Z
            down:function(){
                if(Global.player.getItem('l')){
                    if(connected()){
                        Global.socket.send('/itemDrop l');
                    }else{
                        Global.player.dropItem('l');
                    }
                }else{
                    if(connected()){
                        Global.socket.send('/itemTake l');
                    }else{
                        Global.player.pickUpItem('l');
                    }
                }
            },
            up:function(){
                
            }
        },
        pickUpDropRight : {
            key:-1,//67, // C
            down:function(){
                if(Global.player.getItem('r')){
                    if(connected()){
                        Global.socket.send('/itemDrop r');
                    }else{
                        Global.player.dropItem('r');
                    }
                }else{
                    if(connected()){
                        Global.socket.send('/itemTake r');
                    }else{
                        Global.player.pickUpItem('r');
                    }
                }
            },
            up:function(){
                
            }
        },
        useLeft : {
            key:'mouse0',
            down:function(){
                Global.player.useItem('l');
                if(connected()){
                    Global.socket.send('/itemUse l 1');
                }
            },
            up:function(){
                Global.player.stopUsingItem('l');
                if(connected()){
                    Global.socket.send('/itemUse l 0');
                }
            }
        },
        useRight : {
            key:'mouse2',
            down:function(){
                Global.player.useItem('r');
                if(connected()){
                    Global.socket.send('/itemUse r 1');
                }
            },
            up:function(){
                Global.player.stopUsingItem('r');
                if(connected()){
                    Global.socket.send('/itemUse r 0');
                }
            }
        },
        showMap : {
            key:77,
            down:function(){
                Global.worldUi.fullmap.visible = true;
                Global.worldUi.minimap.visible = false;
            },
            up:function(){
                Global.worldUi.fullmap.visible = false;
                Global.worldUi.minimap.visible = true;
            }
        },
        dropItems : {
            key:71,
            down:function(){
                var side = Global.player.getItem('r') ? 'r' : 'l';
                if(Global.player.getItem(side)){
                    if(connected()){
                        Global.socket.send('/itemDrop ' + side);
                    }else{
                        Global.player.dropItem(side);
                    }
                }
                /* // Old gun test code
                ps = Global.player.state;
                Global.wtest = Global.world.addEntity(new Weapon({
                    weaponId:'pistol',
                    x:ps.x,
                    y:ps.y,
                    speed:10,
                    angle:ps.aimAngle
                }));
                */
            },
            up:function(){
                
            }
        },
        fly : {
            key:-1,//70, // F
            down:function(){
                Global.player.state.isFlying = !Global.player.state.isFlying;
            },
            up:function(){
                
            }
        },
        toggleDebug : {
            key:186,
            down:function(){
                Global.ui.toggleDebug();
            }
        },
        toggleMenu : {
            key:27,
            down:function(){
                Global.ui.toggleWorldMenu();
            }
        },
        toggleInterpTrace : {
            key:192,
            down:function(){
                Global.debugObj.interpTrace = !Global.debugObj.interpTrace;
            }
        },
        toggleGhosts : {
            key:222,
            down:function(){
                Global.debugObj.showGhosts = !Global.debugObj.showGhosts;
            }
        },
        killAll : {
            key:75,
            down:function(){
                if(connected()){
                    Global.socket.send('/killall');
                }else{
                    var entities = Global.world.entities; 
                    for(var e in entities){
                        if(entities[e] instanceof Flybot){
                            entities[e].state.health = 0;
                        }
                    }
                }
            }
        },
        spawnFlybots : {
            key:76,
            down:function(){
                if(connected()){
                    Global.socket.send('/spawnflybots');
                }else{
                    for(var i=0;i<10;i++){
                        Global.world.addEntity(new Flybot({x:Global.player.x,y:Global.player.y}));
                    }
                }
            }
        },
        telekinesisTest : {
            key:84,
            down:function(){
                Global.debugObj.tk = !Global.debugObj.tk;
            }
        },
        flight : {
            key:70,
            down:function(){
                Global.player.state.isFlying = !Global.player.state.isFlying;
            }
        }
    }
    
    Controls.init = function(){
        
        function debugTrace(){
            //console.log(Global.player.state.isAimingLeft,Global.player.state.isAimingRight);
        }
        
        // Disable context menu on right click
        $('#client').bind('contextmenu',function(){
            if(Ui.selected()==='world'){
                return false;
            }
        });
        
        // Key handlers
        $(window).keydown(function(e){
            var k = e.keyCode || e.which;
            keysLast[k] = keysDown[k];
            keysDown[k] = true;
            //console.log(k);
        });
        
        $(window).keyup(function(e){
            var k = e.keyCode || e.which;
            keysLast[k] = keysDown[k];
            keysDown[k] = false;
        });
        
        // Mouse handlers
        $(window).mousedown(function(e){
            var k = e.button || e.which-1;
            //keysLast['mouse'+k] = keysDown['mouse'+k];
            keysDown['mouse'+k] = true;
            //console.log(k);
        });
        
        $(window).mouseup(function(e){
            var k = e.button || e.which-1;
            //keysLast['mouse'+k] = keysDown['mouse'+k];
            keysDown['mouse'+k] = false;
        });
        
    }
    
    Controls.tick = function(){
        if(Ui.selected()==='world'){
            for(var c in controlMap){
                o = controlMap[c];
                if(keysDown[o.key]){
                    if(typeof o.down === 'function'){
                        if(keysDown[o.key]!=keysLast[o.key] || o.repeat===true){
                            keysLast[o.key] = keysDown[o.key]; 
                            o.down();
                        }
                    }
                }else{
                    if(typeof o.up === 'function'){
                        if(keysDown[o.key]!=keysLast[o.key]){
                            keysLast[o.key] = keysDown[o.key];
                            o.up();
                        }
                    }
                }
            }
        }
    }
    
    return Controls;
});