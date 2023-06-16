function sumCb(a, b) {
    return a + b;
}

function subCb(a,b) {
    return a - b;
}

function multiCb(a,b) {
    return a * b;
}

function divCb(a,b) {
    return a / b;
}

function caculate(a, b, cb) {
    return cb(a, b); // hàm sẽ trả về sumCb và sum Cb sẽ trả về kq
}

/*
    - gọi lại hàm là gọi hàm sumCb
    - caculate sẽ dùng hàm đối số và thực hiện truyền tham số
    - còn lại hàm sumCb sẽ thực hiện 

*/
// Expected results
console.log(caculate(1, 2, sumCb)) // Output: 3
console.log(caculate(1, 2, subCb)) // Output: -1
console.log(caculate(1, 2, multiCb)) // Output: 2
console.log(caculate(3, 1, divCb)) // Output: 3


