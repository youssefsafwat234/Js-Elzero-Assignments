let flt = 10.4;

console.log(Number.parseInt(flt)); // 10
console.log(Number.parseInt(flt.valueOf())); // 10
console.log(flt.toFixed()); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Number(flt.toString()).toFixed()); // 10