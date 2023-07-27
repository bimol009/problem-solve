// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function add(num1, num2) {
    return num1 + num2;
  }
  
  function subtract(num1, num2) {
    return num1 - num2;
  }
  
  function multiply(num1, num2) {
    return num1 * num2;
  }
  
  function divide(num1, num2) {
    if (num2 === 0) {
      return "Error: Division by zero";
    }
    return num1 / num2;
  }
  
 function calculate(num1,operator,num2){
    if(operator === "+"){
        return add(num1, num2)
    }
    else if(operator === "-"){
        return subtract(num1, num2)
    }
    if(operator === "*"){
        return multiply(num1, num2)
    }
    if(operator === "/"){
        return divide(num1, num2)
    }else{
        "invalid number"
    }
 }
  


  console.log(calculate(5,"+",3));
  
  