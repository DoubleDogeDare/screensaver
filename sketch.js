
let x_position = 0
let x_position2 = 0
let x_position3 = 0
let x_position4 = 0
let x_position5 = 0
let x_position6 = 0
let x_direction = 'right'
let x_direction2 = 'right2'
let x_direction3 = 'right3'
let x_direction4 = 'right4'
let x_direction5 = 'right5'
let x_direction6 = 'right6'
let speed = 2
let diameter = 55
let y_position = 0
let y_position2 = 0
let y_position3 = 0
let y_position4 = 0
let y_position5 = 0
let y_position6 = 0
let y_direction = 'down'
let y_direction2 = 'down2'
let y_direction3 = 'down3'
let y_direction4 = 'down4'
let y_direction5 = 'down5'
let y_direction6 = 'down6'
let angle = 0
let write = 'yes'
let extrude = 'out'
let much = 1
let total = 1
let extrude_number = 70
function setup() {

 textSize(50);
createCanvas(800, 500)
line(0, 0, width, height)
	x_position = random(0, width)
	x_position2 = random(0, width)
	x_position3 = random(0, width)
	x_position4 = random(0, width)
	x_position5 = random(0, width)
	x_position6 = random(0, width)
	angleMode(DEGREES)


  




}



function draw() {

	background(255)



 
	strokeWeight(2)

	//line(x_position, 0, x_position, height)
	push()
	translate(x_position, y_position)
		textSize(20)
		let h = hour()
		let m = minute();
		textAlign(RIGHT)
		text('Time:\n' + h, 5, 50)
		textAlign(LEFT);
		text('\n' + m, 5, 50);
		
		
	pop()

	push()
	translate(x_position2, y_position2)
		strokeWeight(total)
		circle(0, 0, 30, 30)
	pop()

	push()
	translate(x_position3, y_position3)
		strokeWeight(total)
		circle(0, 0, 30, 30)
	pop()

	push()
	translate(x_position4, y_position4)
		strokeWeight(total)
		circle(0, 0, 30, 30)
	pop()

	push()
	translate(x_position5, y_position5)
		strokeWeight(total)
		circle(0, 0, 30, 30)
	pop()

	push()
	translate(x_position6, y_position6)
		strokeWeight(total)
		circle(0, 0, 30, 30)
	pop()

	if (extrude == 'out') {
		total += much
	}

	if (total >= extrude_number) {
		extrude = 'in'
	}

	if (extrude == 'in') {
		total -= much
	}

	if (total <= 0) {
		extrude = 'out'
	}

	if (y_direction == 'down') {
		y_position += speed
	}

	if (y_direction2 == 'down2') {
		y_position2 += speed + 0.2
	}
	
	if (y_direction3 == 'down3') {
		y_position3 += speed + 0.6
	}

	if (y_direction4 == 'down4') {
		y_position4 += speed + 0.5
	}

	if (y_direction5 == 'down5') {
		y_position5 += speed 
	}

	if (y_direction6 == 'down6') {
		y_position5 += speed + 0.3
	}

	if (y_direction == 'up') {
		y_position -= speed
	}

	if (y_direction2 == 'up2') {
		y_position2 -= speed
	}

	if (y_direction3 == 'up3') {
		y_position3 -= speed
	}
	if (y_direction4 == 'up4') {
		y_position4 -= speed
	}

	if (y_direction5 == 'up5') {
		y_position5 -= speed
	}

	if (y_direction6 == 'up6') {
		y_position6 -= speed
	}

	if (x_direction == 'right') {
	x_position = x_position + speed
	}

	if (x_direction2 == 'right2') {
	x_position2 = x_position2 + speed
	}

	if (x_direction3 == 'right3') {
	x_position3 = x_position3 + speed
	}

	if (x_direction4 == 'right4') {
	x_position4 = x_position4 + speed
	}

	if (x_direction5 == 'right5') {
	x_position5 = x_position5 + speed
	}

	if (x_direction6 == 'right6') {
	x_position6 = x_position6 + speed
	}
	
	if (x_direction == 'left') {
		
		x_position = x_position -speed

	}

	if (x_direction2 == 'left2') {
		
		x_position2 = x_position2 -speed
		
	}

	if (x_direction3 == 'left3') {
		
		x_position3 = x_position3 -speed
		
	}

	if (x_direction4 == 'left4') {
		
		x_position4 = x_position4 -speed
		
	}

	if (x_direction5 == 'left5') {
		
		x_position5 = x_position5 -speed
		
	}

	if (x_direction6 == 'left6') {
		
		x_position6 = x_position6 -speed
		
	}
//Right wall
	if (x_position >= width - diameter/2) {
	 x_direction = 'left'
	 stroke(random(0, 255), random(0, 255), random(0,255))
	}

	if (x_position2 >= width - diameter/2) {
	 x_direction2 = 'left2'
	}

	if (x_position3 >= width - diameter/2) {
	 x_direction3 = 'left3'
	 
	}

	if (x_position4 >= width - diameter/2) {
	 x_direction4 = 'left4'
	 
	}

	if (x_position5 >= width - diameter/2) {
	 x_direction5 = 'left5'
	
	}

	if (x_position6 >= width - diameter/2) {
	 x_direction6 = 'left6'
	 
	}

//left wall
	if (x_position <= 0 + diameter/2) {
		x_direction = 'right'
		stroke(random(0, 255), random(0, 255), random(0,255))
	}

	if (x_position2 <= 0 + diameter/2) {
		x_direction2 = 'right2'
		
	}

	if (x_position3 <= 0 + diameter/2) {
		x_direction3 = 'right3'
		
	}

	if (x_position4 <= 0 + diameter/2) {
		x_direction4 = 'right4'
		
	}

	if (x_position5 <= 0 + diameter/2) {
		x_direction5 = 'right5'
		
	}

	if (x_position6 <= 0 + diameter/2) {
		x_direction6 = 'right6'
		
	}
//bottom wall
	if (y_position >= height - diameter*1.5) {
		y_direction = 'up'
		stroke(random(0, 255), random(0, 255), random(0,255))
	}

	if (y_position2 >= height - diameter*1.5) {
		y_direction2 = 'up2'
		
	}
	if (y_position3 >= height - diameter*1.5) {
		y_direction3 = 'up3'
		
	}

	if (y_position4 >= height - diameter*1.5) {
		y_direction4 = 'up4'
		
	}

	if (y_position5 >= height - diameter*1.5) {
		y_direction5 = 'up5'
		
	}

	if (y_position6 >= height - diameter*1.5) {
		y_direction6 = 'up6'
		
	}
//top wall
	if (y_position <= 0 + diameter/1.5) {
		y_direction = 'down'
		stroke(random(0, 255), random(0, 255), random(0,255))
	}

	if (y_position2 <= 0 + diameter/1.5) {
		y_direction2 = 'down2'
		
	}

	if (y_position3 <= 0 + diameter/1.5) {
		y_direction3 = 'down3'
		
	}

	if (y_position4 <= 0 + diameter/1.5) {
		y_direction4 = 'down4'
		
	}

	if (y_position5 <= 0 + diameter/1.5) {
		y_direction5 = 'down5'
		
	}

	if (y_position6 <= 0 + diameter/1.5) {
		y_direction6 = 'down6'
		
	}


		

push()
noFill()
strokeWeight(1)
rect(0, 0, width, height)
pop()

}



