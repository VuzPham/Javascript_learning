var boxElement = document.querySelector('.box');

console.log(boxElement.style);
console.log(typeof boxElement.style); // object
boxElement.style.width = '100px';
boxElement.style.height = '200px';
boxElement.style.backgroundColor = 'red';

// assign : gán, giả định
Object.assign(boxElement.style, {
    with: '200px',
    height: '100px',
    backgroundColor: 'green',
});