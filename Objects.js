/*
JS variables are containers for data values 
Objects are variables too but they contain many variables
key:value pairs
You caon access these properties in two ways 
    1-->objectName.proprtyName
    2-->objectName['propertyName]
JS built in length property is used to count the number of items in a character or string


*/
var person = {     //all these values are called properties
    name: 'John',
    age:31,
    height:178

};

var x=person.age;
var y= person[age];

var course = {name:'JS', lessons:41};
document.write(course.name.length); //outputs 2

