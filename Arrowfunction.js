//shorter syntax. The exact same functions can be expressed as an arrow function with only one line of code
//example
function funcName(params) {
    return params + 2;
  }

  //turns into this:
  var funcName = (params) => params + 2;
funcName(2); // output=> 4


(parameters) => { statements }
//if we have no parameters:
() => { statements }
//if you only have 1 parameter:
parameters => { statements }
//if you are returning an expression, you remove the brackets
parameters => expression

//example 2
var double = num => num * 2
double(2);

//an arrow function does not bind "this"
//example 3
//this is a normal function without arrow function
function Counter() {
    this.num = 0; //in this example "this" is bound globaly because it doesnt have the 'new' operator
    this.timer = setInterval(function add() {  // we added a set interval so every second it runs this.num
        this.num++; //num++ makes it so it adds to the number constantly
        console.log(this.num);
      }, 1000); //1000 = one second
  }
  var a = new Counter();
  console.log(a.num); //outputs 0

//now same function but with arrow function and new operator:
function Counter() {
  this.num = 0;
  this.timer = setInterval(() => { //we added an arrow function to get rid off the closure function "add" and shorten the syntax, doing the same thing.
    this.num++;
    console.log(this.num);
  }, 1000);
}
var b = new Counter(); // we added the new operator so "this" stops being binded globably, and instead being binded to the b variable(object).

//Conclusion
/* two main benefits of arrow functions:
Shorter Syntax
No binding of this */