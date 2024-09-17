const mongoose=require('mongoose');

const serviceManagement=new mongoose.Schema({
   name:{
      type:String,
      required: true,
   },
   description:{
      type:String,
      required: true,
   },
   price:{
      type:Number,
      required: true,
   }
})

const Service = mongoose.model('Service',serviceManagement);

module.exports=Service;