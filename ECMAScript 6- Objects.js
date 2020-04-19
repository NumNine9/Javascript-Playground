/**
 * JS variables can be Object data types that contain many values called prperties.
 * An obj can also have properties that are function definition called methods for performing actions on the object.
 * ES6 introduces shorthand notations and computed property names that make declaring and using objs easier to understand
 * 
 * the 'new' definition shorthand doesnt require the colon(:) or function keyword, as in the grow function of the tree obj declaration
 */

 let tree={
     height=10,
     color='green',
     grow()
     {
        this.height+=2;
     }
 };
 tree.grow() ;
 console.log(tree.height); //12
 ////

 let car =
 {
     speed:40,
     accelerate()
     {
         this.speed+=10;

     }
 };
 car.accelerate();
 car.accelerate();
 console.log(car.speed)
