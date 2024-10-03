const express=require('express');
const app=express();
app.use(express.json())
//basic Get Request
app.get('/',(request,response)=>
{
    response.send("Welcome to node.js api")
})

//Parameterize Get Request
app.get('/login/:username/:password',(request,response)=>
{
    // let username=request.params.username;
    // let password=request.params.password;
    const{username,password}=request.params
    response.send("Parameterized Get Request Distructing :-> "+username+" -"+password)
})

// Get Request with Query String:
app.get('/login',(request,response)=>
    {
        // let username=request.query.username;
        // let password=request.query.password;
        const{username,password}=request.query
        response.send("Parameterized Get Request Distructing :-> "+username+" -"+password)
    })

//post Request with payload(body)

app.post('/login',(request,response)=>
{
    // let username=request.body.username;
    // let password=request.body.password;
    const {username,password}=request.body
    response.send({
        "username":username,
        "password":password
    });
   
});

//put

app.put('/login',(req,res)=>
{
    res.send("Put api successfully")
})



app.listen(2000,()=>{
    console.log("server is running on http://localhost:2000")
})