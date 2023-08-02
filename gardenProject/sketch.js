/** @format */

let fence;
let cartmanFront;
let cartmanBack;
let cartmanLeft;
let cartmanRight;
let lastDirection = "Right";
let XPos = 600;
let YPos = 600;

function preload() {
	fence = loadImage("images/fence.svg");
	cartmanFront = loadImage("images/cartmanFront.png");
	cartmanBack = loadImage("images/cartmanBack.png");
	cartmanLeft = loadImage("images/cartmanLeft.png");
	cartmanRight = loadImage("images/CartmanRight.png");
}

function setup() {
	createCanvas(1200, 1200);
}

function draw() {
	//Drawring the persistent background
	background("#8dd8f8");
	fill("#057c3f");
	stroke("#000000");
	rect(0, 250, 1200, 950);
	fill("#00704a");
	strokeWeight(1);
	triangle(192, 223, 358, 15, 507, 219);
	triangle(470, 224, 666, 53, 847, 233);
	triangle(10, 250, 200, 10, 400, 250);
	triangle(650, 250, 850, 10, 950, 250);
	triangle(350, 260, 500, 15, 750, 260);
	triangle(1027, 240, 1204, 260, 1166, 46);
	triangle(883, 257, 1000, 50, 1110, 260);
	//snow caps
	fill("#ffffff");
	triangle(194, 2, 125, 102, 273, 95);
	triangle(303, 82, 356, 13, 416, 90);
	triangle(447, 100, 500, 10, 590, 103);
	triangle(610, 100, 670, 50, 727, 110);
	triangle(787, 81, 850, 5, 885, 90);
	triangle(950, 135, 1000, 45, 1040, 125);
	triangle(1110, 125, 1165, 40, 1180, 125);
	//fence
	imageMode(CENTER);
	image(fence, 600, 240);

	//Cartman movement

	if (lastDirection == "Front") {
		image(cartmanFront, XPos, YPos, 100, 100);
	} else if (lastDirection == "Back") {
		image(cartmanBack, XPos, YPos, 100, 100);
	} else if (lastDirection == "Left") {
		image(cartmanLeft, XPos, YPos, 100, 100);
	} else if (lastDirection == "Right") {
		image(cartmanRight, XPos, YPos, 100, 100);
	}

	if (keyIsDown(LEFT_ARROW)) {
		XPos -= 5;
		lastDirection = "Left";
	} else if (keyIsDown(RIGHT_ARROW)) {
		XPos += 5;
		lastDirection = "Right";
	}

	if (keyIsDown(UP_ARROW)) {
		YPos -= 5;
		lastDirection = "Back";
	} else if (keyIsDown(DOWN_ARROW)) {
		YPos += 5;
		lastDirection = "Front";
	}

	// bounding boxes

	if (XPos < 50) {
		XPos = 50;
	} else if (XPos > 1150) {
		XPos = 1150;
	}

	if (YPos < 310) {
		YPos = 310;
	} else if (YPos > 1150) {
		YPos = 1150;
	}

	/** 
	if (mouseIsPressed) {
		console.log(mouseX, mouseY);
	}
	*/
}
