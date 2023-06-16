// DOM Event

// 1. Input / Select

var inputElement = document.querySelector('input[type="text"]');
//console.log(inputElement);

// onchange thay đổi khi blur ra ngoài 
// oninput gõ tới đâu thay đổi tới đó

// inputElement.oninput = function(e) { // input event
//     console.log(e.target.value);
// }

var inputElement2 = document.querySelector('input[type="checkbox"]');
inputElement2.onchange = function(e) { // event
    console.log(e.target.checked);
}

var selectElement = document.querySelector('select');
selectElement.onchange = function(e) {
    console.log(e.target.value);
}


// 2. Key up/ Down
/* keydown: được gọi khi bạn nhấn xuống một key
 keyup: được gọi khi bạn nhả key đó ra
 keypress: được gọi khi bạn nhấn và giữ key
 */
inputElement.onkeyup = function(e) {
    console.log(e.target.value); // keyboard event
}
// which la ma code phim vua nhan


document.onkeyup = function(e) {
    switch(e.which) {
        case 27:
            console.log('Exit');
        break;
    }
}