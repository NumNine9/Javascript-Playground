/*
the alert box offers 3 types of popup boxes :
1-->ALERT
2-->PROMPT
3-->CONFIRM

1)THE ALERT BOX
    its used when you want to ensure that info get through to the user
    the alert function takes a single parameter which is displayed in the popup box
2)PROMPT BOX
    used to have the user input a value before  entering a page.
    normally after a click the function will return a value or null
    it takes two parameters --the label --the default string
3)CONFIRM BOX
    used to to have user verify or accept something
    the box returns either true or false 

*/

alert('Do you really want to leave this page?');  //alert box example
var user = prompt('Please enter your username ');  //prompt box example
alert(user);

var result = confirm("Do you really want to leave this page?");
if (result==true)
{
    alert("Thanks for visiting");
}
else
{
    alert('Thanks for not going');
}
