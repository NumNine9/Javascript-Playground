/**
 * in ES6 there are 3 ways to declare a variable
 * 
 */

var a=10;
const b='hello';
let c=true;
 
//the declaration depends an the necessary scope

// var & let 

/**
 * var keyword allows you to define a variable globally or locally  to an  entire function.
 * let allows you to declare variables that are limited in scope to the block of code
 */
 if (true)
 {
     let name='Jack';
 }
 alert(name);//generates an error


 //The differences var & let:
 function varTest(){
     var x = 1;
     if(true){
         var x =2;
         console.log(x);//2
     }
     console.log(x);//2
 }
 function letTest(){
    let x = 1;
    if(true){2
        let x =2;
        console.log(x);//2
    }
    console.log(x);//1
}

varTest();
letTest();

//one of the best udes for let is in loops

for (let i = o;i<3;i++)
{
    document.write(i);
}
// const

/**
 * the const variables must have the same scope as variables declared using let. The difference is that the const variables are immutable 
 */
