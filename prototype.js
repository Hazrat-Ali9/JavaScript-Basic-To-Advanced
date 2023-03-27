// Hazrat Ali
// University Of Scholars
function Cat(name){
    this.name = name;
}
Cat.prototype.talk = function(){
    console.log('meow meow');
}
const myCat = new Cat('Tiger');
console.log(myCat);
myCat.talk()