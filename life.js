function add(num1,num2)
{
    return num1+num2;
}
function substract(num1,num2)
{
    return num1-num2;
}
function multiply(num1,num2)
{
    return num1*num2;
}
function divide(num1,num2)
{
    return num1/num2;
}

let userInput= window.prompt("Select the operation you would like to perform \n 1. Addition (+) \n 2. Substraction (-)\n 3. Multiplication (*) \n 4. Division (/)")

if (userInput == "1")
{
    let firstnum= window.prompt("Enter first number");
    let secondnum =window.prompt("Enter second number");
    let sum = add(firstnum,secondnum);
    document.write("The sum of the two numbers is: "+sum);
    
}
else if (userInput == "2")
{ 
    let firstnum= window.prompt("Enter first number");
    let secondnum =window.prompt("Enter second number");
    let difference = substract(firstnum,secondnum);
    document.write("The difference of the two numbers is: "+difference);

}
else if (userInput == "3")
{ 
    let firstnum= window.prompt("Enter first number");
    let secondnum =window.prompt("Enter second number");
    let product = multiply(firstnum,secondnum);
    document.write("The product of the two numbers is:"+product);

}
else if (userInput == "4")
{ 
    let firstnum= window.prompt("Enter first number");
    let secondnum =window.prompt("Enter second number");
    let division = divide(firstnum,secondnum);
    document.write("The result of the division of the two numbers is:"+division);

}
else{
    document.write("Valid input! Try again")
}