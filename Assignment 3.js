let name = prompt("Enter student name:");
let marks = prompt("Enter student marks:");

marks = Number(marks);

let grade = "";
if (marks >= 97 && marks <= 100) {
  grade = "A+";
} else if (marks >= 93 && marks <= 96) {
  grade = "A";
} else if (marks >= 90 && marks <= 92) {
  grade = "A-";
} else if (marks >= 87 && marks <= 89) {
  grade = "B+";
} else if (marks >= 83 && marks <= 86) {
  grade = "B";
} else if (marks >= 80 && marks <= 82) {
  grade = "B-";
} else if (marks >= 77 && marks <= 79) {
  grade = "C+";
} else if (marks >= 73 && marks <= 76) {
  grade = "C";
} else if (marks >= 70 && marks <= 72) {
  grade = "C-";
} else if (marks >= 67 && marks <= 69) {
  grade = "D+";
} else if (marks >= 65 && marks <= 66) {
  grade = "D";
} else {
  grade = "E";
}

console.log(name + " has scored " + grade);