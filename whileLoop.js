while (condition) {
    // code
    // so-called "loop body"
  }

  let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  console.log(i);
  i++;
}

//a shorter way to write while (i != 0) is while (i)

let i = 3;
while (i) { // when i becomes 0, the condition becomes falsy, and the loop stops
  alert( i );
  i--;
}

//If the loop body has a single statement, we can omit the curly braces
let i = 3;
while (i) alert(i--); //shows 2