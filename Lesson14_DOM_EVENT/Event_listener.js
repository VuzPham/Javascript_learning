// 1. Event Listener



// Dom Event
// 1. Xử lý nhiều việc khi 1 event xảy ra
var btn = document.getElementById('btn');

// setTimeout(function() {
//     btn.onclick = function (e) {
//         console.log('viec1');
//         console.log('viec2');
//         alert('viec3');
//     }
// }, 3000);


// 1. Xử lý nhiều việc khi 1 event xảy ra
// Event Listener
//2. Lắng nghe 
function viec1 () {
    console.log('viec 1');
}
btn.addEventListener('click', viec1)

btn.addEventListener('click', function(e) {
    console.log('viec 2');
});

// 2. Hủy bỏ lắng nghe
setTimeout(function() {
    btn.removeEventListener('click',viec1);
},3000)
