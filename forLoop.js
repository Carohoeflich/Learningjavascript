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