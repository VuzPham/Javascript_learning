// DOM events 

// 1. preventDefault: loại bỏ hành vi mặc định của trình duyệt

var aElements = document.links;
//HTNL[a,a]

for (var i = 0; i < aElements.length; i++) {
    aElements[i].onclick = function(e) {
        if (!e.target.href.startsWith('https://f8.edu.vn')) {
            e.preventDefault(); // Neu khac link f8 thi se ko truy cap duoc
        }
    }
}
// - Thẻ ul đang display: none 
// - Thẻ input sẽ hiển thị thẻ li khi focus (bấm vào nó)
// - Khi Thẻ li xuất hiện bấm vào con li sẽ bị display none vì ko focus vào input

// khắc phục sẽ getElement của thẻ ul khi mousedown vào 
// sẽ dùng preventDefault để loại bỏ hành vi mặc định

var ulElement = document.querySelector('ul');
ulElement.onmousedown = function (e) {
    e.preventDefault();
}
ulElement.onclick = 
function (e) {
    console.log(e.target);
}

// 2. stopPropagation : loại bỏ sự kiện nổi bọt
document.querySelector('div').onclick = 
    function () {
        console.log('div');
    }
document.querySelector('button').onclick = 
    function (e) {
        e.stopPropagation(); 
        console.log('click me!');
    }