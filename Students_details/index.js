const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const app=express();
app.use(cors());
app.use(express.json());

//route instance
const router=require('./routes/studentroute');
const { required } = require('joi');
const tokenMiddleware = require('./middleware/tokenMiddleWare');

mongoose.connect("mongodb+srv://vishvapachani67:w2Oq9iOWTvg5qZiX@node.0lrbb.mongodb.net/tables")

app.get('/',(req,res)=>
{
  res.send("welcome to node.js in public")
})
//private access
app.get('/index',tokenMiddleware,(req,res)=>
{
  console.log(req);
  
  res.send("welcome private node js")
})

//implement route
app.use('/api',router)
app.listen(2000,()=>
    {console.log('Running in 2000');
        
    })