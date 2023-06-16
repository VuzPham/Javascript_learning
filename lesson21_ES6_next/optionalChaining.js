/*  obj.val?.prop
    obj.val?.[Expr]
    obj.arr?.[index]
    obj.func?.(args)
*/

const obj = {
    name: 'alice',
    cat: {
        name: 'Dinah',
        cat2: {
            name: 'Dinah2',
            cat3: {
                name: 'Dinah3',
            }
        }
    }
};
if (obj.cat.cat2.cat3){
    console.log(obj.cat.cat2.cat3.name);
}
const obj2 = {
    // getName(value) {
    //     console.log(value);
    // }
}

obj2.getName?.(123);