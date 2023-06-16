function sleep(ms) {
    return new Promise(function(resolve,reject) {
        setTimeout(resolve,ms); 
    });
}

sleep(1000)
    .then(function(sleep1) {
        console.log(1);
        return sleep(1000);
    })
    .then(function(sleep1) {
        console.log(2);
        return new Promise(function(resolve,reject) {
            reject('co loi');
    })})
    .then(function(sleep2) {
        console.log(3);
        return sleep(1000);
    })
    .catch(function(err) {
        console.log(err);
    })

// Promise.resolve
// Promise.reject
// Promise.all

// Cách khác nếu không có xử lý logic 

var promise = Promise.resolve('Thanh Cong');

promise
    .then(function(result) {
        console.log('result:', result);
    })


var promise2 = new Promise(function(resolve) {
    setTimeout(function() {
        resolve([1,2]);
    }, 3000)
})

var promise3 = new Promise(function(resolve) {
    setTimeout(function() {
        resolve([3,4]);
    },3000)
})

Promise.all([promise2, promise3])
// Promise.all cũng là 1 promise
// Trả về 1 mảng
    .then(function(result) {
        var result1 = result[0];
        var result2 = result[1];
        console.log(result1.concat(result2));
    })
