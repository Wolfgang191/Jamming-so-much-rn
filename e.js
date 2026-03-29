


class E {
    constructor(y, speed) {
        this.x = playerX + width * 1.2;
        this.y = y;
        this.speed = speed;

        this.randomE = random([shopVac, standupVac])
    }



    display() {
        fill('red');
        image(this.randomE, this.x, this.y, sizez * 0.08, sizez * 0.08);
    }


    update() { 
        

        this.x -= this.speed;
        
        if (this.x < camX - width / 2 - sizez * 0.02) {
            // this.y = random(0, height);           
            // this.x = width * 2;

            // this.x = playerX + random(width, width * 2); 
            this.x = playerX + width * 1.2
		    this.y = random(height * 0.25, height * 0.75); 
        }
    }


    hitsPlayer() {
        let eSize = sizez * 0.08;

        return (
        this.x < playerX + playerSize / 2 &&
        this.x + eSize > playerX - playerSize / 2 &&
        this.y < playerY + playerSize / 2 &&
        this.y + eSize > playerY - playerSize / 2
    );
    }






} // end class