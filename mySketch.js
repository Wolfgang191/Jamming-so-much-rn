

// JAM GAME
// Zach Schwab
// 3/27/26
// 2026 copyright





let es = [];
let spawns = [];


function preload() {
	PixelComicSans = loadFont('PixelComicSans-Regular.otf');
	car = loadImage('assets/car1.png');
	car2 = loadImage('assets/convertible_car.png');
	hydrant = loadImage('assets/hydrant.png');
	trashBag = loadImage('assets/trash_bag.png');
	trashBag2 = loadImage('assets/trash_bag_2.png');
	trashCan = loadImage('assets/trash_can.png');
	trashCan2 = loadImage('assets/trash_can_2.png');
	trashHeap = loadImage('assets/trash_heap.png');
}



function setup() {
	createCanvas(windowWidth, windowHeight);

	rectMode(CENTER);
	imageMode(CENTER);
	textAlign(CENTER);
	textFont(PixelComicSans);

	// customs
	sizez = (width + height); 
	percX = width / 100;
	percY = height / 100;
	perc = 0;

	reset();
} // end setup



function reset() {
	death = false;
	scene = 0;


	playerSpeed = 3;
	playerIdleSpeed = playerSpeed / 2;
	camX = 0; 
	camY = 0; 
	gameStart = false;
	lives = 3;
	playerX = width / 2;
	playerY = height / 2;
	playerSize = sizez * 0.04;
	cam = playerX * 0.8; 
	speedLimit = 1;
	score = 0;
	textTime = 0;
	playerScore = 0;

	zoom = 0.7; // smaller = more zoomed OUT
} // reset




function draw() {
	switch(scene) {
		case 0:
			StartScene();
			break;
		case 1:
			background(88);

			

			camX = playerX - width / 2;
    		camY = playerY - height / 2;

    		push();
			translate(width / 2, height / 2); // center screen
			scale(zoom);
			translate(-playerX, -playerY); // follow player


			road();

			// if (frameCount % 60 === 0) { 
				itemSpawn();
			// }
			image(trashHeap, width / 2, height / 2);

			eSpawn();

			move();

			// for (let spawn of spawns) {
			// 	spawn.display();
			// 	spawn.update();
			// }

			print(spawns.length);

			for (let i = spawns.length - 1; i >= 0; i--) {
				spawns[i].update();
				spawns[i].display();

			// delete when off left side
				if (spawns[i].x < camX - 500) {
					spawns.splice(i, 1);
				}
			}

	
			fill('white');
			rect(playerX, playerY, playerSize, playerSize); // player

			pop();

			drawOverlay();

			break;
	} // end switch scene
} // end draw




function move() {
	if (gameStart == true) {
		// up
		if ((keyIsDown(87) || keyIsDown(38)) && playerY > 0)	{
			playerY -= playerSpeed;
		}  
		// down
		if ((keyIsDown(83) || keyIsDown(40)) && playerY < height)	{
			playerY += playerSpeed
		}		
		// left
		if ((keyIsDown(65) || keyIsDown(37)) && playerX > 0)	{
			playerX -= playerSpeed
		}
		// right
		if (keyIsDown(68) || keyIsDown(39))	{ //  && playerX < width
			playerX += playerSpeed
		}
	} // end if
} // end move




function drawUI() {
	textSize(percX * 5);
} // end drawUI



function drawOverlay() {
	fill('green');
	rect(width * 0.2, height * 0.85, sizez * 0.075, sizez * 0.02);
} // end drawOverlay



function StartScene() {
	background(88);
	textSize(percX * 2.75);
	text("Some Random Game I Suppose?", width / 2, height / 2);

	textSize(percX * 2.25);
	text("PRESS START", width / 2, height * 0.75);
}



function keyPressed() {
	if (key === 'f') {
		let fs = fullscreen();
		fullscreen(!fs);
	}
	if (scene == 0) {
		scene = 1;
		gameStart = true;
	}
} // end keyPressed



function eSpawn() {
	for (let i = 0; i < 5; i++) {
		es.push(new E(random(0, height), random(2, 5)));
		es[i].display();
  		es[i].update();	
	} 	// end of for loop
}




function itemSpawn() {
	if (spawns.length === 0) {
		spawns.push(new Spawn(camX + width + 500, height * 0.85));
	}
}



function road() {
	fill('yellow');
	
	let spacing = sizez * 0.1;

	let startX = Math.floor(camX / spacing) * spacing - width;   
	let endX   = camX + width * 2;                               

	for (let x = startX; x < endX; x += spacing) {
		rect(x, height / 2, sizez * 0.04, sizez * 0.02);
	}	

	let roadY = height / 2;
	let roadHeight = sizez * 0.2;

	fill(50, 150, 50);

	// top
	rect(width / 2, roadY - roadHeight - height / 2, width * 3, height);
	// bottem
	rect(width / 2, roadY + roadHeight + height / 2, width * 3, height);
	
			
			// for (let x = 0; x < width; x += sizez * 0.06) {
    		// 	rect(x, height / 2, sizez * 0.04, sizez * 0.02);
			// }

			

	// rect(width / 2,height / 2, sizez * 0.04, sizez * 0.02);

	image(car, width * -0.1, height / 2, sizez * 0.135, sizez * 0.135);
	image(trashCan2, width * -0.1, height * 0.25, sizez * 0.135, sizez * 0.135);
	image(car2, width * -0.125, height * 0.05, sizez * 0.135, sizez * 0.135);
	image(trashHeap, width * -0.115, height * 0.73, sizez * 0.2, sizez * 0.2);
	image(trashCan, width * -0.1, height * 0.85, sizez * 0.135, sizez * 0.135);
	image(trashCan, width * -0.09, height * 0.925, sizez * 0.135, sizez * 0.135);
	image(trashBag, width * -0.15, height * 0.9, sizez * 0.18, sizez * 0.18);
	image(trashCan2, width * -0.115, height * 1, sizez * 0.135, sizez * 0.135);
	image(trashBag2, width * -0.15, height * 0.215, sizez * 0.18, sizez * 0.18);





}