function arrToObj (arr) {
    return arr.reduce(function(accumulator, currentvalue) {
            accumulator[currentvalue[0]] = currentvalue[1];
            return accumulator;
        },{}) 
}
 // ex:  myInfo['address'] = 225939204; 
// Expected results:
var arr = [
    ['name', 'Sơn Đặng'],
    ['age', 18],
];
console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }

