/*
switch (expression) {
    case n1:
        statements
        break;
    case n2:
        statements
        break;
    default:
        statements
}


this is what you use to test for multiple conditions 
switch expressions are evaluated once .the values are compared with the values of each case
if there is a match that block is executed.
*/

var day = 2;
switch (day)
{
    case 1:
        document.write('Monday');
        break;
    case 2:
        document.write('Tuesday');
        break;
    case 3:
        document.write('Wednesday');
        break;
}
//it will output Tuesday
//the default keyword will be used if result is not found