function Course(name, price) {
    this.name = name;
    this.price = price;
    this.getname = function(){
        return this.name;
    }
}

// class Course {
//     constructor(name,price) {
//         this.name = name;
//         this.price = price;
//     }
//     getname() {
//         return this.name;
//     }
// }

const phpCouse = new Course('PHP','3000');
const javaScript = new Course('Javascript','4000'); 
console.log(phpCouse.getname());
console.log(phpCouse);
console.log(javaScript);


