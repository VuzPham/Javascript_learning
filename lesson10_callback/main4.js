
Array.prototype.map2 = function(callback) {
    var arrLength = this.length;
    var arr = [];
    for (var i = 0; i < arrLength; i++){
        callback(this[i], i);
    }   
}

var courses = [
    'Javascript',
    'PHP',
    'Ruby',
];

// function cb (course, index) {
//     console.log(index, course);
// }

//courses.map2(cb);

courses.map2(function(course,index) {
    console.log(index,course);
});