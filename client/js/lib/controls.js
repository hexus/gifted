define(['jquery','lib/global','lib/ui'],
function($,Global,Ui){
    
    var Controls = {},upDown,leftDown,downDown,rightDown;
    
    Controls.init = function(){
        
        function debugTrace(){
            //console.log(Global.player.state.isAimingLeft,Global.player.state.isAimingRight);
        }
        
        $(window).keydown(function(e){
            var k = e.keyCode || e.which;
            //console.log(k); // Trace keycode
            if(Ui.selected()=='world'){
                switch(k){
                    case 87: // W
                        Global.player.moveUp = true;
                        if(!upDown){upDown = true;}
                        break;
                    case 65: // A
                        Global.player.moveLeft = true;
                        if(!leftDown){leftDown = true;}
                        break;
                    case 83: // S
                        Global.player.moveDown = true;
                        if(!downDown){downDown = true;}
                        break;
                    case 68: // D
                        Global.player.moveRight = true;
                        if(!rightDown){rightDown = true;}
                        break;
                    case 81: // Q
                        //Global.player.state.isAimingLeft = true;
                        Global.player.state.isAimingLeft = !Global.player.state.isAimingLeft;
                        break;
                    case 69: // E
                        //Global.player.state.isAimingRight = true;
                        Global.player.state.isAimingRight = !Global.player.state.isAimingRight;
                        break;
                }
            }
        });
        
        $(window).keyup(function(e){
            var k = e.keyCode || e.which;
            
            if(Ui.selected()=='world'){
                switch(k){
                    case 87: // W
                        Global.player.moveUp = false;
                        upDown = false;
                        break;
                    case 65: // A
                        Global.player.moveLeft = false;
                        leftDown = false;
                        break;
                    case 83: // S
                        Global.player.moveDown = false;
                        downDown = false
                        break;
                    case 68: // D
                        Global.player.moveRight = false;
                        rightDown = false;
                        break;
                    case 81: // Q
                        //Global.player.state.isAimingLeft = false;
                        break;
                    case 69: // E
                        //Global.player.state.isAimingRight = false;
                        break;
                }
            }
        });
        
    }
    
    return Controls;
});