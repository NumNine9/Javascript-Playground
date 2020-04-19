/**
 * ES6 adds a new obj method assign() that allows us to combine multiple sources into one target to create a single new object
 * its useful for creating a duplicate of an existing obj.
 */
let person = {
    name='jack',
    age=23,
    gender='male'
}
let student = {
    name='john',
    age=22,
    xp='2'
}
let newStudent= Object.assign({},person,student);


//you can also assign  a value to an obj property in the Object property in the Object.assign() statement.

let person =
{
    name='jack',
    age=23,
    gender='male'
}
let newPerson= Object.assign({},person,{name:'bob'});