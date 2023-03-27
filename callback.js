// Hazrat Ali
// University Of Scholars
function explain_callback(name, age, task){
    task();
    console.log('Hello ', name);
    console.log('your age ', age);
}

function washHand(){
    console.log('wash hand with soap')
}
function takeShower(){
    console.log('Take shower');
}
function scrollFacebook(){
    console.log('Scroll facebook but dont like any post');
}

explain_callback('Sogir Uddin', 17, washHand);
explain_callback('Jogir Uddin', 13, takeShower);
explain_callback('mugir Uddin', 21, scrollFacebook);