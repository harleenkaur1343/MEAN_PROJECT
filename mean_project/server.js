const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const studentRouter = require('./routers/exproutes');
const Student = require('./app/models/students');
const db = require('./config/db');

const app = express();
//const mongoose = require('mongoose');
const port = 5000;
console.log("connecting..",db);

app.use(cors());
//Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option.
app.use(express.json());

app.use(studentRouter);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:false
}));


/*const corsOpts = {
    origin: '*',
  
    methods: [
      'GET',
      'POST',
    ],
  
    allowedHeaders: [
      'Content-Type',
    ],
  };*/
  
  //app.use(cors({origin : '*'}));
/* app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
 
app.options( '*' , cors()) */

/*app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});*/

//app.use(express.static(path.join(__dirname,'dist/Studentt')));

app.get('/',(req, res)=> res.send('Express app running'));

app.post('/api/students/send',(req,res)=>{

    console.log(req.body)
    let studt = new Student({
        name : req.body.name,
        place : req.body.place,
        country : req.body.country
    });

    studt.save().then((doc)=>{
        console.log(doc);
    }).catch((err)=>{
        console.log(err);
    })
});
app.put('/api/students/update',(req,res)=>{

    Student.findOneAndUpdate(
        {
            _id : req.body.id
        },
        {
            name : req.body.name,
            place : req.body.place,
            country : req.body.country
        },
        {
          new: true, // return updated doc
          runValidators: true // validate before update
        }
      )
        .then((doc) => {
          console.log(doc);
        })
        .catch((err) => {
          console.error(err);
        });
});
app.delete('/api/students/delete',(req,res)=>{
    
    console.log(req.body.id);
    //let  studt = new Student();
    Student.findOneAndDelete({
        _id : req.body.id
    })
    .then((response)=>{console.log(response);})
    .catch((err)=>{
        console.log(err);
    });
});
/*app.delete('/api/students/:student_id', function (req, res) {
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

});*/


app.listen(port, ()=>console.log(`Example app listening on port ${port}!`));
