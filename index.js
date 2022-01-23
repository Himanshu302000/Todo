//adding the express server
const express=require('express');
const port=8000;

const path=require('path');

const app=express();
app.use(express.urlencoded({extended:true}))

const db=require('./config/mongoose');
const Todo = require('./model/ToDo');

const ToDo=require('./model/ToDo')

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.get('/',function(req,res){
    return res.render('todo',{
        title:'Todo app'
    })
})

app.post('/enter-data',function(req,res){

    console.log(req.body)
    Todo.create({
        description:req.body.description,
        category:req.body.category,
        date:req.body.date
    },function(err){
        if(err){
            console.log("error encountered");
            return;
        }
        res.redirect('back');
    })
})

app.listen(port,function(err){
    if(err){
        console.log("error in loading the function");
        return;
    }
    console.log("Server started successfully")
})