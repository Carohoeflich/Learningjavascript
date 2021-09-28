function externalFunction(outerVariable){  //the external function is the only function you can access to, when there is a closure aka another function inside
    const outer2 = 'This is a const inside the external funtion' //a const or let done inside a function makes it so you can only use it INSIDE said function, cant access it outside of it
    return function innerFunction(innerVariable){ //you use return to make another function inside which cant be accessed and only does its thing for the external function
        console.log('external variable: ' + outerVariable)
        console.log('inner variable: ' + innerVariable)
        console.log(outer2) // this is the only way to use the const inside the function
    }
}

const newFunction = externalFunction('This is the external function') //you need a new const to be able to call that external function, parentesis are for the outervariable
newFunction('This is the inner function'); //you call the const you made 


    // another example of a function inside of a function
/* function outerFunction(url){
    fetch(url).then(() => {
        console.log(url)
    })
}

const otherFunction = outerFunction('outside')
otherFunction('inside') */


//When you have a function defined inside of another function, that inner function has access to the variables and scope to the outer function even if the
// outer function finishes executing and those variables are no longer accessable outside that function.