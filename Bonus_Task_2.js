
/** 
 * This challenge asks you to take a string composed of only lowercase letters and space
characters, for example, “​ hello world ​ ” and replace every consonant in the string with the next
consonant in the alphabet. So in the above example, the output should be “​ jemmo xosmf ​ ” and
you can see that we left every vowel in place and only changed the consonants. You should
notice that the last letter changed was from “d” to “f” and not from “d” to “e” because “e” is a
vowel
*/

function letterChanger(normalString){

    let str = '';//This is where we define the variable that will hold the string we will be changing to

   
    const vowels = ['a','e','i','o','u']  //This is an array of vowels

    //This is an array of alphabets
    const alphabets = ['a','b','c','d','e','f','g','h','i','j',
    'k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']


//This vowel checker is to check if an slphsbet is vowel
    const vowelChecker = (alpha)=>{
        let lowerCase = alpha.toLowerCase(); //this converts the alpha to lowercase

        /*this is for looping throw the array of vowels and checking it against alpha to 
        confirm is alpha is vowel*/
        for( let i = 0 ; i < vowels.length ; i++){
            if(lowerCase == vowels[i]){
                return true  // if the alpha is vowel this returns true
            }
        }

        return false; //It returns false if the alphabet we suplied is not vowel
       
    }


    //Then we take the normal string we receive as an argument an loop through it
    for( let i = 0 ; i < normalString.length ; i++){
        
        //We pick each alphabet in the argument and check if it is vowel
        if(vowelChecker(normalString[i])){
            str += normalString[i] // if it is a vowel we do not change the value of the alphabet and we set the value from our to the str
            continue; // When this is done we use continue keyword to skip to the next alphabet in the argument
        } else { //This means the vowel checker returns false and this line of code will be executed
            
            let valueTochange = normalString[i] //It takes the value we wish to change and store it in a variable 
            let position = alphabets.indexOf(valueTochange); //This allows us get the position of value we want to change in our array of alphabet
            let newletter = alphabets[position + 1]; //And also get the new alphabet we want to use in replacing the consonant by adding 1


            //Now we have to check if the valuetochange is a space 
            if(valueTochange == ' '){
                newletter = ' '//If it is empty space then it should retain its value without changing
            }
            
            else if(valueTochange == 'z'){//We also check for z because it wouldnt have the next letter to jump to in the consonant array
                newletter = 'b' // So we change the value to b we cant use a because a is a vowel
            } else if(vowelChecker(newletter)){ //this condition is to check if the next letter we are jumping to is vowel 
                    newletter = alphabets[position + 2]; //If it is vowel we jump to the next letter by adding 2 instead of 1
            }

           str += newletter; //The final newletter that gets to make it to the end is continuosly saved in the str variable 
        }

    }

    return  str; //At the end of the code it returns the str variable which contains the value for the new world we have 

}

//This is an eample ;
console.log(letterChanger('hello world'));