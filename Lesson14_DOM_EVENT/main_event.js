// DOM events
// 1. Attribute events
// 2. Assign event using the element node"""""

//Click

// sự kiện nổi bọt
/* <h1 onclick ="console.log(this)">
<span>Heading21</span>
</h1> */
// khi click thẻ con mà click nằm ở thẻ cha thì vẫn 
//xuất hiện cha 

var h1Elements = document.querySelectorAll("h1");

// khi chạy code xong thì vòng for sẽ chạy hết và biến h1Elemets lúc 
// này đã có giá trị i, khi thực hiện click sẽ chạy tới element đó

// còn nếu đặt console.log(h1Elements[i]); thì sẽ lỗi vì var lúc này toàn cục
// sẽ lên i = 3 nên result: underfined
for (var i = 0 ; i < h1Elements.length; i++){
    h1Elements[i].onclick = function(e){ // e: là event có thuộc tính truy cập
        console.log(e.target.innerHTML);
    }
}
// Target trả về đúng cái thằng đang click
h1Elements[1].onclick = function(e){
    console.log(e);
}