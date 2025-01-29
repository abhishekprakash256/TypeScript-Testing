
/*
make a addition function in type script

*/



function add(a : number , b : number)
{
	return a + b ;
}


console.log(add(1,3));


// make in a funciton for calculatin of number like a caculator 

class calculator

{

	add(a: number , b : number)
	{
	return a + b ;
	}

	subtract(a: number, b : number)

	{
	if (a < b) 
	{
		return b - a ;
	}

	else
	{
			return a - b;
	}
	}

		multiplication(a: number, b : number)

		{
			return a * b ;
		}

		divide(a: number ,b : number)
		{
			if (a > b )
			{
				return a % b ;
			}

			else 
			{
				return b % a;
			}
		}		


}


// do the calculations
const cal = new calculator() ; 
console.log(cal.add(4,3))
console.log(cal.subtract(8,2))


