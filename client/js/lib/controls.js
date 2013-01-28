define(['jquery','lib/global','lib/ui','lib/bullet'],
function($,Global,Ui,Bullet){
    
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
                        Global.player.state.moveUp = true;
                        if(!upDown){upDown = true;}
                        break;
                    case 65: // A
                        Global.player.state.moveLeft = true;
                        if(!leftDown){leftDown = true;}
                        break;
                    case 83: // S
                        Global.player.state.moveDown = true;
                        if(!downDown){downDown = true;}
                        break;
                    case 68: // D
                        Global.player.state.moveRight = true;
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
                    case 67: // C
                        var ps = Global.player.state;
                        var proj = new Bullet({
                            x:ps.x,
                            y:ps.y,
                            direction:ps.aimDir,
                            angle:ps.aimAngle-90,
                            speed:26}
                        );
                        Global.world.addProjectile(proj);
                        break;
                }
            }
        });
        
        $(window).keyup(function(e){
            var k = e.keyCode || e.which;
            
            if(Ui.selected()=='world'){
                switch(k){
                    case 87: // W
                        Global.player.state.moveUp = false;
                        upDown = false;
                        break;
                    case 65: // A
                        Global.player.state.moveLeft = false;
                        leftDown = false;
                        break;
                    case 83: // S
                        Global.player.state.moveDown = false;
                        downDown = false
                        break;
                    case 68: // D
                        Global.player.state.moveRight = false;
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