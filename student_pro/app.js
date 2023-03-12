const readline = require('readline');
const Sequelize = require('sequelize');

// create a new sequelize instance with the database credentials
const sequelize = new Sequelize('students', 'postgres', 'KK0824', {
  host: 'localhost',
  dialect: 'postgres',
});

// define the Student model
const Student = sequelize.define('table_pro2', {
  name: Sequelize.STRING,
  age: Sequelize.INTEGER,
  gender: Sequelize.STRING,
  updated_at: Sequelize.DATE,
});

// set up readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// add a new student to the database
function addStudent() {
  rl.question('Enter student id: ', id => {
  rl.question('Enter student name: ', name => {
    rl.question('Enter student age: ', age => {
      rl.question('Enter student gender: ', gender => {
        Student.create({
            id,
          name,
          age: parseInt(age),
          gender,
        }).then(() => {
          console.log('Student added successfully');
          rl.close();
        });
      });
    });
    });
  });
}

// update an existing student in the database
function updateStudent() {
  rl.question('Enter student id: ', id => {
    rl.question('Enter updated student name: ', name => {
      rl.question('Enter updated student age: ', age => {
        rl.question('Enter updated student gender: ', gender => {
          Student.update({
            name,
            age: parseInt(age),
            gender,
            updated_at: new Date(),
          }, {
            where: {
              id: parseInt(id),
            },
          }).then(() => {
            console.log('Student updated successfully');
            rl.close();
          });
        });
      });
    });
  });
}

// display all students in the database
function displayStudents() {
  Student.findAll().then(students => {
    console.log('All students:');
    students.forEach(student => {
      console.log(`${student.name}, ${student.age}, ${student.gender}`);
    });
    rl.close();
  });
}

// ask the user what action to take
rl.question('Enter 1 to add student, 2 to update student, 3 to display all students: ', answer => {
  switch (answer) {
    case '1':
      addStudent();
      break;
    case '2':
      updateStudent();
      break;
    case '3':
      displayStudents();
      break;
    default:
      console.log('Invalid input');
      rl.close();
      break;
  }
});