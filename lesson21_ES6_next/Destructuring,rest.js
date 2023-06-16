var array = ['javascript', 'php', 'ruby'];
console.log(array[0]);
console.log(array[1]);


// Another way 
// Rest va Destructuring trong biến 
var [a,,c] = array;
console.log(a,c) //javascript ruby


var [a,b,c] = array;
console.log(a,b,c) //javascript php ruby

var [a, ...rest] = array;
console.log(a);
console.log(rest);

var object = {
    name: 'PHP',
    price: 1000,
    hours: 36,
    children: {
        name: 'React JS',
    }
}
console.log('=============================')

var {name,children, children: {name: child},...another} = object;
console.log(name);
console.log(children);
console.log(child);
console.log(another);


// Rest vaf Destructuring trong function
// function default
function logger(a,...param) {
    console.log(param); // 2,3,4,5,6,7,8
    console.log(arguments); // 1,2,3,4,5,6,7,8
}
logger(1,2,3,4,5,6,7,8);

// function object
function logger1({name,...rest}) {
    console.log(name,'logger1');
    console.log(rest,'logger1');
}

logger1({
    name: 'html',
    price: 100,
    getName() {
        return name;
    }
})

// function Array
function logger2([a,b,...rest]) {
    console.log(a,b,'logger2');
    console.log(rest,'logger2');
}

logger2([9,8,7,6,5,4,3,2,1]);