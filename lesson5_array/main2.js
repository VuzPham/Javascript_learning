/*
Làm việc với Array 

Key word: js array method 

1. ToString 
2. Join
3. Pop
4. Push
5. Shift
6. Unshift
9. splicing
8. Concat
9. Slicing

*/
var languages = [
    'Javascript',
    'PHP',
    'Ruby',
];   
console.log(languages.toString()); // Javascript,PHP,Ruby
console.log(languages.join(' - ')); // Javascript - PHP - Ruby

// console.log(languages.pop()); // xoa element cuoi mang va tra ve pt xoa
// console.log(languages.pop());
// console.log(languages.pop());
// console.log(languages.pop());
// console.log(languages);

console.log(languages.push('Dart',4)); // them dart va 4 vao cuoi // tra ve so phan tu 
console.log(languages);

console.log(languages.shift()); // xoa di phan tu dau mang va tra ve pt xoa

console.log(languages.unshift('C++')); // them vao dau  // tra ve so phan tu 
console.log(languages);

languages.splice(0,1,'C#'); // tu vi tri so 0 xoa 1 phan tu phia sau va them c# ngay so 0
console.log(languages);

var languages2= [ 
    'Hello word',
]
console.log(languages2.concat(languages)); //languages 2 them vao dau languages

console.log(languages.slice(0,1)); // cat element tu vi tri so 1 truoc vi tri so 2
console.log(languages.slice(0,3));

// Note Array 
// 100,2'
var courses = new Array(100,2);
// lenght = 100;
var courses = new Array(100);
