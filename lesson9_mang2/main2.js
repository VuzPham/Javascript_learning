/*
    Array methods:
    map()
    reduce();
*/


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
    {
        id: 7,
        name: 'C#',
        coin: 90,
    },
]

// Mong muon them Khoa hoc truoc moc hoc va coin text 

// newCourses la mang moi thay doi van giu nguyen 7 element != value
// trong ngoac phai la function khong co thi undefined()


// return object 7 phan tu 
// function coursesHandler(course) {
//     console.log(course);
// }


// return 7 123
function coursesHandler(course) {
    return 123;
}
var newCourses = courses.map(coursesHandler);

// tham so 1, tham so 2 index, tham 3 so oldArray, tha, so 4 undefined
function coursesHandler(course, index, oldArray, underf) {
    return {
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: course.coin,
        cointext: `Gia: ${course.coin} dong`,
        index: index, // in ra index
        oldArray: oldArray,    // in ra mang cu~
        underf: underf, // 
    };
}
var newCourses = courses.map(coursesHandler);

console.log(newCourses);