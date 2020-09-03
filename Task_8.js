/**
 * 
 * Write a method to count the number of 3s that appear in all the numbers between 0 and
n (inclusive). It should return an object containing the count of the number of 3s that
appear and an array of the numbers that have 3s in them
Example:
Input​ : 35
Output​ : { count: 10, numbers: [3, 13, 23, 30, 31, 32, 33, 34, 35] }
 */

function countThrees(numb){

    let threes = 0; // this stores the number of threes that we can find but at first it is defined and declared
    
    //An object called value is is created: object literals 
    let values = {
        count :'', //creates a key called count this counts the number of threes we can find within the number supplied in the parameter
        numbers:[] //Also an array with key numbers is also created in the object
    }


    //lopp starting from 0 to the number suplied in th parameter
    for ( let i = 0 ; i <= numb ; i++){
        let numbTostring = i.toString();// This converts the numbers to string so we can use the string method on it
        if(numbTostring.indexOf('3') > -1){ //Index of is used determing if the string we have contains three
            threes++ //if it is found the number of threes found is increased by 1
            values.numbers.push(i);//also the values are stored in an array 
        }
        
    }

    values.count = threes ;// the value of the count key is changed to the amount of threes we can find 
    return values //Then the code returns the object 
}

console.log(countThrees(135))