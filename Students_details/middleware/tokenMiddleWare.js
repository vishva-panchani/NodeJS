const staticToken="atmiyauniversity"

function tokenMiddleware(req,res,next)
{
    // console.log(req);
    
    //Extract the token from headers
    const token =req.headers['authorization'];

    //check if the token from matches the static token 
    	
    if(token && token === staticToken)
    {
        //token is valid ,processed to the next middleware or route handler
        next();

    }else{
        res.status(401).json({message:"Unauthorized"});
    }
}
module.exports=tokenMiddleware