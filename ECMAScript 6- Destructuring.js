/* the destructuring syntax is the same as in JS that makes it possible to unpack
from arrays or properties from objects, into a distinct variable.
ES6 has added shorthand for destructuring arrays.

*/
///HOW TO UNPACK THE ELEMENTS OF AN ARRAY INTO A DISTINCT VARIABLE

let arr =['1','2','3','4'];
let [one,two,three] = arr
console.log(one);///1
console.log(two);///2
console.log(three); ///3

//we can also use destructure an array returned by a function

let a =() => {
    return [1,2,3];
};
let[one, ,two] = a();
//the destructuring syntax also simplifies assignment and swapping values

let a,b,c=4,d=8;
[a,b=6]=[2];  //a = 2, b=6
[c,d]=[d,c];   //c=8   , d=4



///OBJECT DESTRUCTURING 

//it unpacks properties into distinct variables

let obj = {h:100, s:true};
let{h,s}= obj;
console.log(h);//100
console.log(s); //true

//we can assign without declaration but there are some syntax requirements

let a,b; ({a,b} = {a:'hello', b:'Jack'});  //the () with the (:) are mandatory 
console.log(a+b); // Hello Jack


let {a,b} = {a:'hello', b:'Jack'};  //the () with the (:) are not mandatory 
console.log(a+b); 

//you can also assign default values to variables in case the values unpacked are undefined

var obj = {id:42, name:'jack'};
let {id=10, age=20} = obj;
console.log(id);//42
console.log(age);//20