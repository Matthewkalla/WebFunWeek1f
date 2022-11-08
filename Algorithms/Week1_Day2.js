//Lesson 1, Predict the Output

var a = 25;
//assign a with a value of 25
a = a - 13;
//subtract 13 from 25, now is 12
console.log(a / 2);
//12 divided by 2 is 6; 6 will be printed

a = "hello";
//The string "hello" is now assigned to a
console.log(a + " hello");
//"hello hello" is printed out


//Lesson 2, Predict what the code does
for (var i = 0; i < 10; i++) {
    console.log(i); //this will print i: 0,  4, 8
    i = i + 3; //i is now 11
}

console.log("outside of the loop " + i);
//outside of the loop 11


//Lesson 3
function getTotal(arrayOfNumbers) {
//function created

    var sum = arrayOfNumbers[0];
    //declare a value to hold the current sum

    for (var i = 0; i < arrayOfNumbers.length; i++) {
        //this loop will run from the beginning to the end of the array
        sum += arrayOfNumbers[i];
        //add the value at the index of array [i] to sum, and make it sum
        console.log("the current sum is: " + sum);
        //this will log the sum so far
    }

    console.log("the total is: " + sum);
    //after the loop, the final sum will be printed

}

getTotal([1, 3, 5]);
//the output will look like so:
//the current sum is: 2
//the current sum is: 5
//the current sum is: 10
//the total is: 10
