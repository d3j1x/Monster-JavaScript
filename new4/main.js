

let num1 = prompt('num1 :');
let num2 = prompt('num2 :');

if(num1<num2)
{
	console.log('hello');
}


let role = prompt('what is your role?');

if(role.toLowerCase().trim() == 'admin')
{
	document.write('update, create, delete');
}
else if(role.toLowerCase().trim() == 'moderator')
{
	document.write('updat, create');
}
else
{
	document.write('hello user');
}



let age = prompt('what is your age');

age.trim() > 18?
	document.write(' hello user age bIg')
	:parseInt(age.trim()) === 18?
		document.write(' nice age')
	:document.write(' no you are very young');
	
	
let age2 = prompt('whts ur nxt age');
let result = age2 >18? 'Hello nxt' :age2 ==18? 'u re 18 now' :'no u re verry young';
	document.write('<br>')
	document.write(result)
	
