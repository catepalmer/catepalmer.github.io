Eloquent JavaScript: Chapter 2 Solutions


Exercise: Looping a Triangle

for (var i = "#"; i.length < 7; i += "#") {
    console.log(i);



Exercise: FizzBuzz

for (var num = 1; num < 100; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("FizzBuzz");
        }
    else if (num % 3 === 0) {
        console.log("Fizz");
        }
    else if (num % 5 === 0) {
        console.log("Buzz");
        }
    else console.log(num);
    }



Exercise: Chess Board

var height = 8;
var width = 8;
var chessBoard = "";

for (i = 0; i < height; i++) {
    for (j = 0; j < width; j++) {
        if ((i + j) % 2 === 0) {
            chessBoard += "#";
        } else {
            chessBoard += " ";
        }
    }
    chessBoard += "\n";
}
console.log(chessBoard);