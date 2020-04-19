/**
 * In ES6 we can put the default values right in the signature of the functions.
 * 
 */
function test(a,b= 3,c=42)
{
    return a+b+c;
}
console.log(test(5)); //50

////////////////////////

const test = (a,b=3,c=42) =>{
    return a+b+c;
}
console.log(test(5)); //50
