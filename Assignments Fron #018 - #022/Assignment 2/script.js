let num = 3;

// Solution One
console.log(num + num); // 6

// Solution Two
console.log(Number(`${num + num}`)); // 6

// Soultion Three
console.log(num ** 2 - num); // 6

// Soultion Four
console.log(+`${num}` + num); // 6

// Solution Five
console.log(num - `-${num}`); // 6

// Solution Six
console.log(num++ + --num); // 6