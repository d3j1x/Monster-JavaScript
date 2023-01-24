
let users = ['ali','mazen','gamal',1,2,3,6,'oday','yousef','ahmed']

for(let i = 0; i < users.length; i++)
{
	if(typeof users[i] == 'number')
	{
		continue;
	}
	console.log(users[i])
}

console.log('_______________');


for( i = 0; i < users.length; i++)
{
	if(users[i] != 'ali')
	{
		continue;
	}
	console.log(users[i])
}


console.log('_______________');


for( i = 0; i < users.length; i++)
{
	
	if(users[i] == 'yousef')
	{
		console.log(users[i])
		break;
	}
	
}

console.log('_______________');


for( i = 0; i < users.length; i++)
{
	console.log(users[i])
	if(users[i] == 'oday')
	{
		console.log(users[i])
		break;
	}
	
}
