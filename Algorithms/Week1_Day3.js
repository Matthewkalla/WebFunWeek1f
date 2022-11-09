//Always Is Sunny, excercise 1

var isSunny = true;
var temperature = 45; // let's assume degrees Fahrenheit
var isRaining = false;
var whatToBring = "I should bring: ";

if (isSunny) {
    whatToBring += "sunglasses, ";
}
if (temperature < 50) {
    whatToBring += "a coat, ";
}
if (isRaining) {
    whatToBring += "an umbrella, ";
}
whatToBring += "and a smile!";

// console.log(whatToBring);

//Downcount
// for (var i = 10; i > 0; i--) {
//     if (i != 2) {
//         console.log(i);
//     } else {
//         console.log("ignition!");
//     }
// }

// console.log("liftoff!");

//Count positives

var numbers = [3, 4, -2, 7, 16, -8, 0];

function positiveCount(arr){

    var count = 0;

    for(i = 0; i < arr.length; i++){
        if(arr[i] >= 0){
            count++;
        }
    }
    return count;
}
    

    
console.log("there are " + positiveCount(numbers) + " positive values");

