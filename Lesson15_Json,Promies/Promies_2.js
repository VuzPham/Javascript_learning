// Call back hell
// Pyramid of doom

// Lý thuyết 
// 1. new Promise
// 2. Executor


// Trạng thái 
// 1. Pendding // ko resolve, reject 
// 2. Fulfilled // resolve
// 3. Rejected  // reject
// object contructor 
var promise = new Promise(
    // Executor 
    function(resolve, reject) {
        // Logic 
        // Thành công: resolve()
        // Thất bại: reject()
        resolve([
            {
                id: 1,
                name: 'Javascript',
            },
            {
                id: 2,
                name: 'PHP'
            }
        ]);
        reject('coloi')
    }
);

promise
    .then(function(course) {
        console.log(course);
    })
    .catch(function(error) {
        console.log(error);
    })
    .finally(function() {
        console.log('Done!');
    })