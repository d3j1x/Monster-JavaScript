
let user = {
	name: 'abdelrahmen',
	lname: 'gamal',
	
	getName:function(){
		return user.name
	},
	
	getLname:function(){
		return this.name
	}
}

console.log(user.getName());
console.log(user.getLname());


let x = this;
console.log(x == window);

this.alert('nice');


function hello(){
	return this;
}
console.log(hello());

"use strict"; // strict: no auto correction
