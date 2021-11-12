// inicio ; condicion ; paso
for (begin; condition; step) {
    // ... loop body ...
    // codigo donde realizara loop
}

for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
    console.log(i); // mostrará 0, luego 1 y al final 2
}

//begin executes once, and then it iterates: after each condition test and step are executed.
//El inicio solo se ejecuta una vez, luego verifica cada condicion, y al final ejecuta el paso.


//***********inline variable declaration******************* Declaracion de la variable en linea
for (let i = 0; i < 3; i++) { //its called inline variable because we declared it right inside the 'begin' in the for
  //se le llama variable en linea porque la declaramos justo en la parte del inicio del for.
    console.log(i); // 0, 1, 2
}
console.log(i); // error, no such variable
//esto muestra error porque no existe esa variable

//Whereas we could it this way:
//En vez podriamos escribirlo de esta manera:

let i = 0; //usa una variable existente, ya declarada,
for (i = 0; i < 3; i++) { // use an existing variable
    console.log(i); // 0, 1, 2
}

console.log(i); // 3, visible, because declared outside of the loop.
// muestra 3, porque fue declarada fuera del loop.

//***************** we can omit begin if we don’t need to do anything at the loop start****************
//Podemos omitir el inicio si no necesitamos nada al inicio del loop. Mientras declaremos la variable fuera de este for.

let i = 0; // we have i already declared and assigned
//Tenemos la variable declarada y un numero asignado.

for (; i < 3; i++) { // no need for "begin" . No necesitamos la parte del inicio.
  console.log( i ); // 0, 1, 2
}

// we can also remove the 'step' part
//Tambien podemos quitar la parte del paso.
let i = 0;

for (; i < 3;) {
  console.log( i++ ); // shows 0, 1 and 2
}
//this makes this loop for identical to a while (i < 3)
//esto hace que este for sea identico a un while (i < 3)

//we can actually remove everything, creating an infinite loop
//De hecho podemos quitar todo, creando un bucle infinito.
for (;;) { //2 semicolons must bet here, it represents the format of the Loop
    //Los 2 punto y coma deben de estar en el for para representar el formato del bucle.
    // repeats without limits
    // Se repite sin limite
  }

// ***************breaking the loop********************
//Rompiendo el bucle
let sum = 0;

while (true) {

  let value = +prompt("Enter a number", '');

  if (!value) break; //

  sum += value;

}
alert( 'Sum: ' + sum ); //keeps adding the numbers we enter, but if we dont enter anything since the beginnig it breaks
//The combination “infinite loop + break as needed” is great for situations when a loop’s condition must be checked not in the beginning or end of the loop, but in the middle or even in several places of its body.

//Sigue sumando numeros que le agreguemos, pero cuando no le entregamos nada se cierra el bucle, dandote el resultado.
//La combinacion del bucle infinito y un cierre donde se necesita, es una buena combinacion para cuando la condicion no debe ser checada al inicio ni al final del bucle, si no en el medio o en diferentes partes del body.


// **********continue to next iteration**************
//Continuar a la siguiente iteracion
//The continue directive is a “lighter version” of break. It doesn’t stop the whole loop. Instead, it stops the current iteration and forces the loop to start a new one (if the condition allows).
//La continuacion es una version mas ligera de un cierre. No detiene todo el bucle. En vez, detiene la iteracion actual y fuerza al bucle a iniciar de nuevo (Si la condicion inicial lo permite.)
for (let i = 0; i < 10; i++) {

  // if true, skip the remaining part of the body
  // Si es verdadero, se salta esta parte del cuerpo.
  if (i % 2 == 0) continue;

  alert(i); // shows 1, then 3, 5, 7, 9 . The alert is only called for odd values
  //El alert muestra 1, luego 3, 5, 7, y 9. Porque solo esta llamando a numeros impares.
}
//The continue directive helps decrease nesting
//La continuacion ayuda a que tengamos menos nesting.
for (let i = 0; i < 10; i++) {

  if (i % 2) {
    alert( i ); //shows 1, then 3, 5, 7, 9 . The alert is only called for odd values
    //El alert muestra 1, luego 3, 5, 7, y 9. Porque solo esta llamando a numeros impares.
  }

}

// *************summary**********
// while – The condition is checked before each iteration.
// do..while – The condition is checked after each iteration.
// for (;;) – The condition is checked before each iteration, additional settings available.

//En resumen:
//while - La condicion es checada antes de cada iteracion.
//do..while - La condicion es checada despues de cada iteracion.
// for (;;) - La condicion es checada antes de cada iteracion, pero se le puede agregar diferente codigo.