




class Spawn {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.randomSpawn = random([car, car2, hydrant, trashBag, trashBag2, trashCan, trashCan2, trashHeap]);
    }



    display() {
        image(this.randomSpawn, this.x, this.y, sizez * 0.13, sizez * 0.12);
    }


    update() { 
        

    }





} // end class
