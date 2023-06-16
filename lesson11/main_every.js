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

Array.prototype.myEvery = (function(cb) {
    if (typeof cb === 'function') {
        for (var index in this) {
            if (this.hasOwnProperty(index)) {
                if (!cb(this[index],index,this)){
                    return false; 
                }
            }
        }
        return true;
    }
})

var results = courses.myEvery(function(courses) {
        return courses.isFinish;
 })
console.log(results);
