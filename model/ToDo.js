const mongoose=require('mongoose');

const schema=mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    }
})
const Todo=mongoose.model('ToDo',schema);
module.exports=Todo