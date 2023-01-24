


// global

var x = 10;
console.log(x);


for(var i = 0; i < 5; i++)
{
}
console.log(i) // i global



// local
function hello(){
	console.log(x);
}
hello();


for(let s = 0; s < 6; s++)
{
}
// console.log(s)    ERROR s local



function hi()
{
	console.log('hello world');
}
hi()

console.log('Next');


(function ()
{
	console.log('hello world');
})();





//


(function ()
{
	
	function x()
	{
		console.log(1);
	}
	x();
	

})();



//



document.write( z() );

function z(){
	function y(){return 1}
	return y();
	function y(){return 0}
}


//




//function z(){
//	function y(){return 1}
//	function y(){return 0}
//	return y();
//	}



















