/**
 * with ES6 you can now use computer property names.
 * using the square bracket [] notation
 * we can use an expression for a property name , including concatenating strings.
 * this is useful when cases where we want to create certain objects based on user data
 * 
 */

 //EXAMPLE 1
 let prop = 'name';
 let id = '1234';
 let mobile= '085483';

 let user = {
    [prop]:'Jack',
    [`user_${id}`]: `${mobile}`
 };


 //EXAMPLE 2

 var i=0;
 var a = {
    ['foo' + ++i]:i,
    ['foo' + ++i]:i,
    ['foo' + ++i]:i

 };

 //EXAMPLE 3

 var param= 'size';
 var config=
 {
     [param]:12,
     ['mobile'+ param.charAt(0).toUpperCase() +param.slice(1)]:4
 };
 console.log(config);
