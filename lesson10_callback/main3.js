// Call back

// 1. Là hàm 
// 2. Truyền qua đối số
// 3. Được gọi lại trong hàm nhận đối số 

// this la courses
Array.prototype.map2 = function(callback) {
    var output = [];
    arrayLength = this .length;
    for (var i = 0; i < arrayLength; ++i) {
        var result = callback(this[i], i);
        output.push(result);
    }
    return output;
}

var courses = [
    'Javascript',
    'PHP',
    'Ruby',
];
var htmls = courses.map2(function (course, index) {
    return `<h2>${course}</h2>`;
});

console.log(htmls);
// var html = courses.map(function(course) {
//     return `<h2>${course}</h2>`
// });
// console.log(html.join(''));
