const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const router=require('./routes/facultyroutes')


const app=express();
const port=3000;
app.use(express.json())
app.use(cors())

app.get('/api',(req,res)=>{
    console.log("hello MCA");
    res.status(200).send("Hello");
})

mongoose.connect('mongodb+srv://vishvapachani67:TVkTwdD3HYggH9vD@node.0lrbb.mongodb.net/mca',
    {
      useNewUrlParser:true,
      useUnifiedTopology:true
    }
  );

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})