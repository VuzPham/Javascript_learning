
const numbers = [1, 2, 3, 4];

Array.prototype.myFilter = function(cb) {
    var arr = [];
    if (typeof cb === 'function') {
        for (var i in this) {
            if (this.hasOwnProperty(i)) {
                if (cb(this[i],i,this)) {
                    arr.push(this[i]);
                }
                else 
                    continue;
            }
        }
        return arr;
    }
}




//Expected results:
 console.log(numbers.myFilter(function (number) {
    return number % 2 === 0;
})); //Output: [2, 4]

 console.log(numbers.myFilter(function (number, index) {
    return index % 2 === 0;
})); //Output: [1, 3]

 console.log(numbers.myFilter(function (number, index, array) {
    return array.length % 2 === 0;
})); //Output: [1, 2, 3, 4]



