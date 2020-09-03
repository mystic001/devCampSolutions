/**
 * 
 * Write a function that takes a string and determines if the string is a palindrome. A
palindrome is a word, number, phrase, or other sequence of characters which reads the
same backward as forward, such as madam, racecar. The function should return “Yes” if
the word is a palindrome and “No” if it isn’t. ​ You are not to use the programming
language’s existing function or method, if any​ .
 */

function palindrome(word){
    let palin = "";//deining and declaring the variable that holds the word 
    let wordSize = word.length;//Gets the size of the word to determine how many times we will loop through
    let lastLetter = wordSize - 1; //This is to get the last letter in the word suppplied as the parameter


    //We loop through the word starting from behind
    for( let i = lastLetter ; i >= 0 ; i--){
        palin += word.charAt(i); // picks the word from behind and start adding it to the palin variable which keeps saving the word
    }

    //Now we check if the word saved in palin is the same with the word supplied as the parameter
    if( word == palin){ 
        return 'Yes'; //If it is return "Yes "
    } else {
        return 'No'; //Otherwise it will return no
    }
}
//Example codes
console.log(palindrome('girls'));
console.log(palindrome('racecar'));
console.log(palindrome('madam'));