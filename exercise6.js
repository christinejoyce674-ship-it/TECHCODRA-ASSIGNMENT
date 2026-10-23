  let score = Number(prompt("Enter your score (0-100):"));

  if (score >= 70 && score <= 100) {
    alert("Excellent");
  } else if (score >= 50 && score <= 69) {
    alert("Good");
  } else if (score >= 0 && score < 50) {
    alert("Needs Improvement");
  } else {
    alert("Invalid score. Please enter a value between 0 and 100.");
  }