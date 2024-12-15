// Hazrat Ali
// University Of Scholars
class Hero {
    constructor(name, power){
        this.name = name;
        this.power = power;
    }
    getPower(){
        if(this.power){
            return this.power;
        }
        return 'I have no power';
    }
    goForGrocery(budget){
        if(this.power && budget > 1000){
            console.log(this.getPower())
        }
        return 'Price is too high, i can not buy';
    }
}
// Class method
const catMan = new Hero('catman', 'Deep Khamsi');
console.log(catMan.goForGrocery(100));