 // Hazrat Ali
// University Of Scholars
// console.log(this);
// this js
const kibria = {
    id: 101,
    money: 5000,
    name: 'RJ Kibria',
    treatDeyArrow: () => {
        console.log(this);
    },
    treatDeyInside: function () {
        const myArrow = () => console.log(this);
        myArrow();
    },
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

function add() {
    console.log(this);
}