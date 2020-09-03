
/**Write a function that accepts a positive integer and determines if it is a prime number.
The function should return true, if it is a prime number or false if it isn’t. */

function primeCheck(numb){
    //This is to generate every number starting from 2 to half of the number suplied as argument 
    for(let i = 2 ; i <= (numb/2) ; i++){
      if((numb % i) == 0){ //This checks if the number supplied is divisble by the numbers generated 
            return false; //If it finds a number that is is divisbile by it returns false and the code stops running
        }
    }
    return true; //Else its means it ran through to half of the number supplied and the code couldnt find the number that can divide the argument we supplied so it returns true
}
//Example to test the code
console.log(primeCheck(5));
console.log(primeCheck(9));
console.log(primeCheck(11));
console.log(primeCheck(12));