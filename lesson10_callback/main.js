// Call  back

// Là hàm (function) được truyền qua đối số 
// khi gọi hàm khác

// 1. là hàm 
// 2. được truyền qua đối số 

function myFunction (param) {
    if (typeof param === 'function'){
    param('Học lập trình'); // param chính là myCallback 
                            // chuyền chuỗi 'Học lập trình'
    }
}

function myCallback(value) {
    console.log('Value: ',value);
}

myFunction(myCallback);