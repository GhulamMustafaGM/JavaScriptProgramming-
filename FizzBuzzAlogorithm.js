// FizzBuzzWork Algorithms program

function fizzBuzzWork(Number)
 {
  for (var k = 1; k <= Number; k++)
   {
    if (k % 15 === 0)
     console.log('FizzBuzz');
    else if (k % 3 === 0) 
     console.log('Fizz');
    else if (k % 5 === 0) 
    console.log('Buzz');
    else 
    console.log(k);
  }
}

fizzBuzzWork(30);