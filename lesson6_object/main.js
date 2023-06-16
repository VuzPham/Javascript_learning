// Oject trong javascript 

var emailKey = 'email';
var myInfo = {
    name: 'VuPham',
    age: 20,
    school: 'Ho Chi Minh university of food industry',
    [emailKey]: 'phamnguyenvu287@gmail.com',
    getName: function () {
        return this.name;
    },
};

var myKey = 'age';
// myInfo.address = 'Nha Trang';
 myInfo['address'] = 225939204; 

delete myInfo.age;
console.log (myInfo);
//console.log(myInfo.getName());
//console.log (myInfo.name); // VuPham
//console.log (myInfo[myKey]); // 20

// function --> phương thức / method
// Others --> Thuộc tính / Property

console.log(Object.keys(myInfo)); // in key
console.log(Object.values(myInfo));
console.log(Object.entries(myInfo));