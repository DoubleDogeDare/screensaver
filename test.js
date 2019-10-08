


let x_position = -250
// let x_direction = 'right'
// let speed = 1
// let diameter = 45
let y_position = -250
// let y_direction = 'down'
// let angle = 0
// let tngle = 0
// let img;

function setup() {
  createCanvas(600, 500, WEBGL);
  rect(0, 0, width, height)
  strokeWeight(4)
}






function draw() {

	background(255)

	strokeWeight(2)

	//line(x_position, 0, x_position, height)
	push()
	translate(x_position, y_position)

// 	// rotateX(frameCount * 0.02);
//  //  rotateY(frameCount * 0.02);
//  //  torus(40, 15);
// 	pop()

// 		if (y_direction == 'down') {
// 		y_position += speed
// 	}

// 	if (y_direction == 'up') {
// 		y_position -= speed
// 	}

// 	if (x_direction == 'right') {
// 	x_position = x_position + speed
// 	}
	
// 	if (x_direction == 'left') {
		
// 		x_position = x_position -speed
// 	}

push()
noFill()
strokeWeight(1)
rect(0, 0, width, height)
pop()
	
}

