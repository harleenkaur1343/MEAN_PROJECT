const mongoose = require('mongoose');

 // mongoose.connect('mongodb://0.0.0.0:27017/test')
 
mongoose.connect("mongodb://0.0.0.0:27017/test",{

 useNewUrlParser : true,
 useUnifiedTopology : true
}).then(()=>{
 console.log("Connected to database");
}).catch(error => {
 console.log("Unable to connect to database",error);
});

/*module.exports = {
    url : 'mongodb://0.0.0.0:27017/test'  //replaced localhost by 0.0.0.0
}*/
    