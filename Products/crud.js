const express=require('express');
const app=express();
app.use(express.json());

//route instance
const router=require('./routes/products_route')






//implement route
app.use('/api',router)
app.listen(2000,()=>{console.log('Running in 2000');})