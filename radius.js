var setRadius = function(newRadius){
	if (newRadius<minRad)
		newRadius=minRad;
	else if (newRadius>maxRad)
		newRadius=maxRad;
	radius = newRadius;
	context.lineWidth = radius*2; //from main.js
	//this selects the elements between 2 tags
	radSpan.innerHTML = radius;
}
//variables
var minRad = 0.5;
var maxRad = 100;
var defaultRad = 20;
var interval = 5;
var radSpan = document.getElementById('radVal');
var decRad = document.getElementById('decRad');
var incRad = document.getElementById('incRad');
//event listeners
incRad.addEventListener('click', function(){
	setRadius(radius+interval);
});
decRad.addEventListener('click', function(){
	setRadius(radius-interval);
});

setRadius(defaultRad);