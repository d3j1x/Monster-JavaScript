
let title = 'BMW';
let price = 500000;
let color = 'white';
let model = 2020; 

let car = {
	title: 'BMW',
	price: 500000,
	color: ['white','red','black'],
	model: 2020,
	
	hello:function(){
		return 'hello';
	}
};

console.log(typeof car);
console.log(car);

console.log(car.price);
console.log(car.color[0]);


console.log('-------------------');

let user = {
	//property
	firstName:'abdelrahman',
	lastNmae: 'gamal',
	email: 'test@gmail.com',
	age: 26,
	skills: ['html','css','js','python','php'],
	active: true,
	
	phoneNumber: {
		first:'0106547687',
		second: '0126574687',
	},
	
	address: {
		Egypt: 'elmohandsen',
		uae: 'abu dhabi',
	},
	isActive:function(){
		if(user.active === true){
		return 'hello user';
		}
		else{
			return 'sorry you are not active';
		}
	},
	getAge:function(){
		if(user.age >= 18){
			return 'avialalbe';
		}
		else{
			return 'unavailable';
		}
	},
};


console.log(user);
console.log(user.firstName);
console.log(user['firstName']);
console.log(user.phoneNumber);
console.log(user.phoneNumber.first);
console.log(user['phoneNumber']['first']);
console.log(user.isActive());
console.log(user['getAge']());
















