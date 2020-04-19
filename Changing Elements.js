/**
 * once you have selected elements you want to work with you can change their attributes 
 * we can change the src attribute of an image
 * var arr=document.getElementByTagName('img');
 * for (var x=0;x<arr.length;x++)
 * {
 *      arr[x].src='demo.jpg';
 * 
 * }
 * 
 * CHANGING STYLE
 * 
 * the style of the HTML elements can also be changed using Javascript
 * all style attributes can be accessed
 * 
 * ADDING AND REMOVING ELEMENTS
 * 
 * elements.cloneNode() clones an element and returns the resulting node 
 * document.createTextNode(text)creates a new text node
 * document.createElement(element) creates a new element node
 * 
 * to remove an HTML element you must select the parent of the element and use the removeChild(node) method
 * to replace an HTML element use the element.replaceChild(newNode,oldNode)
 */

 var node=document.createTextNode('Some new text');  //this will create a new text node but will not appear in the document
                                                     //until you append it to an existing element with one of the following methods:
                                                     //element.appendChild(newNode)
                                                     //element.insertBefore(node1,node2)