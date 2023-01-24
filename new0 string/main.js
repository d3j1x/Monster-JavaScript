
let x = 100;
x = String(x);
console.log(typeof x);

let y = 100;
y = y.toString();
console.log(typeof y);

console.log(typeof (100).toString());
console.log(typeof 100..toString());



// repeat
// length
// access
// search
// slice
// split

let name = "ali";

console.log(name);

console.log(name[0]);
console.log(name.charAt(1));

console.log(name.indexOf('i'));


console.log(name.repeat(2));
console.log(name.length);

let name2 = 'i love java script';
console.log(name2.indexOf('a',9));
console.log(name2.indexOf('java'));

console.log(name2.lastIndexOf('i'));
console.log(name2.lastIndexOf('i',14));


// slice

console.log(name2.slice());
console.log(name2.slice(2));
console.log(name2.slice(0,3));


// split
console.log(name2.split());
console.log(name2.split(''));
console.log(name2.split('',3));
console.log(name2.split(' '));
console.log(name2.split(' ',2));


console.log(name2.slice());
console.log(name2.slice(2,6));
console.log(name2.slice(-6));
console.log(name2.slice(-6,-4));

console.log(name2.substring());
console.log(name2.substring(2,6));
console.log(name2.substr());


console.log(name2.slice(2,6));
console.log(name2.substring(2,6));
console.log(name2.substr(2,6));


//search


console.log(name2.indexOf('a'));
console.log(name2.lastIndexOf('a'));

console.log(name2.indexOf('a',9));
console.log(name2.indexOf('z',9));
console.log(name2.lastIndexOf('a',9));
console.log(name2.lastIndexOf('z',9));

console.log(name2.includes('a'));
console.log(name2.includes('z'));
console.log(name2.includes('o',4));
console.log(name2.includes('o',3));


console.log(name2.startsWith('i'));
console.log(name2.startsWith('o',3));
console.log(name2.startsWith('love',2));

console.log(name2.endsWith('t'));
console.log(name2.endsWith('e',6)); // 6 length





