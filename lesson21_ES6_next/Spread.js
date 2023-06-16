var array1 = ['java', 'php', 'C#'];
var array2 = ['frontEnd', 'backend', 'fullstack'];


// Rest
var [...rest] = array2;
console.log(rest, 'Rest');

// Spread
var array3 = [...array2];
console.log(array3, 'Spread');

var object1 = {
    name: 'Javascript',
}

var object2 = {
    price: 2000,
}

var object3 = {
    ...object1,
    ...object2
}
// object3.info = object2.price;
// var price2 = 'price';
// console.log(object2.price);
// console.log(object2[price2]);

console.log(object3, 'Spread Object');

var test = [9,8,7,6,5,4,3,2,1];

function logger2(cc,b,...rest) {
    console.log(cc,b,'logger2');
    console.log(rest,'logger2');
}
// 9,8,7,6,5,4,3,2,1
logger2(...test);