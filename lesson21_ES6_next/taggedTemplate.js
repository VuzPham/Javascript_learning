// Tagged template literals
function logger([first,...strings],...value){
    // console.log('First',first);
    // console.log('Strings',stirngs);
    // console.log('value',value);
    return value.reduce(
        (acc,crr) => [...acc, `<span>${crr}</span>`, strings.shift()]
    ,[first]).join();
}

var name = 'Javascript';
var web = 'f8';

const html = logger`Chào mừng đến với khóa học ${name} tại ${web}!`;

console.log(html);

