/**
 * 
 * Create a password validator function that takes in the password as its argument and
returns an integer value you can evaluate to determine the password strength. Using the
following validators:
0 -> very weak e.g. a password with only strings
1 -> weak e.g. a password with only numbers
2 -> strong e.g. a password containing strings and numbers password 
 */

function passworValidator(password){

    //This function is meant to check if the password supplied contains strings only
    const stringOnly = (password)=>{ // This function receives password as parameter

        //looping through the password supplied 
        for(let i = 0; i < password.length ; i++){
            let convertTonumber = parseInt(password.charAt(i)) ;//Takes the string supplied as a password and convert it to a number 
            if(!isNaN(convertTonumber)){ //The isNaN() method is inverted to make it returns true if the parameter it receives is  a number
                return false// if the inverted isNaN returns true it tells us that it is a number so we return false for the test
            }
        }
    
        return true;// If no number is found then this returns true to confirm the passsword contains string only
    }
    
 //This function is meant to check if the password supplied contains Numbers
    const checkNum = (password)=>{
        for(let i = 0; i < password.length ; i++){
            let convertTonumber = parseInt(password.charAt(i)) ;
            if(!isNaN(convertTonumber)){//This checks if pasword contains number
                return true//Once it finds a number it return true
            }
        }
    
        return false;//Otherwise the code runs to the end and it returns false that it does not numbers
    }

 //This function is meant to check if the password supplied contains numbers only
    const numberOnly = (password) =>{
        for(let i = 0 ; i <password.length ; i++){
            let alpha = parseInt(password.charAt(i)); //This takes each part of the password and covert to numbers
            if(isNaN(alpha)){ //this checks if what is converted to is really a number. This will return true if it is not a number 
                return false; //And then we return false to communicate to anyone one using the function that this is not a number
            }
        }
    
        return true;// If no string is found the code will run to the end and return true;
    }


 //This function is meant to check if the password supplied contains special character
    const specialCharacter = (password)=>{

        //This loops through the password and search for any special character withing the password 
        for(let i = 0 ; i < password.length ; i++){
            if(password.charAt(i) == '~' || password.charAt(i) == '!' || password.charAt(i) == '@' 
            || password.charAt(i) == '#' || password.charAt(i) == '$' || password.charAt(i) == '%' ||
            password.charAt(i) == '^' || password.charAt(i) == '&' || password.charAt(i) == '*' ||
            password.charAt(i) == '(' || password.charAt(i) == ')' || password.charAt(i) == '-' ||
            password.charAt(i) == '_' || password.charAt(i) == '+' || password.charAt(i) == '=' ||
            password.charAt(i) == '|' || password.charAt(i) == '}' || password.charAt(i) == ']' ||
            password.charAt(i) == '{' || password.charAt(i) == '[' || password.charAt(i) == "'" ||
            password.charAt(i) == ';' || password.charAt(i) == ';' || password.charAt(i) == '?' ||
            password.charAt(i) == '>' || password.charAt(i) == '.' || password.charAt(i) == ',' ||
            password.charAt(i) == '<' || password.charAt(i) == '/' ){
    
                return true ; //if it finds any special character in our code it returns true and the code stops running
    
            }
        }
    
        return false ;//But returns false if it cant find any special character
    
    }
    
    //The functions created above are now called below.. depending on the condition that the password meets 
    //The password strength is made known
    //For strings character and number
    if(specialCharacter(password) && checkNum(password)){

        return 3 +"->very strong password"

    }

    //For strings only
    if(stringOnly(password)){
        return 0 +'->very weak password'
    }

    //For numbers only
    if(numberOnly(password)){
        return 1 +'->weak password'
    }

    

    
//for string and numbers only
    return 2 + '->strong password'


}
//Examples on testing our code
console.log(passworValidator('huyggrh'))
console.log(passworValidator('997875'))
console.log(passworValidator('997875huyggr77h'))
console.log(passworValidator('997875*huyggr77h'))