
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

var i = 0;
var totalCoin = courses.reduce(function(accumulator, currentValue) {
    i++;
    //console.log(i, accumulator,currentValue);
    return accumulator + currentValue.coin;
});

/*  khi khong co Initial thi lay Object dau
    tien lam accumulator 
    va Object thu 2 lam currentValue 
*/


// 
var numbers = [100, 200, 220, 200, 480];

var totalCoin = numbers.reduce(function (temp, current) {
        return temp + current;
}, )
//console.log(totalCoin);


// Flat - "Làm phẳng" mảng từ Depth array - "Mảng sâu"
var depthArray = [1,2 ,[3,4], 5,6,[7,8,9]];

var flatArray = depthArray.reduce(function(flatOutput, depthItem) {
        return flatOutput.concat(depthItem);
}, []);

console.log(flatArray);


// Lấy ra các khóa học đưa vào 1 mảng mới

var topics = [{
        topic: "Front-end",
        courses: [
            {
                id: 1,
                title: "HTML, CSS",
            },
            {
                id: 2,
                title: "Javascript",
            }
        ]
    },
    {
        topic: "Back-end",
        courses: [
            {
                id: 1,
                title: "PHP",
            },
            {
                id: 2,
                title: "NodeJS",
            }
        ]
    },
]

var newCourses = topics.reduce(function (course,topic) {
        return course.concat(topic.courses);
},[])

console.log(newCourses);

var html = newCourses.map(function(course) {
    return `
        <div>
            <h1>ID:${course.id}<h1>
            <p> ${course.title}<p>
        <div>    
    `;
});
console.log(html.join(' - '));