// empty elements of aray 

var courses = [
    'Javascript',
    'C++',
]
courses.length = 10;
console.log(courses); // empty x8 empty không phải kiểu dữ liệu 

for (var i = 0; i < courses.length; ++i) {
    console.log(courses[i]);
}
/*
Javascript
 C++
 undefined
 undefined
 undefined
 undefined
 undefined
 undefined
 undefined
 undefined
*/



// Javascript
//  C++
for (var index in courses) {
    console.log(courses[index]);
}
