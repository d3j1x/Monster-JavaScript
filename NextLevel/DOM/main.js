// console.log(document.getElementById('head'));

let head =  document.getElementById('head');
//console.log(head);

head.innerHTML = 'test';
head.style.color = 'red';

let head2 = document.getElementsByClassName('head')[0];
console.log(head2);
head2.style.color = 'blue';

let head3 = document.getElementsByClassName('head')[1];
console.log(head3);
head3.style.color = 'green';

let head4 = document.getElementsByTagName('h1');
console.log(head4);

let head5 = document.getElementsByTagName('h1')[2];
head5.style.color = 'yellow';




// querySelector

let nhead = document.querySelector('h1');
nhead.style.color= 'green';

let xhead = document.querySelector('.head');
xhead.style.color= 'green';

let yhead = document.querySelector('#head');
yhead.style.color= 'red';


// querySelector all


let w = document.querySelectorAll('h1');
console.log(w);

let v = document.querySelectorAll('h1')[0];
v.style.color= 'lightblue';


//                 ************


let body = document.body;
body.style.background= '#444';



let title = document.title;
console.log(title);

title = 'shiheb';

console.log(title);


//              ------- img


let sora = document.images;
console.log(sora);

let sora0 = document.images[1];
console.log(sora);


console.log(sora0.src);
console.log(sora0.alt);
sora0.alt = 'test';
console.log(sora0.alt);
sora0.src = 'ssook.png';



// *********** ******* link

let links = document.links;
console.log(links);

let link = document.links[0];
console.log(link);

link.href = "https://www.google.com";
console.log(link);


/// ****** forms -----------

let forms = document.forms;
console.log(forms);

let form = document.forms[0];
console.log(form);




