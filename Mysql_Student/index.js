const express=require('express');
const app=express();
const cors=require('cors');
app.use(cors());
app.use(express.json());

//import Routes
const studentRoutes=require('./route/Student_route');



//implement Routes
app.use('/api',studentRoutes);

app.listen(2000,()=>{
    console.log("Running in 2000");
})