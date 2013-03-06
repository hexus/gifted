define(['jquery','lib/global','lib/ui','shared/Weapon','shared/Bullet'],
function($,Global,Ui,Weapon,Bullet){
    
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
                if(!Global.player.state.isFlying){ // debug
                    Global.player.hitbox.height = 30;
                }
                Global.player.state.moveDown = true;
            },
            up:function(){
                if(!Global.player.state.isFlying){ // debug
                    Global.player.hitbox.height = 60;
                }
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
            key:81,
            down:function(){
                Global.player.state.isAimingLeft = !Global.player.state.isAimingLeft;
            },
            up:function(){
                //Global.player.state.isAimingLeft = false;
            }
        },
        armRight : {
            key:69,
            down:function(){
                Global.player.state.isAimingRight = !Global.player.state.isAimingRight;
            },
            up:function(){
                //Global.player.state.isAimingRight = false;
            }
        },
        pickUpDropLeft : {
            key:90,
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
            key:67,
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
                Global.world.overlay.fullmap.visible = true;
                Global.world.overlay.minimap.visible = false;
            },
            up:function(){
                Global.world.overlay.fullmap.visible = false;
                Global.world.overlay.minimap.visible = true;
            }
        },
        createGun : {
            key:71,
            down:function(){
                if(connected()){
                    Global.socket.send('/guntest');
                }else{
                    ps = Global.player.state;
                    Global.wtest = Global.world.addProjectile(new Weapon({
                        weaponId:'pistol',
                        x:ps.x,
                        y:ps.y,
                        //speed:10,
                        //angle:ps.aimAngle
                    }));
                }
            },
            up:function(){
                
            }
        },
        fly : {
            key:70,
            down:function(){
                Global.player.state.isFlying = !Global.player.state.isFlying;
            },
            up:function(){
                
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
            for(c in controlMap){
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