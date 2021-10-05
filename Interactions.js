//These are considered disruptive to the user and should be avoided unless you are using them to test.

//It shows a message and waits for the user to press “OK”.
alert("hello");

//The function prompt accepts two arguments:
result = prompt(title, [default]); //It shows a modal window with a text message, an input field for the visitor, and the buttons OK/Cancel.
//Example
let age = prompt('How old are you?', 100);
alert("You are " + age + " years old!");


//Confirm:
//Shows a message and waits for the user to press “OK” or “Cancel”. It returns true for OK and false for Cancel/Esc.
//Example
let isBoss = confirm("Are you the boss?");
alert( isBoss );