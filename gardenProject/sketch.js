var fence;

function preload() {
	fence = loadImage("images/fence.svg");
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

	/**  bounding box
    top left corner: 0, 310
    top right corner: 1200, 310
    bottom left corner: 0, 1200
    bottom right corner: 1200, 1200
    */
	/** 
    //listen for a mouse click within a second and output the x and y coordinates of the canvas to the console
	if (mouseIsPressed) {
		console.log(mouseX, mouseY);
	}
    */
}
