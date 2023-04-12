const express = require('express');
//importing the router
const studentRouter = require('./routers/exproutes');
const app = express();
const Student = require('./app/models/students');

//const mongoose = require('mongoose');
const port = 3000;

var db = require('./config/db');
console.log("connecting..",db);

//Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option.
app.use(express.json());
app.use(studentRouter);
//mongoose.connect(db.url);

app.get('/',(req, res)=> res.send('Express app running'));

/*function(err) {
        if (err)
        res.send(err);
        res.json({ message: 'student created!' });
        }*/
app.post('/api/students/send', function (req, res) {
    console.log("Processing request 1");
    var student = new Student(); // create a new instance of the student model
    student.name = req.body.name; // set the student name (comes from the request)
    console.log("Processing request 2");
    student.save();
    console.log("Processing request 3");
});

app.delete('/api/students/:student_id', function (req, res) {
    //var student = new Student(); // create a new instance of the student model

    try{
        Student.deleteOne({
    _id: req.params.student_id
    });
    }
    catch(err)
    {
        res.send(err);
    }

});
//defining route
/*app.get('/tproute', function (req, res) {
    res.send('This is routing for the application developed using Node and Express...')});


// sample api route
// grab the student model we just created
var Student = require('./app/models/students');
app.get('/api/students', function(req, res) {
// use mongoose to get all students in the database
Student.find().then(function(err, students) {
// if there is an error retrieving, send the error.
// nothing after res.send(err) will execute
if (err)
res.send(err);
res.json(students); // return all students in JSON format
});
});
// startup our app at http://localhost:3000
//app.listen(port, () ⇒ console.log(`Example app listening on port ${port}!`));*/

app.listen(port, ()=>console.log(`Example app listening on port ${port}!`));
