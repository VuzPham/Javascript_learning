var headingNode = document.querySelector('h1');
var hrefNode = document.querySelector('a');

hrefNode.href = 'hello';
headingNode.title = 'heading';  
headingNode.id = 'identification';
headingNode.className = 'class'

headingNode.setAttribute('Form-1', 'Hoc JS tai F8');

// Nếu đã khai báo trên thì dùng cách này dc
console.log(headingNode.title);
// Còn chưa thì lấy ra phải dùng cách này
console.log(headingNode.getAttribute('id'));