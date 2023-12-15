function calculateGrade() {
    // Prompt the user to input student marks
    const userInput = prompt('Enter the student marks (between 0 and 100):');
    
    // Parse the input as a number
    const marks = parseFloat(userInput);
  
    // Check if the input is a valid number
    if (isNaN(marks) || marks < 0 || marks > 100) {
      alert('Invalid input. Please enter a number between 0 and 100.');
      return;
    }
  
    // Determine the grade based on the specified criteria
    let grade;
    if (marks > 79) {
      grade = 'A';
    } else if (marks >= 60) {
      grade = 'B';
    } else if (marks >= 50) {
      grade = 'C';
    } else if (marks >= 40) {
      grade = 'D';
    } else {
      grade = 'E';
    }
  
    // Output the corresponding grade
    alert(`The student's grade is: ${grade}`);
  }
  
  // Call the function to calculate and display the grade
  calculateGrade();
  