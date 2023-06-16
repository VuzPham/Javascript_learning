
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
        coin: 20,
    },
    {
        id: 7,
        name: 'C#',
        coin: 10,
    },
    {
        id: 7,
        name: 'C#',
        coin: 10,
    },
]
Array.prototype.find2 = function(callback) {
    if (typeof callback === 'function') {
       for (var i = 0; i < this.length; i++) {
            if (callback(this[i],i)) {
                return this[i];
            }
            else{
                continue;
            } 
       } 
       return undefined;
    }
}
var course = courses.find2(function(monHoc, index) {
    return monHoc.name === 'ReactJS';
})

console.log(course);