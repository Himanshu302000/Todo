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
    Todo.find({},function(err,todo){
        if(err)
        {
            console.log("error detected");
            return;
        }
        return res.render('todo',{
            title:'ToDo app',
            todo:todo
        })
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
app.get('/delete-item',function(req,res){
    console.log(req.query.id)
    Todo.findByIdAndDelete(req.query.id,function(err){
        if(err){
            console.log("error occured");
            return;
        }
        return res.redirect('back')
    })
})

app.listen(port,function(err){
    if(err){
        console.log("error in loading the function");
        return;
    }
    console.log("Server started successfully")
})