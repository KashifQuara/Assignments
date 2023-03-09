const { Sequelize, DataTypes } = require('sequelize');

// Connect to the database
const sequelize = new Sequelize('postgres://postgres:KK0824@localhost:5432/postgres');

// Define the Student model
const Student = sequelize.define('Student', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { notEmpty: true }
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: { min: 0, max: 120, isInt: true }
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { isIn: [['Male', 'Female', 'Other']] }
  }
});

// Save a new student to the database
async function saveStudent(name, age, gender) {
  const student = await Student.create({ name, age, gender });
  console.log('Student saved successfully:', student.toJSON());
}

// Update an existing student in the database
async function updateStudent(identifier, name, age, gender) {
  const values = {};
  if (name) values.name = name;
  if (age) values.age = age;
  if (gender) values.gender = gender;

  const [numUpdated, updatedRows] = await Student.update(values, {
    where: { [Sequelize.Op.or]: [{ id: identifier }, { name: identifier }] }
  });
  console.log(`Updated ${numUpdated} students successfully!`);
}

// Display all records in the student table
async function displayStudents() {
  const students = await Student.findAll();
  console.table(students.map(student => student.toJSON()));
}

// Sync the model with the database and test the program
sequelize.sync().then(() => {
  console.log('Student model synced successfully!');
  saveStudent('Kashif', 20, 'Male');
  updateStudent('Kashif', 'Kashif Khan', 22, 'Male');
  displayStudents();
}).catch(err => {
  console.error('Unable to sync student model:', err);
});