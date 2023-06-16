// For /in loop
//Lặp qua key của Object
var myInfo = {
    name: 'Son Dang',
    age: 18,
    address: 'Ha Noi, VN',
};

for (var key in myInfo) {
    //console.log(key);
    //name 
    //age 
    //address
    console.log(myInfo[key]);
    //Son Dang
    //18
    //Ha Noi, VN
}


var myArray = [
    'Javascript',
    'PHP',
    'Java',
    'Dart',
];

// for (var key in myArray) {
//     console.log(key); // 0 1 2 3
// }

var languages = 'Javascript';
for (var key in languages) {
    console.log(key); // 0 1 2 3 4 5 6 7 8 9
}

// function run(object) {
//     var arr = [];
//     for (var key in object) {
//         arr.push('Thuộc tính ${key} có giá trị ${object[key]}')
//         return arr;
//     }
// }

// // Expected results:
// console.log(run({ name: 'Nguyen Van A', age: 16 }));