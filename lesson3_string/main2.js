// Lam viec voi chuoi 

var myString = 'Hoc JS tai F8 F8 F8!';
var mString = '     Hoc JS tai F8 F8 F8!        ';
// Keyword: Javascript string methods

//1. Length
console.log(myString.length); // 20

//2. find index
console.log(myString.indexOf('F',12)) // 14 //None = -1; //12 la vi tri sau F(1) de tim vi tri F(2)
console.log(myString.search('F')); //11
console.log(myString.lastIndexOf('F')); // 17

//3. Cut string
console.log(myString.slice(11,20)); //F8 F8 F8!
console.log(myString.slice(0));//Hoc JS tai F8 F8 F8!
console.log(myString.slice(-3,-1));//F8!

//4. Replace
console.log(myString.replace('F8', 'FUFU8'));  // chi thay duoc 1 chu F8
console.log(myString.replace(/F8/g, 'FUFU8'));  // thay duoc nhieu chu F8 bang bieu thuc chinh quy

//5. Convert to upper casse
console.log(myString.toUpperCase());

//6. Convert to lower case
console.log(myString.toLowerCase());

//7. Trim
console.log(mString);
console.log(mString.trim()); // chuan hoa chuoi

//8. Split
var languages = 'Javascript, PHP, ruby';
// diem chung la dau phay tach lam array
console.log(languages.split(',')); 

var lan = 'Javascript';
console.log (lan.split(''));

//9. Get a character by index
console.log(lan.charAt(5)); 
console.log(lan.charAt(10)); // Neu khong co thi la chuoi rong 
// another 
console.log(lan[1]);