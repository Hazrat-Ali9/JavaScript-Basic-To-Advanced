// Hazrat Ali
// University Of Scholars
class Animal {
  constructor() {}
  talk() {
    throw new Error("You must implement talk method");
  }
}

class Cat extends Animal {
  talk() {
    console.log("meow meow");
  }
}
class Dog extends Animal {
  talks() {
    console.log("bark bark");
  }
  talk() {
    this.talks();
  }
}
const myCat = new Cat();
myCat.talk();
const myDog = new Dog();
myDog.talk();
