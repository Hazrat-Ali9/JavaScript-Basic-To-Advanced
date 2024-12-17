 // Hazrat Ali
// University Of Scholars
const priya = 'Asif Akbar';
const meye = "Meye tumi ki dukkho chino";
const kobita = `kobita tumi sopno charini`;
const multiLine = 'This is my first line. \n' +
    'this is my second line.\n' +
    'third line text here\n' +
    'fourth line text here';
// Template String js
const multiLineNew = `this is is multi line
this is second line
this is third line
fourth line
`;
const friends = ['abul', 'babul', 'kabul', 'sabul'];
const count = 5;
const old = '<h3 class="friend-name">Friend-5</h3>'
const old2 = '<h3 class="friend-name">Friend-' + count + '</h3>';
const old3 = `<h3 class="friend-name">Friend-${count}</h3>`;
const new1 = `<h3 class="friend-name">Friend-${friends.length}</h3>`;

const first = 'Mamun';
const last = 'Chowdhury';
const fullOld = 'This person name is ' + first + ' ' + last;
const fullNew = `This person name is: ${first} ${last}. Has money ${(friends.length + 10) * 500}. He lives in Dhaka.`;

console.log(fullNew);