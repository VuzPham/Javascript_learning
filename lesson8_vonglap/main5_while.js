// while loop

var i = 0;

while (i < 100) 
{
    console.log(i);
    i++;
}   

var myArray = [
    'Javascript',
    'PHP',
    'Ruby',
];

var i = 0;

while (i < myArray.length) {
    console.log(myArray[i]);
    i++;
}


// Note

var i = 0;
var isSuccess = false;

do {
    i++;
    console.log('Nạp thẻ lần' +i);

    // Thất bại
    if (false) {
        isSuccess  = true;
    }
} while (!isSuccess && i <= 3);