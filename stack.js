 // Hazrat Ali
// University Of Scholars
class Stack {
    constructor() {
        this.stack = [];
    }
    add(item) {
        this.stack.push(item);
    }
    remove(){
        if(this.stack.length){
            return this.stack.pop();
        }
    }
}

const guest = new Stack();
guest.add("Rahman")
guest.add("Zaman")
guest.add("Kaman")
guest.add("Kamran")
console.log(guest.stack)
const speaker = guest.remove()
console.log(speaker)
console.log(guest.stack)