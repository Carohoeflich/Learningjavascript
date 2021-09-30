//1
//when the plus operator is placed between a number and a boolean, the boolean is converted to a number.
3 + true == 4;
//basically
false == 0
true == 1
//with this in mind 3 + true equals 3 + 1 = 4

//2
//When the plus operator is placed between two booleans, the booleans are converted to numbers
true + false == 1;

//3
//When the plus operator is placed between to operands, and one is a string, it will convert the other
//number or boolean to a string and concatenate them
"4" + 8 == "48";

//4
//JavaScript will convert the boolean into a string
true + "4" == "true4";

//5
//Order of operations is important.
1 + 1 + '1' == "21" //JavaScript evaluates the first + before anything else: 1 + 1 equals 2. Then it converts it to string.

//6
'1' + 1 + 1 == "111";
//visualy
'1' + 1 + 1
   '11' + 1
       '111'

//7
-'69' + 69 == 0;
//The minus sign before '69' is a unary minus operator that will actually convert the string to a number and make it negative.
//Thus, our equation becomes -69 + 69 which equals 0