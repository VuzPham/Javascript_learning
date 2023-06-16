
// Object constructor 
// xay dung doi tuong

function User(firstName, lastName, avatar ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar =  avatar;
    this.getName = function() {
        return `${this.firstName} ${this.lastName}`
    } 
};

User.prototype.classname = 'F8'
User.prototype.getClassName = function() {
    return this.classname;
};

var author = new User ('Son', 'Dang','avatar');
var user = new User ('vu', 'nguyen','coder');

author.title = 'Chia sẻ dạo tại F8';
user.comment = 'Liệu có khóa asp.net k ad';

console.log(author.constructor === User); //  true 
console.log(author);
console.log(user);
console.log(user.comment);
console.log(user.getName());

// var user = {
//     firstName: '',
//     lastName: '',
//     avatar:  '',
// }

// var author = {
//     firstName: '',
//     lastName: '',
//     avatar:  '',
// }

// Làm bài tại đây
function Student(firstName,lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Student.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}


//Ví dụ khi sử dụng
var student = new Student('Long', 'Bui');

console.log(student.firstName);  // 'Long'
console.log(student.lastName);  // 'Bui'
console.log(student.getFullName());  // 'Long Bui'