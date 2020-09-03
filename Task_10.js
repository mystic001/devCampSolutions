
/**
 * 
 * Write a function that takes a string. The function should calculate the character in the
string with the most occurrences and return that character. If more than one character
has the most occurrence, return those characters as an array.
Example
Input​ : “afhuusnimr443o0sggg”
Output​ : “g”
 */
function mostOcurence(wordsEntered){

    let empty = [];//create an empty array
    let biggestValue = 0; //declare and define the biggestValues;
    let commonCharacter = '';//Also declare and define the common character

    //this function checks for the number of times an alphabet or a letter appears within a word
const letterChecker =  (wordsEntered,alpha)=>{
    let num = 0//The appearance is first declared and defined
    for(let i =0 ; i <wordsEntered.length ; i++){
        //We loop through the word and check for the occurence of the letter within the word
        if(wordsEntered.charAt(i) == alpha){ //if the word is located it returns true and the code below is executed
            num++ //the number of appearance is increased by 1 for every occurence
        }
    }
    return num// this then returns the total occurence
}

//We loop through the word supplied in the parameter 
    for(let i = 0 ; i < wordsEntered.length ;i++){

        //to ensure the code is optimized we check if the letter has already been checked
        if(empty.includes(wordsEntered[i])){
            continue; //if the letter can be found within the array of empty then the code continues and jumps to the next letter in the array
        } else{ // else it means the if condition above is not met so the code below is executed
            empty.push(wordsEntered[i])//the letter is added  to the empty array
            let value = letterChecker(wordsEntered,wordsEntered[i]); //Also we call the letterChecker function and checks for the number of times the letter occured in the word. it gets the number and returns the value
            if(value > biggestValue){ //We then compare the value of the occurence we got from the above with the biggest value we declared above
                biggestValue = value; // if the value is bigger we then set the value of the biggestValue to the new value we just got
                commonCharacter = wordsEntered[i]; //Also we get the value of the character that most and update our commonCharacter 
            } 

        }
    }
    return commonCharacter;//After everything the code returns the common character

}

//Example code
console.log(mostOcurence('afhuusnimr443o0sggg'));