var boxElement = document.querySelector(".box");

// add
// contains
// remove
// toggle : có thì bỏ không có thì thêm
// add class vào source html
boxElement.classList.add("box4");
console.log(boxElement.classList.value);
console.log(boxElement.classList);
setTimeout(() => {
    boxElement.classList.add('red');
},3000)

// kiem tra class blue có tồn tại ko
console.log(boxElement.classList.contains('blue')); // flase

setTimeout(() => {
    boxElement.classList.remove('red');
},6000)
// Toggle neu chua co thi them blue neu co thi xoa blue
setInterval(() => {
    boxElement.classList.toggle('blue'); 
},6000)