const { Sequelize } = require('sequelize');
const readline = require("readline")
const bodyParser = require("body-parser")
  
  const sequelize = new Sequelize('st_table', 'postgres', 'KK0824', {
    host: 'localhost',
    dialect: 'postgres'
  });

 async function testConnection ()  {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

testConnection()

const express = require('express');
const app = express();
app.use(bodyParser.json());

app.get('/getstudents', (req, res) => {
  sequelize.query('SELECT * FROM Student_Details')
    .then(users => {
      res.json(users[0]);
    })
    .catch(error => {
      console.error(error);
    });
});

app.post('/addstudent', async (req, res) => {

        console.log("REQUEST : ",JSON.stringify(req.body))


        const sql = `INSERT INTO Student_Details (id, name, age, gender)
        values ('${req.body.roll}','${req.body.name}','${req.body.age}','${req.body.gender}');`;


        sequelize.query(sql)
        .then(users => {
          res.json("successfull added");
        })
        .catch(error => {
          console.error(error);
          res.status(500).json({ error: 'Something went wrong' });
        });


  });
  

  app.put('/updatestudent', async (req, res) => {

        console.log("REQUEST : ",JSON.stringify(req.body))


        const sql = `UPDATE Student_Details  SET  name = '${req.body.name}', age = '${req.body.age}', gender = '${req.body.gender}' WHERE id = ${req.body.id};`;


        sequelize.query(sql)
        .then(users => {
          res.json("successfully updated");
        })
        .catch(error => {
          console.error(error);
          res.status(500).json({ error: 'Something went wrong' });
        });

  });
  
  
app.get('/getstudent', (req, res) => {
    sequelize.query(`SELECT * FROM Student_Details where id = ${req.body.roll}`)
      .then(users => {
        res.json(users[0]);
      })
      .catch(error => {
        console.error(error);
      });
  });
  


app.listen(3000, () => {
  console.log('App listening on port 3000');
});