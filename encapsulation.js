// Hazrat Ali
// University Of Scholars
class Tiger{
    #speed = 100;
    location = 'Sundarban';
    constructor(name){
        this.name = name;
        this.#speed = 125;
    }
    run(){
        console.log(`I am ${this.name}. I am running at ${this.#speed}mph. I live in ${this.location}`)
    }
}
const royal = new Tiger('Royal Bengal');
royal.name = 'Pormanobic Bengal';
royal.location = 'Borishal';

royal.run();