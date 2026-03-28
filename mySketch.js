

// JAM GAME
// Zach Schwab
// 3/27/26
// 2026 copyright





let es = [];


function preload() {
	PixelComicSans = loadFont('PixelComicSans-Regular.otf');
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

    		translate(-camX, -camY); // move world relative to camera


			road();

			eSpawn();

			move();
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



function road() {
	fill('yellow');
	
	let spacing = sizez * 0.1;

	let startX = Math.floor(camX / spacing) * spacing - width;   
	let endX   = camX + width * 2;                               

	for (let x = startX; x < endX; x += spacing) {
		rect(x, height / 2, sizez * 0.04, sizez * 0.02);
	}	


	
			
			// for (let x = 0; x < width; x += sizez * 0.06) {
    		// 	rect(x, height / 2, sizez * 0.04, sizez * 0.02);
			// }

			

	// rect(width / 2,height / 2, sizez * 0.04, sizez * 0.02);
}