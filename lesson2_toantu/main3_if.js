var a = 1;
var b = 2;

// var result = 'A' && 'B' && 'D';  result se bang d ket qua se lay ben phai
//var result = null && 'B' && 'D';  result se bang null  


var result = 'A' || null || 'B';  // gia tri la A doc value ben trai lay luon A ko them xet null va B
var result = null || 'A' || 'B'; // lay gia tri A ko them xet B
console.log(result); 

// if (a < b)
//     console.log('A < B');

// else
//     cosole.log('A>B');
