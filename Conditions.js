
    let x = 10;
    let y = 50;

    //If, else are conditions. If Something is correct it does whatever is in the brackets, if not, we write else for that, so it does what's 
    //inside the else brackets.

    if(x==y){  //conditions go in order, it will check if the first statement is true, if it is, it will ignore everything else.
        console.log("X and Y are they same")
    } else if(x > y ){ //if the first statement was false it will continue to check in order on this one.
        console.log("X is not > than Y")
    } else { //if the last one were also to be false, it will now check this one.
        console.log("X and Y are not the same!")
    }

    //switch example. normally when we have lots of data and if statements wouldnt cut it.

    let day;

    switch(new Date().getDay()){  //inside the switch new date().getday() gets us the number of the week.
        case 1:
            day = "Monday";
            break;
        case 2: 
            day = "Tuesday";
            break;
        case 3: 
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6: 
            day = "Saturday"
            break;
        case 0: 
            day = "Sunday"
            break;
        default: 
            day = "the limit doesn't exist!" //in case none of the cases(ha) were correct.
    }

    console.log("It is " + day);





// Theres: if, else, else if, and switch as conditional statements.
/*if to specify a block of code to be executed, if a specified condition is true
else to specify a block of code to be executed, if the same condition is false
else if to specify a new condition to test, if the first condition is false
switch to specify many alternative blocks of code to be executed */
    
//Logical Operators.
/* == equal to 
=== equal value and equal type 
!= not equal 
!== not equal value or not equal type 
> greater than 
< less than 
>= greater than or equal to 
<= less than or equal to 
&& and 
|| or 
! not  */

