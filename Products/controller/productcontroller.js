exports.index=(req,res)=>
    {
        res.json(
            {
                "status":"success",
                "data":[
                    {"id":1,"name":"Dell inspiron 15","price":55000,"category":"laptop"},
                    {"id":2,"name":"Dell inspiron 15","price":57000,"category":"laptop"},
                    {"id":3,"name":"Dell inspiron 15","price":53000,"category":"laptop"},
                    {"id":4,"name":"Dell inspiron 15","price":50000,"category":"laptop"},
                    {"id":5,"name":"Dell inspiron 15","price":55000,"category":"laptop"},
    
                ],
                "message":"Retrive Sucessfully"
            }
        )
    }
    
    exports.show=(req,res)=>
    {
        const id=req.params.id;
        res.json({
            "status":"success",
            "data":{"id":id,"name":"Dell inspiron 15","price":55000,"category":"laptop"},
            "message":"Retriving Successfully"
            
        })
    }
    
    //insert:
    exports.store=(req,res)=>
    {
        res.json(
            {
                "status":"success",
                "data":{"id":req.body.id,"name":req.body.name,"price":req.body.price,"category":req.body.category,"email":req.body.email},
                "message":"Insert Successfully"
            }
        )
    }
    
    //update:
    
    exports.update=(req,res)=>{
        res.json(
            {
                "status":"success",
                "data":{"id":req.body.id},
                "message":"Update Successfully"
            }
        )
    }
    
    //delete:
    
    
    exports.destroy=(req,res)=>{
        res.json(
            {
                "status":"success",
                "data":{"id":req.body.id},
                "message":"Delete Successfully"
            }
        )
    }