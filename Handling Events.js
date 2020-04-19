/**
 * 
 * EVENTS
 * 
 * 
 * you can write JS code that runs when a specific event happens 
 * such as a click, mousing a mouse
 * when an event occurs on a target element a handler function is executed
 * 
 * onload and onunload events are triggered when the user enters of leaves the page
 * they are useful when performing actions before the page loads 
 * 
 * example:                 window.onload=function(){
 *                              some code 
 *                          }
 * 
 * the oncharge event is mostly used on textboxes. The event handler gets called when a text inside the textbox changes
 * and foucus is lost from the element
 * 
 * EVENT LISTENERS
 * 
 * the addEventListener() attaches an event handler without overwriting existing event handlers of the same type to one element
 * 
 * example:                 element.addEventListener(event,function,useCapture);
 * 
 * the first parameter is the event type 
 * the second parameter is the function we want to call
 * the third is the Boolean value specifying whether to use the event bubbling oe event capturing  
 */

 Element.addEventListener("click", myFunction);
 Element.addEventListener("mouseovere",myFunction);
 function myFunction(){
     alert('Hello World')

 }

 var btn = document.getElementById('demo');   //this event handler removes itself after being executed
 btn.addEventListener("click",myFunction);
 function myFunction()
 {
     btn.removeEventListener("click",myFunction);
 }
 