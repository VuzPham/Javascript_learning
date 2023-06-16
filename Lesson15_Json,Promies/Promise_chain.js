
var promise = new Promise(
    function(resolve, reject) {
        resolve();
})

promise
    .then(function() {
        return new Promise(function(resolve) {
            setTimeout(function(){
                resolve([1,2,3]);
            },3000);
        });
    })
    // Neu không return promise thì chảy thẳng xuống then dưới 
    // còn return Promise + setTimeOut wait 
    .then(function(data1) {
        console.log('dulieu',data1);
        return 2;
    })
    .then(function(data2) {
        console.log(data2);
        return 3;
    })
    .then(function(data3) {
        console.log(data3);
    })
    .finally(function() {
        console.log('Done');
    })

// ==========================================================
// Example

function sleep(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve,ms);
    });
}

sleep(1000)
    .then(function() {
        console.log(1);
        return sleep(1000);
    })
    .then(function() {
        console.log(2);
        return sleep(1000);
    })
    .then(function() {
        console.log(3);
        return sleep(1000);
    })
    .then(function() {
        console.log(4);
        return sleep(1000);
    })
    