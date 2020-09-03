function standardDeviation(deviationNumber){
    //Fnd the mean of the array
    //Subtract the mean and square the result 
    //All the squared result should be added and the find the mean 
    //Find the square root of the mean u just got;

    let size = deviationNumber.length ;//This gets the size of the array 
    let sum = 0; //To define and declare the sum
    let absoluteValueArray = [] //To create an array which holds the absolute value for the differnce between the mean and the number in the array coming from the paramater 
    let sumOfSquaredMean = 0;//To define and declare the sumOfSquaredMean

    //loop through the array of numbers to find the sum of the numbers in the array
    for(let i = 0 ; i < size ; i++){
        sum += deviationNumber[i] //the sum is calculated here
    }

    let mean = sum/size; //Then we calcullate the mean


    //to get the absolute value and store them in an array we nedd to loop through the array 
    //which is determined by the size of the array
    for(let i = 0; i < size ; i++ ){
        let diff = Math.abs(mean - deviationNumber[i]);//This gets the absolute value of the differnce between the mean and the numbers in the array
        let result = diff * diff ; //The differnce is squared
        absoluteValueArray.push(result); //The result is added to the absoluteValueArray
    }

    // the values in the absoluteValueArray are then added together
    for( let i = 0 ; i < size ; i++){
        sumOfSquaredMean += absoluteValueArray[i]; // The sumOfSquaredMean is gotten here after the loop
    }

    let standardDev = Math.sqrt(sumOfSquaredMean); //Using the Math.sqrt we can then get the square root of the sumOfSquaredMean and this gives us tthe standard deviation

    return standardDev ; //After the codes comes to an end the standard deviation is rteurned
}

let pos = [5,4,6,8,9,11,17,20,13,18]
let posit = [5,4,6,];
console.log(standardDeviation(pos));