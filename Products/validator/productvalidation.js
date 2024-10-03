const Joi=require('joi');
exports.createProduct=(req,res,next)=>{
    const productSchema=Joi.object(
        {
            "name":Joi.string().required(),
            "price":Joi.number().required(),
            "email":Joi.string().email().required()

        }
    );

    const { error }=productSchema.validate(req.body);
    if(error){
        return res.status(400).send({message:error.details[0].message});
    }
    next();
}