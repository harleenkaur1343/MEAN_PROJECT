const express = require('express');
const Student = require('../app/models/students');
//creating a new express router 
const router = new express.Router();

router.get('/api/students', async (req,res)=>{

    try{

        // get the data of all students '
        const students = await Student.find();
        res.status(200).send(students);
    }catch(error)
    {
        res.status(500).send(error);
    }
});

    
/*router.delete('/api/students/:student_id', function (req,res){

    Student.remove({
        _id : req.params.student_id}, function(err,bear){
            if(err)
            res.send(err);
            res.json({message : 'Successfully deleted'});
        });

});*/


    


module.exports = router;