/*
    Vòng lặp - Loop

1. for - Lặp với điều kiện đúng
2. for/in - Lặp qua key của đối tượng
3. for/ò Lặp qua value của đối tượng
4. while - lặp khi điều kiện đúng
5. do/while - lặp ít nhất 1 lần sau đó lặp
 khi điều kiện đúng

 */


function getRandNumbers (min,max,length) {
    var array = [];
    for (var i = 0; i < length; i++){
        array.push(Math.floor(Math.random() * (max - min) + min));
    } 
    return array;
}

var array = [];
array = getRandNumbers(5,10,5);
console.log(array);

// var i = 1;
// for (; true i > 0 ; ;i++ )
// {
//      luong dung treo may
// }


var myArray = [
    'Javascript',
    'PHP',
    'Java',
    'Dart',
];

var arrayLength = myArray.length;
for (var i = 0; i < arrayLength; i++) {
    console.log(myArray[i]);
}