const numbers = [1, 2, 3];

Array.prototype.myMap = function(cb) {
    var arr = [];
    var arrayLen = this.length;
    for (var i = 0; i < arrayLen; i++) {
        var temp = cb(this[i], i);
        arr.push(temp);
    }
    return arr;
}

function cb (number, index) {
    return number;
}


// Expected results


 console.log(numbers.myMap(function (number) {
     return number * 2;
 })) // Output: [2, 4, 6]

 console.log(numbers.myMap(function (number, index) {
     return number * index;
 })) // Output: [0, 2, 6]


