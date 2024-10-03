const joi=require('joi');
exports.studentCreate=(req,res,next)=>{
    const studentSchema=joi.object({
            "name":joi.string().required(),
            "city":joi.string().required(),
            
    });
    const{error}=studentSchema.validate(req.body);
    if(error)
    {
        return res.status(400).json({message:error.details[0].message})
    }
    next();
}