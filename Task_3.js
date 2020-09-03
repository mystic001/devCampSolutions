/**
 * 
 * Write a function that accepts an array of positive integers and returns an array of all
prime numbers from the given array. A prime number is a number that is only divisible by
1 and itself.
 */

function arrayOfNumber(numbArray){

    let arrayOfPrime = []; //Create an empty array

//This function is to check for prime numbers and it is been explained in Task_2
    function primeCheck(numb){
        for(let i = 2 ; i <= (numb/2) ; i++){
          if((numb % i) == 0){
                return false;
            }
        }
        return true;
    }

    
//Now we use this loop to run through the array supplied as an argument 
    for( let i = 0 ; i < numbArray.length ; i++){

        if(primeCheck(numbArray[i])){ //This checks if the number is an array 
            arrayOfPrime.push(numbArray[i]) //If it is array then we will use the push method to add the number to the numbArray we created arrayOfPrime
        }

    }

    return arrayOfPrime; //And this returns the arrayOfPrime numbers 

}

//An Example to run the code
let pos = [5,4,6,8,9,11,17,20,13,18]

console.log(arrayOfNumber(pos))