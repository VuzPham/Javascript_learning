var divElement = document.querySelectorAll('div');
console.log(divElement);
divElement.forEach(function(value) {
    value.classList.add("box");
})
