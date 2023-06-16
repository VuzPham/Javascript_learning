/*

Math Oject 

- Math.Pi;
- Math.round();
- Math.abs();
- Math.ceil();
- Math.floor();
- Math.random();
- Math.min();
- Math.max();

*/

console.log(Math.PI);
console.log(Math.abs(-20));
console.log(Math.round(3.6));
console.log(Math.ceil(4.00000001));// lam tròn trên 
console.log(Math.floor(4.0001)) // làm tròn dưới
console.log(Math.random()*100); // day so thap phan nho hon 1
var random = (Math.floor(Math.random()*5)); // random tu 0 - 4 

var bonus = [
    '10coin',
    '20coin',
    '30coin',
    '40coin',
    '50coin',
]

console.log(bonus[random]);
console.log(Math.max(-100,5,20,44,-4));
console.log(Math.min(-100,5,20,44,-4));