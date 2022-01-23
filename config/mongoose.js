const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/ToDoApp');

const db=mongoose.connection;

db.on('error',console.error.bind(console,'error connecting to db'));  //checking if error exist

//check if it is successfully connected
db.once('open',function(){
    console.log('sucessfully connected to the database');
})