function mod() {

}

var sum = (a,b) => {
    return a + b;   
}
var sum = (a,b) => (a+b)
console.log(sum(3,4));

var output = (a,b) => ({a: a, b: b});
console.log(output(4,5));

var logger = (log1,log2) => (console.log(log1),console.log(log2));
logger('message','3131');

