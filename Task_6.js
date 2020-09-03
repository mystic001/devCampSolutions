/**
 * 
 *Write a function that takes two parameters, an array and some number. The function
should determine whether any three numbers in the array add up to the number. If it
does, the function should return the numbers as an array. If it doesn’t, the function
should return -1.
Example
Input​ : [1, 2, 3, 4, 5, 6], 6
Output​ : [1, 2, 3]
 */

function addUpNumber(numbArray, baseNumb){
    let sum = 0;
    let emptyArray = [] //create an empty array which will later store the array that adds up to the second parameter
    
    //We loop through the array of numbers given in the first parameter
    for(let i = 0 ; i < numbArray.length-2 ; i++){

        //We pick the first element in the array as numbArray[i]
        for(let j = i+1; j < numbArray.length-1 ; j++){

            //We pick the second element in the array as numbArray[j]
            for(let k = i + 2 ; k < numbArray.length ; k++){

                //We pick the third element in the array as numbArray[k]
            sum = numbArray[i] + numbArray[j] + numbArray[k] //This elements are all added up to see which one will give us the sum of the second parameter
            if(sum == baseNumb){ //if sum of this elements adds up to the second parameter
                emptyArray.push(numbArray[i]);//The numbArray[i] are added to the array
                emptyArray.push(numbArray[j]);//The numbArray[j] are added to the array
                emptyArray.push(numbArray[k]);//The numbArray[k] are added to the array
                return emptyArray; //And this returns the array containing the elements and the code comes to an end
            }
        }
    }
}
    return -1; //if there is nonumber that adds up to the second parameter the code returns -1;
}
//An example
console.log(addUpNumber([10,3,6,5,2,8], 12));
console.log(addUpNumber([1, 2, 3, 4, 5, 6],6)) ;
