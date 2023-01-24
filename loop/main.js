
// start, condition, steps

for(let i = 0; i < 3; i++)
{
	console.log('Hello World');
	console.log(i);
}

for(let x = 10; x >= 0; x--)
{
	console.log('Hello World');
	console.log(x);
}

for(let y = 0; y < 3; y++)
{
	console.log('ahmed ' + y);

}

//

let names = ['ahmed','mazen','ali','gamal']
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log('NeXt');

for(let o = 0; o < names.length; o++)
{
	console.log(names[o]);
}

//
console.log('NeXt');
//

let name = 'ahmed'
for(let p = 0; p < name.length; p++)
{
	console.log(name[p]);
}

for(let s = name.length-1; s >= 0; s--)
{
	console.log(name[s]);
}

// nested loop

let cars = ['BMW','Mercedes','Honda']
let models = [2020,2021,2022]
let colors = ['Black','Red','white']


for(let c = 0; c < cars.length ; c++)
{
	console.log(`Car: ${cars[c]}`);
	for(let j = 0; j < models.length; j++)
	{
		console.log(`Models: ${models[j]}`)
	}
	for(let g = 0; g < colors.length; g++)
	{
		console.log(`Colors: ${colors[g]}`)
	}
	console.log('_______________');
}























