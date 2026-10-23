let num = Number(prompt("Enter a number:"));
  console.log("Exercise 5: Multiplication Table for " + num);

  for (let i = 1; i <= 12; i++) {
    console.log(num + " x " + i + " = " + (num * i));
  }