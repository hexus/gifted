<html>
<head>
    <title>Pixel Manipulation</title>
    <style type="text/css">
    	canvas{padding:4px;display:inline-block;}
    </style>
    <script src="//code.jquery.com/jquery-1.8.2.js"></script>
    <script type="text/javascript">
        var canvas, context, image, data, map;
 
 		function expand(str){
 			return str;
 		}
 
        function init() {
        	maps = <?php echo file_get_contents('http://localhost:8080/map'); ?>;
        	//map = expand(map);
        	for(m in maps){
        		var map = maps[m];
        		$('<canvas>').attr({id:m}).appendTo('body');
	            canvas = $('#'+m)[0];
	            canvas.width = map.width;
	            canvas.height = map.height;
	            context = canvas.getContext("2d");
	            // Get pixel data for entire canvas.
	            image = context.getImageData(0, 0, canvas.width, canvas.height);
	            data = image.data;
	            // Separate out red, green, blue, and alpha values.
	            // Every four values equals 1 pixel.
	            for (i = 0; i < data.length; i+=4) {
	            	var colour = (map.flat[i/4]>0)?66:236;
	                data[i]		= colour;
	                data[i+1]	= colour;
	                data[i+2] 	= colour;
	                data[i+3]	= 255;
	            }
	            
	            context.putImageData(image,0,0);
			}
        }
    </script>
</head>
<body onload="init()">

</body>
</html>