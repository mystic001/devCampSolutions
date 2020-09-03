/**Write a method to replace all spaces in a string with '%20'.
Example
Input​ : "Mr John Smith "
Output​ : "Mr%20John%20Smith" */

function replaceSpace(str){

    //We loop through the the argument supplied through the function
    for(let i = 0 ; i < str.length ; i++){

        //Using the charAt method we locate the space 
        if(str.charAt(i) == ' '){
            str = str.replace(' ','%20')//Using the inbuilt replace method of javascript we replace the space with '%20'
        }
    }

    return str; //Then return the final string
}

console.log(replaceSpace('Omonayin Bamidele Emmanuel'));
console.log(replaceSpace('Mr John Smith'));
