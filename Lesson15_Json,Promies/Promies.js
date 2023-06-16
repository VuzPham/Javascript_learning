// Promies 

// - Sync: đồng bộ  (Synchronous)
// - Async: không đồng bộ (Asynchronous)
// 

// Asynch
//setTimeout, setInterval, fetch, XMLHtpRequest, đọc file,
// request animation frame

//Callback
setTimeout(function() {
    console.log(1);
},1000)
console.log(2);



setTimeout(function() {
    console.log('Dòng này sẽ in ra sau')
}, 0)
// setTimeout là tác vụ bất động bộ (async)

console.log('Dòng này sẽ in ra trước') // Đây là tác vụ đồng bộ (sync)



// // Synchronous example
// console.log("Start");
// for (let i = 0; i < 1000000000; i++) {
//    // Do nothing
// }
// console.log("End");

// // Asynchronous example
// console.log("Start");
// setTimeout(() => {
//    console.log("End");
// }, 0);