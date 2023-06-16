/*
    Arrray methods:
      forEach() - duyệt qua từng phần tử của mảng
    every() - kiểm tra các phần tử của mảng phải thỏa mảng một điều kiện nào
        đó và trả về kiểu boolean
    some() - ngược lại với every chỉ cần một phần tử đúng sẽ trả về
    boolean true
    find() - tìm kiếm một phần tử trong mảng
    filter() - tìm kiếm tất cac các phần tử thoa mảng trong mảng
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
]

courses.forEach(function(course, index) {
    console.log(index,course);
}); // function trong ngoac : call back 

// var isFree = courses.every(function(course, index) {
//         console.log(index);
//         return course.coin === 0;
// });
// duyet tat ca phan tu trong mang coin === 0 thi duyet tiep het mang => true
// con lại coin !== 0 thi false

// var isNotFree = courses.some(function(course, index) {
//     console.log(index);
//     return course.coin !== 0;
// });

// duyet neu co coin khong free thi tra ve true luon
// con lai coin === thi duyet tiep



//console.log(isFree);
//console.log(isNotFree);

// find luon tra ve 1 doi tuong
var course = courses.find(function(course, index) {
    return course.name === 'ReactJS';
});

console.log(course);

var listCourse = courses.filter(function(course, index) {
    return course.name === 'ReactJS';
});
console.log(listCourse);