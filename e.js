


class E {
    constructor(y, speed) {
        this.x = width + camX + 500;
        this.y = y;
        this.speed = speed;

        this.randomE = random([shopVac, standupVac])
    }



    display() {
        fill('red');
        image(this.randomE, this.x, this.y, sizez * 0.05, sizez * 0.05);
    }


    update() { 
        

        this.x -= this.speed;
        
        if (this.x < camX - width / 2 - sizez * 0.02) {
            this.y = random(0, height);           // optional: constrain to road
            this.x = width + camX + 500;
        }
    }





} // end class