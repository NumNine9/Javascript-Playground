/***
 * to create aminations we need to change the properties of an element at small intervals of time 
 * we do this by using the setInterval() method which allows us to create a timer and 
 * call a function to change properties repeatedly at defined intervals  
 * example:                 var t=setInterval(move,500);
 * 
 */

var pos = 0;
var box = document.getElementById('box');
var t = setInterval(move,10);
function move()
{
    if (pos>=150)
    {
        clearInterval(t);
    }
    else
    {
        pos+=1;
        box.style.left=pos+'px';
    }
    
}