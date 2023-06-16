
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
Array.prototype.filter2 = function(callback) {
    var arr = [];
        if (typeof callback === 'function') {
            for (var i in this) {  
                if (this.hasOwnProperty(i)) { // vì for in sẽ lấy index lấy luôn index của properties
                                                // nên phải dùng hàm hasOwnProperty
                    if(callback(this[i], i)) {
                        arr.push(this[i]);
                    }
                    else 
                        continue;
                }
        }
        return arr;
    }
}
var course = courses.filter2(function(monHoc, index) {
    return monHoc.name === 'ReactJS';
})

console.log(course);