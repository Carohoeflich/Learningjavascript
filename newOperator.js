//operator New created and empty object that binds to our newly created object.
//El operador 'new' crea un objeto vacio que se enlaza a nuestro recien creado objeto

function Student(name, age) {
    this.name = name; this.age = age;
}

var first = new Student('Caro', 25);  //a new object is created and is bound to our first object (function Student)
//it adds a property on our object called '__proto__' .  "first.__proto__" will now point to student.prototype
//like the example first.age or first.name . points to the function Student and calls the information in the variable.

//un objeto 'new' es creado y se une a nuestro primer objeto ( funcion Student)
//añade una propiedad al objeto llamada '__proto__'. "first.__proto__" sera ahora a donde se redireccionara Student.prototype
// un ejemplo seria first.age o first.name. Direcciona a la funcion Student y llama a la informacion de la variable.

console.log(first.name);


//prototypes
//prototipos
 Student.prototype;

 var second = new Student('Logan' , 20); //the __proto__ property should have also been added to our second object, It should
 // point to the parent constructor
 // la propiedad __proto__ deberia tambien ser añadida a nuestro segundo objecto. Deberia direccionar al constructor padre.

 second.__proto__ === Student.prototype; // this outputs true | esto muestra true, osea que es verdadero.

 Student.prototype.constructor; // outputs: function Student(name, age) { // this.name = name; // this.age = age; // }
 //esto muestra: funcion Student(name, age) { this.name = name; this.age = age; }

 //if we vizualise it, when you use the new operator, you create a .prototype on it, but the prototype cretates a construct in return to the
 //new operator we made. so it creates a loop, where you can use variables on the .prototype but only the prototype can call back
 //to the operator we made.

 //Si lo visualizamos, cuando usamos el operador 'new', creamos un .prototipo en el, pero el prototipo crea un constructor que direcciona al operador 'new'.
 // Asi que crea un bucle, donde se pueden usar variables en el prototipo pero solo el prototipo las puede usar y llamar hacia el operador 'new' que creamos.

 //The prototype object is shared among all objects created with that constructor function. This means we can add functions and
 //properties to the prototype that all of our objects can use.

 //El prototipo es un objeto, y es compartido con todos los demas objetos que se crearon en esa funcion de constructor. Esto significa que podemos agregar funciones
 //y propiedades al prototipo para que todos nuestros objetos lo puedan usar.

 Student.prototype.sayInfo = function(){ console.log(this.name + ' is ' + this.age + ' years old'); }
 //Any student we create or have created now has access to this brand new .sayInfo function
 //Cualquier Student que creemos, o que se haya creado hasta ahora, tiene acceso a la 'new' funcion .sayInfo
 second.sayInfo(); // will output: Logan is 20 years old. | Mostrara que Logan tiene 20 años.

 //new student | Nuevo estudiante agregado y que todavia puede acceder a esa funcion
 var third = new Student('Tracy', 15);

 third.sayInfo(); // will output: Tracy is 15 years old | Mostrara Tracy tiene 15 años

 //conclusion:
 //With prototypes we can share the same pieces of code across hundreds, even thousands of objects quickly and effectively

 //Resumen:
 //Con prototipos (creados con el operador 'new') nosotros podemos compartir las mismas piezas de codigo con muchas variables rapido y efectivamente.