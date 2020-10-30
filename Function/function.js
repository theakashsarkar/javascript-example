/* FUNCTION
1. CREATE FUNCTION
2. CALL FUNCTION
*/
 
//create 
function fun()
{
    console.log('this is a function');
}
fun();
function greeting()
{
    var name = prompt("What's your name?");
    var result = 'Hello' + ' ' + name;
    console.log(result);
}
greeting();
// How do arguments work in function?
 // How add we add 2 number together in a function
 function sumNubber(num1, num2)
 {
     var result = num1 + num2;
     console.log(num1 + num2);
 }
 sumNubber(10, 20);