// Edit What You Want Here

let num1 = 10;
let num2 = 10;
let num3 = "10";
let num4 = 20;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1
if (num1 > num2) {
    console.log("False");
} else {
    console.log("True");
}
// Condition 2
if (num1 > num2 && num1 < num4) {
    console.log("False");
} else {
    console.log("True");
}
// Condition 3
if (num1 > num2 && num1 === num3) {
    console.log("False");
} else {
    console.log("True");

}
// Condition 4
if ((num1 + num2) < num4) {
    console.log("False");
} else {
    console.log("True");
}

// Condition 5
if ((num1 + num3) < num4) {
    console.log("False");
} else {
    console.log("True");
}

// Condition 6

if ((num1 + num2 + num3) < num4) {
    console.log("False");
} else {
    console.log("True");
}

// Condition 7

if (num4 - (num1 + num3) + num2 === 21) {
    console.log("False");
} else {
    console.log("True");
}