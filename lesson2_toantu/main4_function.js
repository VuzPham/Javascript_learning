/*
1. Hàm
 - Một khối mã
 - Làm 1 việc cụ thể
2. Loại hàm
 - Built-in
 - Tự định nghĩa 

3. Tính chất
 - không thực thi khi định nghĩa
 - sẽ thực thi khi được gọi
 - có thể nhận tham số
 - có thể trả về 1 giá trị
 4.tạo hàm
 */
 function showDialog() {
    alert ('Hi xin chao cac bn!');
}

var showDialog = function () {
    alert ('Hi xin chao cac bn!');
}
// 3. Arguments ?

// function writelog() {
//     console.log (arguments)
// }


// function writelog() {
//    for (var i of arguments){
//         console.log(i);
//    }
// }
function writelog() {
    var myString = '';
    for (var i of arguments){
        myString += `${i} - `; // ${i} de lay gia tri log, `{i}` chi in ra i
        }
    console.log(myString);
 }
writelog ('log1', 'log2', 3, "log 3");


// Return 

// function sum(a, b) {
//     return a + b; 
// }

// function sum(a,b) {
//     //return a.toString() + b.toString();
//     return '2' + '3';
// }

// console.log(sum(2,3));


/*
Một số điều cần biết về function

1. Khi fuction đặt trùng tên ? fuction dinh nghia sau ghi đè lên fuction trước 
2. Khai báo biến trong hàm?  có thể khai báo biến trong hàm phạm vi trong hàm
3. Định nghĩa hàm trong hàm?  
*/
function showMessage() {
    function showMessage2() {
        console.log('Message 2');
    }
    showMessage2();
}
showMessage();

/*
Các loại hàm
1. Declaration function 
2. Expression fuction
3. Arrow fuction
*/


// Declaration function
// Duoc goi truoc khi duoc dinh nghia
function showMessage() { 

}

// Expression function
// khong duoc goi truoc khi duoc dinh nghia
var showMessage = function() {

}

setTimeout(function() {

},1000);

 setInterval(function(){
     console.log('Pham ' + Math.random()) //sinh so random
 },1000);

var myObject = {
    myFunction: function() {

    },
};