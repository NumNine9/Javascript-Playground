/**
 * The setInterval() method calls a function or evaluates an expression at specified intervals(in milliseconds)
 * it will continue evaluating until clearInterval is called or the window is closed.
 * the Date object allows you to work with dates 
 * a date consists of a year, month, a day, hour, minute, second, and milliseconds
 * using new Date(), create a new object with the current time.
 * example:      var d = new Date();
 * 
 * 
 * 
 * 
 * 
 * 
 */
function printTime()
{
    var d = new Date();
    var hrs= d.getHours();
    var mins=d.getMinutes();
    var secs=d.getSeconds();

    document.body.innerHTML= hrs':'+mins+':'+secs;
}
setInterval(printTime,1000);


