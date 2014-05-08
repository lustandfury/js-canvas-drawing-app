var canvas = document.getElementById("canvas");
var context= canvas.getContext('2d');
var radius = "var initialization";
var PI = Math.PI;

var dragging = false;


canvas.width = window.innerWidth;//fullscreen
canvas.height = window.innerHeight;//yeah!

context.lineWidth = radius*2;
var putPoint = function(e){//gets event data 
	if(dragging){
		//var radius = 6*(Math.random(1)+1);//random rad test
		context.lineTo(e.clientX, e.clientY);
		context.stroke();
		context.beginPath();
				
		context.arc(e.clientX, e.clientY, radius, 0, PI * 2 );
		// due to conflits with firefox, use client in this case.
		//context.arc(e.offsetX, e.offsetY, radius, 0, PI * 2 );//drawing a circle...
		//context.arc(x, y, radius, startAngle, endAngle, [antiClockwise])
		//start position x y,radius, radians are the angle that's meassured by drawing a radius distance on the circle
		//in HTML5 the right most is 0 radians
		//2 PIr = circumference(perimeter)=2PI*radius = 360° & PIr=180° & PIr squared = circle area & r2=diameter 
		//[aC]=default = antiClockwise = false 
		context.fill()};
		//adding the path
		context.beginPath();
		context.moveTo(e.clientX, e.clientY);
}

var engage = function(f){
	dragging = true;
	putPoint(f);//so it appears as soon as clicking
}
var disengage = function(){
	dragging = false;	//stops drawing on mouse up
	context.beginPath();//so it cuts the strokes in some clients?
}

//connecting the dots...
//paths , made by subpaths, made by points and lines 
// context.beginPath();         //clears path
// context.moveTo(10,10);       //pointer pos setting
// context.lineTo(160,10);      //rectangle draw
// context.lineTo(160,130);     //rectangle draw
// context.lineTo(10,130);      //rectangle draw
// context.closePath();         //ends subpath
// context.stroke();			//fills the path i think
// context.fill();				//the draw function basically



canvas.addEventListener('mousedown', engage);
canvas.addEventListener('mousemove', putPoint);
canvas.addEventListener('mouseup', disengage);

//saving image to canvas
//canvas.roDataURL() outputs
//data:image/png;base64,iCaosD/8lsdASd+mcE35123ggg==
//encrypted image data with 64 possible bits, a-z,A-Z,0-9,+,/
