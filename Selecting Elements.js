/**
 * SELECTING ELEMENTS
 * 
 * all HTML elements are objects 
 * every obj has properties and methods 
 * the Document object has a methods that allow you to selct the desired HTML element
 * 
 * 3 most used:
 * --> documnet.getElementById(id)
 * --> documnet.getElementByClassName(name)
 * --> documnet.getElementByTagName(name)
 * 
 * example:      var elem = document.getElementById('demo');
 *               elem.innerHTML = 'Hello World';
 * 
 * getElementsByClassName() method returns a collection of all elements in the document with specified class name
 * if our HTML page contained 3 elements with class='demo' the following code would return all those arrays 
 * example:      var arr = document.getElementByClassName('demo');
 *               arr[1].innerHTML = 'Hi';
 * 
 * getElementsByTagName('p');
 */

var arr= document.getElementsByTagName('p');
for(i=0;i<arr.length;i++)
{
    arr[i].innerHTML = 'Hi there'
}