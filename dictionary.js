 // Hazrat Ali
// University Of Scholars
class Dictionary {
    constructor(){
        this.dictionary = {};
    }
    add(key, value){
        this.dictionary[key] = value;
    }
    get(key){
        return this.dictionary[key];
    }
}
// Dictionary js
const phoneBook = new Dictionary();
phoneBook.add('Mahi', '01717030303');
phoneBook.add('Porimoni', '01717050505');
phoneBook.add('Purnima', '01717070707');
console.log(phoneBook.dictionary);
const mahi = phoneBook.get("Mahi")
console.log(mahi);