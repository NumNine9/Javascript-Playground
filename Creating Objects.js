function person()
{
    this.name=name;
    this.age=age;
    this.favColor=favColor;
}
var p1 = new person('John',42,'green')
var p2 = new person('Sam',23,'red')

document.write(p1.age)  //outputs 42
document.write(p2.name) //outputs Sam