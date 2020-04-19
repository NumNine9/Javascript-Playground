/*
Methods are functions that are stored as object properties
defining methods is done inside the contractor 
Use the following syntax to create to create a method
*/

/*methodName = function() 
{
    code lines
}

you can access an object method by using 'objectName.methodName()'
you can also define the fuunction outside the constructor function and associate it with the object.
*/

function person()
{
    this.name=name;
    this.age=age;
    this.changeName= function(name)
    {
        this.name=name;
    }

}
var p=new person('David',21);
p.changeName('John') //Now p.name is John