
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

// cách 1 
// Dễ Hiểu
// ko call back fucntion so quicly reduce();


//var totalCoin = 0;
// mang nen vao thang gia tri cua mang 
// for of sau do goi object value coin ra cong

/*
for (var course of courses) {
    totalCoin += course.coin;
}
console.log(totalCoin);
*/

//accumulator: bien luu tru
//CurentValue: gia tri hien tai
//CurrentIndex: chỉ mục 
// originArray và Courses là một thực thể


//  tu cộng
/*
accumuLator qua vòng lặp sẽ gán bằng 0
- Sau đó sẽ + với CurrentIndex và sẽ trả về return 
- sau khi trả về đồng thời sẽ lưu lại accumuLator
*/

/*
var i = 0
function coinHandler(accumulator , currentValue, currentIndex, originArray){
    i++;
    console.table({
        'Lượt chạy: ': i,
        'Biến tích trữ: ': accumulator,
        'Giá khóa học: ': currentValue.coin,
    });  
    return accumulator + currentValue.coin
}
var totalCoin = courses.reduce(coinHandler,0); // 0 la gia tru khoi tao (initial value)
*/

// Viet ngắn gọn
var totalCoin = courses.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue.coin;
}, 0)

console.log(totalCoin);
