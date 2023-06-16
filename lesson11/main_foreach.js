var courses = [
   'Javascript',
   'PHP',
   'Ruby',
]

console.log(courses);

// 0
// 1
// 2
// 3
// 4
// 5
// forEach2

Array.prototype.testMethod = 1;
Array.prototype.testMethod2 = function () {

}
// for in duyệt qua phần tử mảng và kể cả
// duyệt qua element trong prototype
Array.prototype.forEach2 = function (callback) {
    //     if (typeof callback === 'function'){
    //     for (var i in  this) {
    //         console.log(i);
    //     }
    // }
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            console.log(index);
        }
    }
}
courses.forEach2(function(course, index) {
    console.log(index,course);
})


// Object vẫn tồn tại 
var user = {
    name: "PNV",
    age: 20,
};
Object.prototype.hello = 2;
console.log(user);
function tets(object) {
    // for (var i in  object) {
    //     console.log(i);
    // }
    for (var i in object) {
        if (object.hasOwnProperty(i)) {
            console.log(i);
        }
    }
}
tets(user);



