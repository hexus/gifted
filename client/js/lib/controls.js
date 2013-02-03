define(['jquery','lib/global','lib/ui','shared/Weapon','shared/Bullet'],
function($,Global,Ui,Weapon,Bullet){
    
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
            }},
        down : {
            key:83,
            down:function(){
                Global.player.state.moveDown = true;
            },
            up:function(){
                Global.player.state.moveDown = false;
            }},
        left : {
            key:65,
            down:function(){
                Global.player.state.moveLeft = true;
            },
            up:function(){
                Global.player.state.moveLeft = false;
            }},
        right : {
            key:68,
            down:function(){
                Global.player.state.moveRight = true;
            },
            up:function(){
                Global.player.state.moveRight = false;
            }},
        armLeft : {
            key:81,
            down:function(){
                Global.player.state.isAimingLeft = !Global.player.state.isAimingLeft;
            },
            up:function(){
                //Global.player.state.isAimingLeft = false;
            }},
        armRight : {
            key:69,
            down:function(){
                Global.player.state.isAimingRight = !Global.player.state.isAimingRight;
            },
            up:function(){
                //Global.player.state.isAimingRight = false;
            }},
        shoot : {
            key:67,
            repeat:true,
            down:function(){
                //Global.player.useItem('r');
                Global.wtest.use();
            },
            up:function(){
                
            }}
    }
    
    Controls.init = function(){
        
        function debugTrace(){
            //console.log(Global.player.state.isAimingLeft,Global.player.state.isAimingRight);
        }
        
        $(window).keydown(function(e){
            var k = e.keyCode || e.which;
            keysLast[k] = keysDown[k];
            keysDown[k] = true;
        });
        
        $(window).keyup(function(e){
            var k = e.keyCode || e.which;
            keysLast[k] = keysDown[k];
            keysDown[k] = false;
        });
        
    }
    
    Controls.tick = function(){
        if(Ui.selected()==='world'){
            for(c in controlMap){
                o = controlMap[c];
                if(keysDown[o.key]){
                    if(typeof o.down === 'function'){
                        if(o.repeat===true || keysDown[o.key]!=keysLast[o.key]){
                            keysLast[o.key] = keysDown[o.key]; 
                            o.down();
                        }
                    }
                }else{
                    if(typeof o.up === 'function'){
                        if(keysDown[o.key]!=keysLast[o.key]){
                            o.up();
                        }
                    }
                }
            }
        }
    }
    
    return Controls;
});