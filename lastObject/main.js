let user1 = {
	name:'abdelrahman',
	getName:function(){
		//return `hello ${user1.name}`;
		return `hello ${this.name}`;
	}
} 



let user2 = Object.create(user1);

console.log(user2.name);
console.log(user2.getName());

user2.name = 'ali';
console.log(user2.name);


user2.age = 30;
console.log(user2.age);





let user3 = Object.create(user1, {
	age:{value:20}
});
user3.name= "shiheb";
console.log(user3.age);
console.log(user3.getName()); 




// asign object

let a1 = {
	num1:1,
	hello:function(){
		return 'Hello'
	}
}

let a2 = {
	num2:2
}

let a3 = {
	num3:3
}



let a4 = Object.assign(a1,a2,a3,{
	num4:4
});
console.log(a4);

a4.num1 = 10;
a4.r = 100;

console.log(a4);




