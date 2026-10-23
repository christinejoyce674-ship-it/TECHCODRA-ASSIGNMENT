 let num1 = Number(prompt("Enter first number:"));
  let operator = prompt("Enter operator (+, -, *, /):");
  let num2 = Number(prompt("Enter second number:"));
  let result;

  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    if (num2 === 0) {
      alert("Error: Cannot divide by zero.");
     
    }
    result = num1 / num2;
  } else {
    alert("Invalid operator. Please use +, -, *, or /");
   
  }

  alert("Result: " + result);