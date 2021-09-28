//operator New created and empty object that binds to our newly created object.

function Student(name, age) {
    this.name = name; this.age = age;
}

var first = new Student('Caro', 25);  //a new object is created and is bound to our first object (function student)
//it adds a property on our object called '__proto__' .  "first.__proto__" will now point to student.prototype
//like the example first.age or first.name . points to the funciont student and calls the information in the variable.

console.log(first.name);


//prototypes
 Student.prototype;

 var second = new Student('Logan' , 20); //the __proto__ property should have also been added to our second object, It should
 // point to the parent constructor

 second.__proto__ === Student.prototype; // this outputs true

 Student.prototype.constructor; // outputs: function Student(name, age) { // this.name = name; // this.age = age; // }

 //if we vizualise it, when you use the new operator, you create a .prototype on it, but the prototype cretates a construct in return to the
 //new operator we made. so it creates a loop, where you can use variables on the .prototype but only the prototype can call back
 //to the operator we made.

 //The prototype object is shared among all objects created with that constructor function. This means we can add functions and 
 //properties to the prototype that all of our objects can use.

 Student.prototype.sayInfo = function(){ console.log(this.name + ' is ' + this.age + ' years old'); }
 //Any student we create or have created now has access to this brand new .sayInfo function
 second.sayInfo(); // will output: Logan is 20 years old.

 //new student
 var third = new Student('Tracy', 15);

 third.sayInfo(); // will output: Tracy is 15 years old

 //conclusion:
 //With prototypes we can share the same pieces of code across hundreds, even thousands of objects quickly and effectively