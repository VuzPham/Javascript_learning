const number = [1, 2, 3, 4, 5];

// ham nay de tính tổng 
Array.prototype.reduce2 = function(callback, result) {
    let i = 0;
    if (arguments.length < 2) {
        i = 1;
        result = this[0];
    }
    for (; i < this.length; i++) {
       result =  callback(result, this[i], i, this);  // i = 10 , this la array cũ result lưu kq,
                                                        // this[i] là để hiện thị giá trị mới
    }
    return result;
}


// hàm call back để cộng từng phần tử
var result = number.reduce2(function(tong, temp) {
    return tong + temp;
},10);

console.log(result);