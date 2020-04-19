/**
 * 
 Arrsys are multiple values in a single variable

 example:     var courses = new Array ('HTML','CSS','JS');
 to access an array just refer to it index in square brackets

 another way is to declare the array and tell the number of elements it will store 
 example:     var course = new Array(3);
 JS arrays are dynamic, so you can declare an array and not ass any arguments with the Array() constructor

 THE LENGTH PROPERTY 

 JS arrays have useful built in properties and methods
 the arrays length can return a number of it's elements

 example:     var courses = new Array ('HTML','CSS','JS');
              document.write(course.length);
              
COMBINING ARRAYS 

JS's concat() method allows you to join arrays and create an entirely new array.
example:      var courses = new Array ('HTML','CSS','JS');
              var c1 = [1,2,3];
              var comp1=  c1.concat(courses);

ASSOCIATIVE ARRAYS

While many programming languages support arrays with named indexe(texts instead of numbers) JS doesn't
you can still use the named array syntax, which will produce an object. 

example:      var person = [];
              person['name']= 'John';
              person['age']= 23;
              document.write(person['age']);   //outputs 23

MATH OBJECT

the Math object allows you to perform mathematical tasks and includes several methods
E       ---> Eulers constant
LN2     ---> Natural log of the value 2
LN10    ---> Natural log of the value 10
LOG2    ---> The base 2 log of Eulers constant(E)
LOG10   ---> The base 10 log of Eulers constant(E)
PI      ---> returns the value of pi


example:      document.write(Math.PI);
 */

var n = prompt('Enter a number --> ');
var ans = Math.sqrt(n);
alert('The square root of '+n+' is '+ans);
