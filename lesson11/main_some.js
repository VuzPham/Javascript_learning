var courses = [
    {
        name: 'Javascript',
        coin: 680,
        isFinish: true,
    },
    {
        name: 'PHP',
        coin: 860,
        isFinish: true, 
    },
    {
        name: 'Ruby',
        coin: 980,
        isFinish: false,
    }
];

Array.prototype.mySome = (function(cb) {
    if (typeof cb === 'function') {
        for (var index in this) {
            if (this.hasOwnProperty(index)) {
                if (cb(this[index],index,this)){
                    return true;
                }
            }
        }
        return false;
    }
})

var results = courses.mySome(function(courses) {
        return courses.isFinish;
 })
console.log(results);
// tim xem co khoa hoc nao da hoan thanh chua
// var results = courses.some(function(courses) {
//     return courses.isFinish;
// })
// console.log(results);