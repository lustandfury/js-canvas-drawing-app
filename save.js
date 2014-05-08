var saveButton = document.getElementById('save');
saveButton.addEventListener('click', saveImage);
function saveImage(){
	var data = canvas.toDataURL();
//stores the canvas data into data var
	window.open(data,'_blank','location=0, menubar=0, status=0, titlebar=0');
// takes in (URL, name, options)
}
// some options 
// toolbar=yes|no|1|0 
// menubar=
// location= //display address field
// www.w3schools.com/jsref/met_win_open.asp for more