var array = ['a', 'b', 'c', 'a', 'c', 'b'];

console.log(new Set(array)); //{'a', 'b', 'c'}
console.log([...(new Set (array))]);


// giai thua de quy

function giaithua(number) {
    if (number ==  1){
        return 1;
    }
    return number*giaithua(number-1);
}


function ggiaithua_kodequy(number){
    var tich = 1;
    for (var i = 1; i <= number; i++){
        tich *= i;
    }
    return tich;
}

console.log(giaithua(5));
console.log(ggiaithua_kodequy(5));