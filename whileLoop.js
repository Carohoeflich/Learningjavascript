while (condition) {
    // codigo, que tambien se le llama bucle del body
    // so-called "loop body"
  }

  let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  console.log(i);//muestra 0, luego 1 y al final 2.
  i++;
}

//a shorter way to write while (i != 0) is while (i)
//Una version mas corta de escribir while(i !=0) es: while(i)

let i = 3;
while (i) { // when i becomes 0, the condition becomes falsy, and the loop stops
  alert( i );//cuando i se convierta en 0 entonces la condicion se vuelve falsa y ahi se detiene el bucle.
  i--;
}

//If the loop body has a single statement, we can omit the curly braces
//Si el codigo solo tiene una declaracion entonecs podemos omitir las {}

let i = 3;
while (i) alert(i--); //shows 2
//muestra 2.