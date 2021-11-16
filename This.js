var person = {
    first: 'John',
    last: 'Smith', 
    full: function() {
      console.log(this.first + ' ' + this.last); // <= this is the reason
      //"this" nos ayuda a usar los parametros que usamos dentro de esa misma funcion.
    }
  };
  person.full(); // this outputs: John Smith. Because it's attached to the variable but you're directing it to the specific statement.
  //Muestra John Smith porque la dirigimos a la funcion full especificamente que esta dentro de la variable.

//another example
//otro ejemplo
  var person = {
    first: 'John',
    last: 'Smith',  
    full: function() {
      console.log(this); // <= this is the reason
    }
  };
  person.full(); //while this outputs ALL the variable, because it attached this to the whole object(variable)
  //Aqui nos muetras todas las variables porque le dijimos que hiciera console.log al "this", lo cual usa todo lo que esta dentro de la variable.


  //Example of nested objects
  //Ejemplo de hacer nidos en los objetos. Pondremos una variable dentro de otra variable
  var person = {
    first: 'John',
    last: 'Smith',
    full: function() {
      console.log(this.first + ' ' + this.last);
    },
    personTwo: {
      first: 'Allison',
      last: 'Jones',
      full: function() {
        console.log(this.first + ' ' + this.last);
      }
    }
  };

    person.full(); // outputs => 'John Smith'
    //sale John Smith

    person.personTwo.full(); // outputs => 'Allison Jones'
    //Sale Allison Jones.


    //Call Bind and Apply
    //Podemos llamar al enlaze de "this" y aplicarlo.

    function add(c, d) {
        console.log(this.a + this.b + c + d);
      }
      add(3,4); // outputs => NaN (not a number). because we dont have a and b defined.
      //sale NaN, osea que no es un numero, porque no tenemos especificado que es a y b.

    //in this other example:
    //En este otro ejemplo:
    function add(c, d) {
        console.log(this.a + this.b + c + d);
      }
      var ten = {a: 1, b: 2}; //we created a variable telling what the values of a and b are.
      //Creamos una variable diciendo que es a y b.
      add.call(ten, 3, 4);  // outputs => 10  | Sale 10
      add.apply(ten, [3,4]); // outputs => 10 | Sale 10
      //Call is used when we have multiple parameters to output
      //apply is when we only have 2
      //bind() is useful when we don’t know all of our arguments up front

      //Call es usado cuando tenemos diferente parametros a sacar
      //apply es cuando solo tenemos 2 parametros
      //bind() es para cuando no sabemos cuantos parametros tenemos.

      //Ejemplo de bind
      var small = {
        a: 1,
        go: function(b,c,d){
          console.log(this.a+b+c+d);
        }
      }
      var large = {
        a: 100
      }

      small.go(2,3,4); // outputs => 10 | Sale 10
      small.go.call(large,2,3,4); // outputs => 109 | Sale 109
      //if we dont know all 3 arguments left we use bind.
      //Si no tenemos los 3 argumetos entonces se usa bind().
      var bindTest = small.go.bind(large,2);
      bindTest(3,4); // outputs => 109. The same, as before because it saved the last two parameters in the var.
      //Sale 109. Lo mismo que antes, porque guardo las ultimas dos variables.