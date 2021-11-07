for (begin; condition; step) {
    // ... loop body ...
}

for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
    console.log(i);
}

//begin executes once, and then it iterates: after each condition test and step are executed.


//***********inline variable declaration*******************
for (let i = 0; i < 3; i++) { //its called inline variable because we declared it right inside the 'begin' in the for
    console.log(i); // 0, 1, 2
}
console.log(i); // error, no such variable

//Whereas we could it this way:
let i = 0;

for (i = 0; i < 3; i++) { // use an existing variable
    console.log(i); // 0, 1, 2
}

console.log(i); // 3, visible, because declared outside of the loop

//***************** we can omit begin if we don’t need to do anything at the loop start****************

let i = 0; // we have i already declared and assigned

for (; i < 3; i++) { // no need for "begin"
  console.log( i ); // shows 0, 1, 2
}

// we can also remove the 'step' part
let i = 0;

for (; i < 3;) {
  console.log( i++ ); // shows 0, 1 and 2
}
//this makes this loop for identical to a while (i < 3)

//we can actually remove everything, creating an infinite loop
for (;;) { //2 semicolons must bet here, it represents the format of the Loop
    // repeats without limits
  }

// ***************breaking the loop********************
let sum = 0;

while (true) {

  let value = +prompt("Enter a number", '');

  if (!value) break; // (*)

  sum += value;

}
alert( 'Sum: ' + sum ); //keeps adding the numbers we enter, but if we dont enter anything since the beginnig it breaks
//The combination “infinite loop + break as needed” is great for situations when a loop’s condition must be checked not in the beginning or end of the loop, but in the middle or even in several places of its body.


// **********continue to next iteration**************
//The continue directive is a “lighter version” of break. It doesn’t stop the whole loop. Instead, it stops the current iteration and forces the loop to start a new one (if the condition allows).
for (let i = 0; i < 10; i++) {

  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue;

  alert(i); // shows 1, then 3, 5, 7, 9 . The alert is only called for odd values
}
//The continue directive helps decrease nesting
for (let i = 0; i < 10; i++) {

  if (i % 2) {
    alert( i ); //shows 1, then 3, 5, 7, 9 . The alert is only called for odd values
  }

}