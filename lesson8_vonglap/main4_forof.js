// For /of loop

var languages = [
    'Javascript',
    'PHP',
    'Java'
];

for (var value of languages){
    console.log(value);
}
// 'Javascript',
// 'PHP',
// 'Java'

var languages = 'Javascript';
for (var key of languages) {
    console.log(key); //J a v a s c r i p t;
}


var user = {
    name: 'Pham Nguyen Vu',
    age: 20,
    email: 'phamnguyenvu287@gmail.com',
};

// ["name", "age", "email"]
console.log(Object.keys(user)); // tra ve mot mang cac keymang keys object

for (var key of Object.keys(user)){
    console.log(user[key]);
}

