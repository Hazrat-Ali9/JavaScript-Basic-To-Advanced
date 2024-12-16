 // Hazrat Ali
// University Of Scholars
function inchToFeet(inches) {
    var feet = inches / 12;
    return feet;
}
// inch To Feet
var myInches = 132;
var feet = inchToFeet(myInches);
console.log('myInches in feet', feet);

var dadiInches = 144;
var feet = inchToFeet(dadiInches);
console.log('dadi inches in feet', feet);

var naniInches = 156;
var feet = inchToFeet(naniInches);

var nanaInches = 168;
var feet = nanaInches / 12;



// mile to km
function mileToKilometer(miles) {
    var km = miles * 1.60934;
    return km;
}

var marathon = mileToKilometer(26.2);
console.log('marathon in km: ', marathon);