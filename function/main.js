
let name = prompt('whats your name')

function hello(name)
{
	document.write('hello '+ name)
}
hello(name)


document.write('_____________');




function calcAge(age)
{
	let result = age * 365
	document.write(`your age is : ${result} days`);
}

let age = prompt('whats your age')
calcAge(age)

document.write('_____________');



// function return


function pro(price, taxes, ads)
{
	let product = price + taxes;
	let result = product + ads;
	return result;
}

let x = pro(200, 1.5, 40);
console.log(x/2);





function eldehk()
{
	return 1;
}
console.log(eldehk())






