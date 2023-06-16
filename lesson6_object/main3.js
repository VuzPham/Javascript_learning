// Doi tuong Date

var date = new Date(); // 1 doi tuong oject
//var date = Date() // 1 string 
console.log(date);

var year = date.getFullYear();
console.log(year);
var month = date.getMonth() + 1;
console.log(month);
var day = date.getDate();
console.log(day);

console.log('Bay gio la ', date.getHours() ,'gio' ,date.getMinutes(), 'phut' , date.getSeconds(),'giay');
