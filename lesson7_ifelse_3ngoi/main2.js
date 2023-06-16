// Toan tu 3 ngoi - Ternary Operator
var course = {
    name: 'Javascript',
    coin: 0,
}

// if (course.coin > 0){
//     console.log(`${course.coin} Coins`);
// }
// else {
//     console.log('Miễn phí');
// }


var result = course.coin > 0 ? `${course.coin} Coins` : 'Miễn phí';
console.log(result);