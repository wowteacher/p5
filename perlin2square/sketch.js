var t;
var d = 0;

function setup() {
	frameRate(30);
	createCanvas(windowWidth, windowHeight);
	//background(0, 7);
	t = 0;

	// clear the background every 500 frames using mod (%) operator


}

function draw() {
	// fade the background by giving it a low opacity
	//background(90, 90, 110, 3);
	//background(250, 5);


	var x = width * noise(t);
	var y = height * noise(t + 20);
	var r = 255 * noise(t + 19);
	var g = 255 * noise(t + 7);
	var b = 255 * noise(t + 15);


	//noStroke();
	strokeWeight(1);

	//fill(r, g, b, 3);
	fill(255, 5);
	


	t = t + 0.003;
	//aggiungere un if per invertire il flusso
	if (d < 50) {
		d = d + t;
	} else {
		d = d * -1;
	}
	if (mouseIsPressed) {
			stroke(r, g, b, 15);
		rect(x, y,  d,  d);
		//background (255);
		
	}
	else {
			stroke(r, g, b, 90);
			rectMode(CENTER);
		ellipse(1+x, 1+y,  d,  d);
		
	}
}


	
	

