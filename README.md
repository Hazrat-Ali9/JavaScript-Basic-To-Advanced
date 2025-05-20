# Hazrat Ali ✈

# Programmer || Software Enginering 🚁


# 🎒 What is Javascript and how can I learn it ?

  🖨 JavaScript is a programming language that's mainly used to make websites interactive and dynamic. It runs in your browser (like Chrome, Firefox, or Safari), and it powers features like sliders, pop-ups, form validation, animations, and even full web apps like Google Docs or Spotify.

# 🚤 1. What is a Function in JavaScript?

A function is a reusable block of code that performs a specific task.In this case, we want a function that adds two numbers.

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

# 📘 4. Definition of Array in JavaScript:
  An array in JavaScript is a special variable that can hold multiple values at once, stored in an ordered list and accessible by index.

    var friendsAge = [11, 13, 17];

    var muriChanacurFee = [34, 55, 221, 3];

    var nayikas = ['Hazrat', "Mitu", "Rahim", "Khadiza"];

    var oddNumbers = [1, 3, 5, 7, 9];

    var vowels = ['a', 'e', 'i', 'o', 'u'];

    // console.log(nayikas.length);
    var vowelsCount = vowels.length;
    console.log(vowelsCount)

# 🦧 5. Binary Search in JavaScript 
The binarySearch function is used to find the index of the target value in the array. If the target value is found, the function returns the index; otherwise, it returns -1.

    let numbers = [1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59];

    function binarySearch(numbers, target) {
    let start = 0;
    let end = numbers.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (numbers[mid] === target) {
            console.log('item found in position', mid);
            return mid;
        }
        if (numbers[mid] < target) {
            start = mid + 1;
        }
        if (numbers[mid] > target) {
            end = mid - 1;
        }
    }
    return -1;
}

// const target = 43;
// const index = binarySearch(numbers, target)
// console.log(index)

# 🤡 6. Bind method in Javascript
The bind() method in JavaScript is used to create a new function that, when called, has its this keyword set to a specific value.

    const kibria = {
    id: 101,
    money: 5000,
    name: 'RJ Kibria',
    treatDey: function (expense) {
        this.money = this.money - expense;
        console.log('here5555', this);
        return this.money;
    }
    }

    const heroBalam = {
    id: 102,
    money: 6000,
    name: 'Hero Balam'
    }
    const normalGolam = {
    id: 102,
    money: 8000,
    name: 'Normal Golam'
    }

     kibria.treatDey(100);
     const heroTreatDey = kibria.treatDey.bind(heroBalam);
     heroTreatDey(500);
     heroTreatDey(300);
     heroTreatDey(500);
     kibria.treatDey(400);
     const normalTreatDey = kibria.treatDey.bind(normalGolam);
     normalTreatDey(2000);

# 👽 7. JavaScript Break and Continue
    Break Statement in JavaScript
The break statement is used to immediately exit a loop (for, while, do...while, or switch) before it finishes all its iterations, based on a specified condition.

    Continue Statement in JavaScript
The continue statement is used to skip the current iteration of a loop and move to the next iteration, without exiting the loop completely.

    const nums = [1, -2, 3, 4, -5, -6, 7, -8, 9];
    for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 3) {
    break;
    }
    //console.log(nums[i]);
    }

    for (let i = 0; i < nums.length; i++) {
     if (nums[i] < 0) {
    continue;
    }
    console.log(nums[i]);
    }

# 👩‍🚀8. JavaScript Function apply 
In JavaScript, the apply() method is a built-in function of Function objects. It allows you to call a function with a given this value and arguments provided as an array.
  
    const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount, tips, tax){
        console.log(this);
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }
}
     
    const heroPerson = {
    firstName: 'Hero',
    lastName: 'Balam',
    salary:25000
}

    const friendlyPerson = {
    firstName: 'Hero',
    lastName: 'Golam',
    salary:25000
}

    normalPerson.chargeBill();

    const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
    heroChargeBill(2000);
    heroChargeBill(3000);
    console.log(heroPerson.salary);
    console.log(normalPerson.salary);


     const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
     friendlyChargeBill(1500);

     normalPerson.chargeBill.call(heroPerson, 900, 100, 10);
     normalPerson.chargeBill.call(heroPerson, 3000, 300, 30);
     console.log(heroPerson.salary);

     normalPerson.chargeBill.call(friendlyPerson, 5000, 500, 50);
     console.log(friendlyPerson.salary);
     console.log(normalPerson.salary);

     normalPerson.chargeBill.apply(heroPerson, [3000, 300, 30]);
     normalPerson.chargeBill.apply(heroPerson, [4000, 400, 40])
     console.log(heroPerson.salary);

# 🐲9. JavaScript Class Method 
 
A class method in JavaScript is a function defined inside a class body that operates on the class instance (object) or the class itself (if static). These methods define behaviors associated with objects created from the class.


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

    Class Method
    const catMan = new Hero('catman', 'Deep Khamsi');
    console.log(catMan.goForGrocery(100));

# 🧸10. Javascript Conditional Method
Conditional statements in JavaScript are control structures that allow the execution of code blocks based on whether a specified condition is true or false. These statements enable programs to make decisions and execute different actions accordingly. The primary conditional statements in JavaScript include if, else if, and else, along with the switch statement and the ternary operator. 

    if (isFoodReady == true) {
    console.log('Mama!! I will eat now.')
    }

     // Conditional
    var iphonePrice = 70000;
    var myBudget = 109500;

    // if (iphonePrice < myBudget) {
    //     console.log('Iphone diya pic tule futani marbo!!')
    // }

    // if (iphonePrice > myBudget) {
    // console.log('My Shaomi is the best!!');
    // }

    var chickenPice = 180;
    var myMoney = 850;

    if (chickenPice < myMoney) {
    console.log('Yes! murgir Ran khamu ar haddi chabamu');
    }
    else {
    console.log('Smashed potato with Lentil soup')
    }






