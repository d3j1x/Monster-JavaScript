

function hello(name){
	console.log(`hello ${name}`);
}
hello();

function ha(name=''){
	console.log(`hello ${name}`);
}
ha();



function hi(name='ahmed'){
	console.log(`hello ${name}`);
}
hi();





function he(name='ahmed'){
	console.log(`hello ${name}`);
}
he('abdelrahman');



function calcAge(age){
	console.log(age * 365)
}

calcAge();

function calage(age=0){
	console.log(age * 365)
}

calage();


//    ooopsssss


function calc(num1, num2){
	console.log();
}
calc(10,20)


function calcA(...numbers){
	console.log(numbers);
}
calcA(1,2,3,'ali')

console.log('OoooooPsssssss');

function calcB(...numbers){
	let result = 0
	for(let i = 0; i<numbers.length; i++){
	result += numbers[i]
	}
	console.log(result);
}
calcB(1,2,3,4)





