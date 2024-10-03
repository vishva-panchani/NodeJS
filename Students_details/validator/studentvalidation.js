const Joi=require('joi');
exports.createStudent=(req,res,next)=>{
    const studentSchema=Joi.object(
        {
            //"name":Joi.string().required(),
            // "enr_no":Joi.number().required(),
            // "email":Joi.string().email().required()

        }
    );

    const { error }=studentSchema.validate(req.body);
    if(error){
        return res.status(400).send({message:error.details[0].message});
    }
    next();
}