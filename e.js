


class E {
    constructor(y, speed) {
        this.x = width;
        this.y = y;
        this.speed = speed;
    }



    display() {
        fill('red');
        rect(this.x, this.y, sizez * 0.02, sizez * 0.02);
    }


    update() { 
        this.x -= this.speed;
        
        if (this.x < -sizez * 0.02) { 
            this.y = random(0, height);
            this.x = width;
        }
    }





} // end class