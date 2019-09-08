/* 
 * inputs.js 
 */

// costanti per gli input
TOUCH_1 = 1;
MOUSE_LEFT   = 1;
MOUSE_MIDDLE = 2;
MOUSE_RIGHT  = 3;
KEY_LEFT  = 37;
KEY_RIGHT = 39;
KEY_UP    = 38;
KEY_DOWN  = 40;
KEY_ENTER = 13;
KEY_ESC   = 27;
KEY_CTRL  = 17;
KEY_SPACE = 32;

// oggetto che gestisce gli input
Inputs = function() {}

Inputs.mouseX = 0;
Inputs.mouseY = 0;

Inputs.mouseLeft = false;
Inputs.mouseLeftPress = false;
Inputs.mouseLeftRel = false;
Inputs.mouseRight = false;
Inputs.mouseRightPress = false;
Inputs.mouseRightRel = false;

Inputs.key = [];
Inputs.keyPress = [];
Inputs.keyRel= [];


window.addEventListener("keydown", function(e) {
	
	if(!Inputs.key[e.keyCode]) {
	
		Inputs.keyPress[e.keyCode] = true;
		Inputs.key[e.keyCode] = true;
	}

}, false);


window.addEventListener("keyup", function(e) {
	
	Inputs.keyRel[e.keyCode] = true;
	Inputs.key[e.keyCode] = false;

}, false);


window.addEventListener("mousedown", function(e) {
	
	switch (e.which) {
		case 1:
			Inputs.mouseLeft = true;
			Inputs.mouseLeftPress = true;
		break;

		case 2:
			Inputs.mouseMiddle = true;
			Inputs.mouseMiddlePress = true;
		break;
		
		case 3:
			Inputs.mouseRight = true;
			Inputs.mouseRightPress = true;
		break;
	}
}, false);


window.addEventListener("mouseup", function(e) {
	
	switch (e.which) {
		case 1:
			Inputs.mouseLeft = false;
			Inputs.mouseLeftRel = true;
		break;
		
		case 2:
			Inputs.mouseMiddle = false;
			Inputs.mouseMiddleRel = true;
		break;
		
		case 3:
			Inputs.mouseRight = false;
			Inputs.mouseRightRel = true;
		break;
	}
}, false);


window.addEventListener("mousemove", function(e) {
	
	Inputs.mouseX = Math.round(e.pageX - game.canvas.offsetLeft );
	Inputs.mouseY = Math.round(e.pageY - game.canvas.offsetTop );
	Inputs.mouseMoved = true;
	
}, false);


window.addEventListener("touchmove", function(s) {
	
	Inputs.mouseX = Math.round(s.pageX - game.ctx.canvas.offsetLeft );
	Inputs.mouseY = Math.round(s.pageY - game.ctx.canvas.offsetTop );

}, false);

window.addEventListener("touchstart", function(e) {
	
	Inputs.mouseLeft = true;
	Inputs.mouseLeftPress = true;

}, false);

window.addEventListener("touchend", function() {

	Inputs.mouseLeft = false;
	Inputs.mouseLeftRel = true;

}, false);


Inputs.Clear = function() {
	
	Inputs.mouseLeftPress = false;
	Inputs.mouseLeftRel   = false;
	Inputs.mouseMiddlePress = false;
	Inputs.mouseMiddleRel   = false;
	Inputs.mouseRightPress = false;
	Inputs.mouseRightRel   = false;
	Inputs.mouseMoved = false;
	Inputs.keyPress = [];
	Inputs.keyRel   = [];
}


Inputs.GetKeyDown = function(k) {
	
	if(typeof(k) == "string") {
		k = k.charCodeAt(0);
	}
	
	return (Inputs.key[k] == true);
}

Inputs.GetKeyPress = function(k) {
	
	if(typeof(k) == "string") {
		k = k.charCodeAt(0);
	}
	
	return (Inputs.keyPress[k] == true);
}

Inputs.GetKeyRelease = function(k) {
	
	if(typeof(k) == "string") {
		k = k.charCodeAt(0);
	}
	
	return (Inputs.keyRel[k] == true);
}


Inputs.GetMouseDown = function(b) {

	if(b == 1) return Inputs.mouseLeft;
	if(b == 2) return Inputs.mouseMiddle;
	if(b == 3) return Inputs.mouseRight;
}

Inputs.GetMousePress = function(b) {

	if(b == 1) return Inputs.mouseLeftPress;
	if(b == 2) return Inputs.mouseMiddlePress;
	if(b == 3) return Inputs.mouseRightPress;
}

Inputs.GetMouseRelease = function(b) {

	if(b == 1) return Inputs.mouseLeftRel;
	if(b == 2) return Inputs.mouseMiddleRel;
	if(b == 3) return Inputs.mouseRightRel;
}



Inputs.MouseInsideRect = function(x,y,w,h) {
	
	return (Inputs.mouseX >= x && Inputs.mouseY &gt;= y && Inputs.mouseX <= x+w && Inputs.mouseY <= y+h);
}


Inputs.MouseInsideCircle = function(x,y,r) {
	
	var dx = Inputs.mouseX - x;
	var dy = Inputs.mouseY - y;
	return dx*dx+dy*dy <= r*r;
}