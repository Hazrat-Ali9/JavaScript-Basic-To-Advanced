class PenDrive {
    constructor(capacity, color, price){
        this.capacity = capacity;
        this.color = color;
        this.price = price;
    }
}

const ignite = new PenDrive('36GB', 'white', 1300);
console.log(ignite);
const oakWood = new PenDrive('4GB', 'black');
console.log(oakWood);

function StickyNote(color, price){
    this.color = color;
    this.price = price;
}
const yellow = new StickyNote('yellow', 40);
console.log(yellow);