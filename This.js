var person = {
    first: 'John',
    last: 'Smith',  
    full: function() {
      console.log(this.first + ' ' + this.last); // <= this is the reason
    }
  };
  person.full(); // this outputs: John Smith. Because it's attached to the variable but you're directing it to the specific statement.

//another example
  var person = {
    first: 'John',
    last: 'Smith',  
    full: function() {
      console.log(this); // <= this is the reason
    }
  };
  person.full(); //while this outputs ALL the variable, because it attached this to the whole object(variable)


  //Example of nested objects
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

    person.personTwo.full(); // outputs => 'Allison Jones'


    //Call Bind and Apply

    function add(c, d) {
        console.log(this.a + this.b + c + d);
      }
      add(3,4); // outputs => NaN (not a number). because we dont have a and b defined.

    //in this other example:
    function add(c, d) {
        console.log(this.a + this.b + c + d);
      }
      var ten = {a: 1, b: 2}; //we created a variable telling what the values of a and b are.
      add.call(ten, 3, 4);  // outputs => 10 
      add.apply(ten, [3,4]); // outputs => 10
      //Call is used when we have multiple parameters to output
      //apply is when we only have 2
      //bind() is useful when we don’t know all of our arguments up front

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

      small.go(2,3,4); // outputs => 10
      small.go.call(large,2,3,4); // outputs => 109
      //if we dont know all 3 arguments left we use bind.
      var bindTest = small.go.bind(large,2);
      bindTest(3,4); // outputs => 109. The same, as before because it saved the last two parameters in the var.