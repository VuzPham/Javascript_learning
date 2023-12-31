const numbers = [1, 3, 3, 5];

Array.prototype.mySome = (function(cb) {
    if (typeof cb === 'function') {
        for (var index in this) {
            if (this.hasOwnProperty(index)) {
                if (cb(this[index],index,this)){
                    return true;
                }
            }
        }
        return false;
    }
})


//Expected results:

console.log(numbers.mySome(function (number) {
    return number % 2 === 0;
})); //Output: false

console.log(numbers.mySome(function (number, index) {
    return index % 2 === 0;
})); //Output: true

console.log(numbers.mySome(function (number, index, array) {
    return array.length % 2 === 0;
})); //Output: true


