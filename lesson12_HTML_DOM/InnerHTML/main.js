var headingNode = document.querySelector("h1")

console.log(headingNode);

// inner HTML, outer HMTL
// áp dụng lăn chuột tới đâu tải tới đó 
// Nghĩa là thay đổi Text Node trong element Node = 1 Text Node khác 

//Inner HTML
// seter
// trả về node element h2 
headingNode.innerHTML = '<h2 class = "box-1">Heading 2</h2>'

// geter
console.log(headingNode.innerText);  // headingNode
console.log(headingNode.innerHTML); // <h2 class="box-1">Heading 2</h2>


// Outer HTML
// ghi đè text node và xóa thẻ chủ
var headingNode3 = document.querySelector("h3")

// seter
headingNode3.outerHTML = '<span class = "box-4"> span 4 </span>'
// Vẫn còn giá trị trong bộ nhớ nhưng thực tế đã bị xóa
// geter
console.log(headingNode3.innerText);  // Heading 3
console.log(headingNode3);  //<h3 class = 'box-3'>Heading 3</h3>>
