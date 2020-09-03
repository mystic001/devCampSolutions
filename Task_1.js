function calculate(positiveArray){

    /**
     * 1. Write a function that takes an array of positive integers. The function should calculate the
sum of all even and odd integers and return an array containing the sums. The first index
in the returned array should hold the sum of the even integers and the second index
should hold the sum of the odd integers.
     */
    let empty = []; //This creates an empty array
    let evenSum = 0; // We define and declare the evenSum
    let oddSum = 0; // We define and declare the oddSum

    //We loop through the array to find the odd and even number
    for(i = 0; i < positiveArray.length ; i++){
    
        if((positiveArray[i] % 2 ) == 0){ //This checks for even numbers
         evenSum += positiveArray[i];// Add all those numbers that meets up with the condition 
        }else{ //If a number is not even then it is odd
         oddSum += positiveArray[i] //So all those odd numbers are added here 
        }
    }
    empty.push(evenSum) // We use the push method of array in adding all the evensum
    empty.push(oddSum)  // We use the push method of array in adding all the oddsum
    return empty; //This then returns the array named empty even though now it is no longer empty

}

//An example to run the code
let pos = [5,4,6,8,9,11,17,20,13,18]
console.log(calculate(pos));