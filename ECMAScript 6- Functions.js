/**
 * prior to ES66  a JS function was defined like this
 */
function add(x,y)
{
    var sum=x+y;
    console.log(sum);

}

//for ECMAScript is different
const add= (x,y) =>
{
    let sum =x+y;
    console.log(sum);

}
//this new syntax is quite handy when you just need a simple function with one argument.
//you can skip typing function and return 
const x =() => alert('Hi!');
//this syntax is useful for inline functions

var arr= [2,4,3,7,8];
arr.array.forEach(function(el) {
    console.log(el*2);
});

//or it can be rewritten as

var arr= [2,4,3,7,8];
arr.array.forEach(v => {
    console.log(v*2);
});


