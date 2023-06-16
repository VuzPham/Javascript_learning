var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 0,
    },
    {
        id: 2,
        name: 'HTML,CSS',
        coin: 0,
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 4,
    },
    {
        id: 4,
        name: 'PHP',
        coin: 0,
    },
    {
        id: 5,
        name: 'ReactJS',
        coin: 0,
    },
    {
        id: 6,
        name: 'ReactJS',
        coin: 10,
    },
]
Array.prototype.forEach2 = function (callback) {
    if (typeof callback === 'function'){
        for (var i in this) {
            if (this.hasOwnProperty(i)) {
                callback(this[i], i);
            }
        }
    
    }
}


courses.forEach2(function(course, index) {
    console.log(index,course);
})
