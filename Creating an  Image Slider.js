/**
 * FIRST PROJECT:    IMAGE SLIDER
 * 
 * Images will be changed using "Next" and "Prev" buttons 
 * 
 */



 /**
  * THE HTML
  *  <div>
     <button>Prev</button>
     <img id="slider" scr="http://www.sololearn.com/uploads/slider/1.jpg" width="200px" height="100px"/>
     <button onclick="next()">Next</button>
     </div>
  */


 var images=["w","e","r","t","y"];
 var num = 0;
 function next();
 {
    var slider= document.getElementById('slider');
    num++;
    if (num>= images.length){
        num=0;

    }
    slider.src=images.length[num];
 }