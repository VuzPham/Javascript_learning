//Enchaned Object 

// 1. Định nghĩa key: value cho object
// 2. Định nghĩa method cho object
// 3. Định nghĩa key cho object dưới value dạng biến

var name = 'Javascript'
var price = 1000

var course = {
//     name: name,
//     price: price,
    name,
    price,
    // getname: function() {
    //     return name;
    // }
    getname() {
        return name;
    }
}
console.log(course.getname());

var fieldName = 'name1';
var fieldPrice = 'price1';

const courses = {
    [fieldName]: 'java',
    [fieldPrice]: 3000,
}
console.log(courses);
