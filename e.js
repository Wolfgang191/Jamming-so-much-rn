


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
        
    if (this.x < camX - width / 2 - sizez * 0.02) {
        this.y = random(0, height);           // optional: constrain to road
        this.x = camX + width + sizez * 0.02;
    }
    }





} // end class