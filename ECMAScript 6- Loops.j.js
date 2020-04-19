/**
 * the for...in loop is intended for iterating over the enumerable keys of an object.
 * for in loop should not be used to iterate over arrays  it might iterate in an arbitary order.
 */

let obj ={a:1,b:2,c:3,d:4};
for (let v in obj)
{
    console.log(v);
}

let list = ['x','y','z'];
for(let val of list)
{
    console.log(val);//creates a loop iterating over iterable objects 

}