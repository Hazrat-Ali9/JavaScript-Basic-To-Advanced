# Hazrat Ali ✈

# Programmer || Software Enginering 🚁


# What is Javascript and how can i learn it ?

 JavaScript is a programming language that's mainly used to make websites interactive and dynamic. It runs in your browser (like Chrome, Firefox, or Safari), and it powers features like sliders, pop-ups, form validation, animations, and even full web apps like Google Docs or Spotify.

# 🚤 1. What is a Function in JavaScript?

A function is a reusable block of code that performs a specific task.
In this case, we want a function that adds two numbers.

    function add(num1, num2){
    const sum = num1 + num2;
    return sum;
}
    
    const result1 = add(12, 13);
    // console.log()
    const result2 = add(35, 7);
    const finalResult = add(result1, result2);


# ⏰ 2. What is Abstraction in JavaScript  
Abstraction in JavaScript is a programming principle that focuses on hiding complex implementation details while exposing only essential features or interfaces to the user. It allows developers to work with high-level concepts without needing to understand internal complexities. JavaScript achieves abstraction.

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
     
# 🦺 3. What is Argument in Javascript 

   An argument in JavaScript is a value that is passed to a function when it is invoked.

    function add(num1, num2) {
     console.log([...arguments]);
      return num1 + num2 + arguments[2];
     }
    const result = add(2, 3, 5, 7);
    console.log(result);





