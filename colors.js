//array with colors, to create the css html
var colors = ['black','grey','white','pink','red','orange','brown','yellow','green','teal','turquoise','blue','indigo','purple','violet'];

//get array and iterate array...
// var swatches = document.getElementsByClassName('swatch');
// for (var i=0, n=swatches.length;i<n;i++) {
// 	swatches[i].addEventListener('click', setSwatch);
// }

for (var i=0, n=colors.length;i<n;i++){
	var swatch = document.createElement('div');
	swatch.className = 'swatch';
	swatch.style.backgroundColor = colors[i];
	swatch.addEventListener('click', setSwatch);
	document.getElementById('colors').appendChild(swatch);
}

function setColor(color){
	context.fillStyle = color;
	context.strokeStyle=color;
	var active = document.getElementsByClassName('active')[0];
	// the class as array will have just 1 element,'active'
	if(active){
		active.className = 'swatch';
	}
}

function setSwatch(e){
	//identify swatch
	//e.target the object on which the event was fired
	var swatch = e.target;
	//set color
	//function above +
	setColor(swatch.style.backgroundColor);
	//give active class
	swatch.className += ' active';
	//the space to separate the classes
}

setSwatch({target: document.getElementsByClassName('swatch')[0]});
//{target} is an annonymous object, selects first as default