var t;
var d = 0;

function setup() {
	frameRate(30);
	createCanvas(windowWidth, windowHeight);
	//background(0, 7);
	t = 0;

	
}

function draw() {
	// fade the background by giving it a low opacity
	//background(90, 90, 110, 3);
	//background(250, 5);

	var x = width * noise(t + 3);
	var y = height * noise(t + 7);
	var r = 255 * noise(t + 19);
	var g = 255 * noise(t + 7);
	var b = 255 * noise(t + 15);


	//noStroke();
	strokeWeight(1);

	//fill(r, g, b, 3);
	fill(255, 5);
	
	t = t + 0.0003;
	//aggiungere un if per invertire il flusso
	if (d < 50) {
		t = t + 0.0005;
		d = d + t;
	} else {
		t = t - 0.003;		
		d = d + t;
	}
	if (mouseIsPressed) {
		stroke(r, g, b, 15);
		rectMode(CENTER);
		rect(x, y,  d,  d);
		//background (255);
		
	}
	else {
		stroke(r, g, b, 90);
		rectMode(CENTER);
		ellipse(x, y,  d,  d);
		
	}
	
	// clear the background every 500 frames using mod (%) operator
	 if (frameCount % 900 === 0) {
    	background(255, 7);
    	stroke(255, 0, 0, 15);
  }
}


	
	

