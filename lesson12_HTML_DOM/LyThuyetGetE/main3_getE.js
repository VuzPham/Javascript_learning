/* 
1. element: ID, class, tag,
CSS selector, HTML collection 

2. attribute
3. Text
*/

// mot trang web 1 id theo W3C
// mot trang web co nhieu class
var headingNode = document.getElementById("heading");
// Viet sai tra ve NULL "HTML collection"



var paragraphNode = document.getElementsByClassName("paragraph")
// Viet sai tra ve empty Array "HTML collection"



var tagName = document.getElementsByTagName("h1");
// Viet sai tra ve empty Array "HTML collection"



var selectorCS = document.querySelector('.hello .dcm'); 
// vo class con dcm cua class hello

var selectorCSS = document.querySelector('.paragraph:nth-child(2)'); 

var allselectorCSS = document.querySelectorAll('.paragraph')
// tra ve NoteList nhu Array

// query selector in input
// var selectElement = form.querySelector('input[name="pwd"]');



console.log({
    element: headingNode,
    element2: paragraphNode, // tra ve Array
    element3: tagName, // tra ve array tag name
});
/*
HTMLcollection chỉ chứa các element node, trong khi NodeList chứa mọi loại node. 
HTMLcollection có thể truy cập bằng tên, id hoặc index, 
trong khi NodeList chỉ truy cập được qua index.
*/
console.log('====================');
console.log("===ID");console.log(headingNode);
console.log("===class");console.log( paragraphNode);console.log("headingNode");console.log(headingNode);
console.log("===tagName");console.log( tagName);
console.log("===selectorCSS");console.log(selectorCSS);
console.log("===allselectorCSS");console.log(allselectorCSS);
console.log("===Form"); console.log(document.forms);
console.log(document.forms['form-2']);
console.log(document.forms.test);
// anchors dung duoc thi class phai co atribute name 
console.log('anchors'); console.log(document.anchors);