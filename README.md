Open the index.html file in a web browser.
The program will prompt you to enter the student's marks.
Enter a valid numeric value between 0 and 100.
The program will calculate and display the corresponding grade.
 if (isNaN(marks) || marks < 0 || marks > 100) {
        document.getElementById('resultBox').innerText = 'Invalid input. Please enter a number between 0 and 100.';
      } else {
        let grade;
        if (marks > 79) {
          grade = 'A';
        } else if (marks >= 60 && marks <= 79) {
          grade = 'B';
        } else if (marks >= 50 && marks <= 59) {
          grade = 'C';
        } else if (marks >= 40 && marks <= 49) {
          grade = 'D';
        } else {
          grade = 'E';
        }
      }
The program performs input validation to ensure that the entered value is a valid number between 0 and 100.
If an invalid input is detected, the user will be alerted, and the program will not proceed with grade calculation.
