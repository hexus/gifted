<html>
<head>
    <title>Pixel Manipulation</title>
    <script type="text/javascript">
        var canvas, context, image, data, map;
 
 		function expand(str){
 			return str;
 		}
 
        function init() {
        	map = <?php echo file_get_contents('http://localhost:8080/map'); ?>;
        	//map = expand(map);
            canvas = document.getElementById("canvas");
            context = canvas.getContext("2d");
            // Get pixel data for entire canvas.
            image = context.getImageData(0, 0, canvas.width, canvas.height);
            data = image.data;
            // Separate out red, green, blue, and alpha values.
            // Every four values equals 1 pixel.
            for (i = 0; i < data.length; i+=4) {
            	var colour = (map[i/4]>0)?66:236;
                data[i]		= colour;
                data[i+1]	= colour;
                data[i+2] 	= colour;
                data[i+3]	= 255;
            }
            context.putImageData(image,0,0);
        }
    </script>
</head>
<body onload="init()">
    <canvas id="canvas" width="512" height="256" >
    </canvas>
    <br />
    <input type="button" value="Refresh" onClick="" />
</body>
</html>