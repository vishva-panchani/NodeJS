const express=require('express')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const authRoutes=require('./routes/auth')
const protectedRoute=require('./routes/protectedRoute')
// const cors=require('cors')
// app.use(cors())


const app=express()
app.use(express.json())


const router=require('./routes/auth')
// const verifyToken=require('./middleware/authMiddleware')
mongoose.connect('mongodb+srv://vishvapachani67:TVkTwdD3HYggH9vD@node.0lrbb.mongodb.net/mca',
  {
    useNewUrlParser:true,
    useUnifiedTopology:true
  }
);


// app.use('/api',router)
app.use('/',authRoutes)
app.use('/',protectedRoute)

app.listen(3000,()=>
{
    console.log('server http://localhost:3000')
})

//"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmM4MjE2ZWI3M2RiOTRiNzJmMWJjMDEiLCJpYXQiOjE3MjQzOTE5MzAsImV4cCI6MTcyNDM5NTUzMH0.xCikwWAaPGQqk-ES4X9BUHbP9Sb_uCwzNBFzAbdlJ-w"