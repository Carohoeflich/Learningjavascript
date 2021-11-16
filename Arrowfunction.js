//shorter syntax. The exact same functions can be expressed as an arrow function with only one line of code. Example:
//El codigo es mas corto. Las mismas funciones pueden ser expresadas con la funcion de la flecha => y seria una linea de codigo. Ejemplo:
function funcName(params) {
    return params + 2;
  }

  //turns into this:
  //Se convierte en esto
  var funcName = (params) => params + 2;
funcName(2); // output 4
//Sale 4


(parameters) => { statements }
//if we have no parameters:
//si no tenemos parametros:
() => { statements }
//if you only have 1 parameter:
//Si solo tienes un parametro:
parameters => { statements }
//if you are returning an expression, you remove the brackets
//si quieres que regrese una expresion, quitas los {} por completo
parameters => expression

//example 2
//Ejemplo 2
var double = num => num * 2
double(2);

//an arrow function does not bind "this"
//una funcion flecha no puede tener enlazado el "this"
//example 3. Ejemplo 3
//this is a normal function without arrow function
//esto es una funcion normal sin la funcion de flecha
function Counter() {
    this.num = 0; //in this example "this" is bound globaly because it doesnt have the 'new' operator
      //en este ejemplo "this" esta enlazado globalmente porque no tiene el operador "new"
    this.timer = setInterval(function add() {  // we added a set interval so every second it runs this.num
      //añadimos setInternal para que cada segundo corra this.num
        this.num++; //num++ makes it so it adds to the number constantly
        //num++ hace que añada un numero constantemente cada vez que corre
        console.log(this.num);
      }, 1000); //1000 = one second
      //1000 es lo mismo que un segundo.
  }
  var a = new Counter();
  console.log(a.num); //outputs 0
  //sale 0

//now same function but with arrow function and new operator:
//ahora esa misma funcion pero con la funcion de flecha y el operador "new"
function Counter() {
  this.num = 0;
  this.timer = setInterval(() => { //we added an arrow function to get rid off the closure function "add" and shorten the syntax, doing the same thing.
    //añadimos la funcion de flecha para quitar el add y hacer mas corto el codigo. Hace lo mismo que la funcion normal del ejemplo de arriba.
    this.num++;
    console.log(this.num);
  }, 1000);
}
var b = new Counter(); // we added the new operator so "this" stops being binded globably, and instead being binded to the b variable(object).
//añadimos el operador "new" para que el "this" no este enlazado globalmente si no que este enlazado a la variable que acabamos de crear.

//Conclusion
/* two main benefits of arrow functions:
Shorter Syntax
No binding of this */

//Resumen
//Hay 2 beneficios de usar la funcion flecha: Codigo mas corto. Y el "this" no esta enlazado globalmente, si no, a nuestra variable.