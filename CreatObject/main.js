
let user = {};


user.name = 'ahmed';
console.log(user.name);

user['age'] = 25;
console.log(user.age);

user.hello = function(){
	return 'hello';
}
console.log(user.hello());






let x = new Number();
console.log(x);

let y = new String();
console.log(y);

let a = new Boolean();
console.log(a);

let b = new Object();
console.log(b);
b.title = 'ahmed';
console.log(b.title);
