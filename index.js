//adding the express server
const express=require('express');
const port=8000;

const app=express();

app.listen(port,function(err){
    if(err){
        console.log("error in loading the function");
        return;
    }
    console.log("Server started successfully")
})