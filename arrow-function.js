// Hazrat Ali
// University Of Scholars
class A {
    constructor() {
        this.counter = 0;
    }

    handleClick = () => {
        console.log('inside arrow', this)
        this.counter++;
    };

    handleLongClick() {
        console.log('inside normal', this)
        this.counter++;
    }
}

const a = new A();
console.log(a.counter)
setTimeout(a.handleClick, 0)
setTimeout(a.handleLongClick, 0)
setTimeout(()=> console.log(a.counter), 10)
