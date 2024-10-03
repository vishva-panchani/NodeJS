const Student=require('./../model/Student');


exports.index=(req,res)=>
    {
        res.send(
            {
                "success":true,
                "data":[
                    {"name":"Vishva","programe":"MCA","enr_no":123456,"dob":"09-04-2002","bloodgroup":"A+","mobile":9878965412,"email":"v@gmail.com","address":"Rajkot"},
                    {"name":"Pari","programe":"MCom","enr_no":654321,"dob":"10-04-2003","bloodgroup":"AB+","mobile":9568965412,"email":"p@gmail.com","address":"Surat"},
                    {"name":"krushi","programe":"BCA","enr_no":789654,"dob":"23-06-2000","bloodgroup":"O+","mobile":9878965755,"email":"k@gmail.com","address":"Baroda"},
                    {"name":"Bansi","programe":"Bsc","enr_no":369852,"dob":"14-08-2005","bloodgroup":"B+","mobile":9878965123,"email":"b@gmail.com","address":"Morbi"},
                    {"name":"Devanshi","programe":"Msc","enr_no":147852,"dob":"00-02-2006","bloodgroup":"A-","mobile":5678965412,"email":"d@gmail.com","address":"Pune"}
    
                ],
                "message":"Retrive Sucessfully"
            }
        )
    }
    
    exports.show=(req,res)=>
    {
        res.send(
            {
                "success":true,
                "data":[
                    {"name":"Vishva","programe":"MCA","enr_no":123456,"dob":"09-04-2002","bloodgroup":"A+","mobile":9878965412,"email":"v@gmail.com","address":"Rajkot"},           
                ],
                "message":"Retrive Sucessfully"
            }
        )
    }
    
    //insert:
    exports.store=async(req,res)=>
    {
        try{
            console.log(req.body);
            //insert record into student collection
            const student=await Student.create(req.body);
            res.status(201).json(student);
        }
        catch(error)
        {
            res.status(500).json({error:error.message});
        }
    }
    
    //update:
    
    exports.update=(req,res)=>{
        res.send(
            {
                "status":"success",
                "data":{
                    "name":req.body.name,
                    "programe":req.body.programe,
                    "enr_no":req.body.enr_no,
                    "dob":req.body.dob,
                    "bloodgroup":req.body.bloodgroup,
                    "mobile":req.body.mobile,
                    "email":req.body.email,
                    "address":req.body.address,
                },
                "message":"Update Successfully"
            }
        )
    }
    
    //delete:
    
    
    exports.destroy=(req,res)=>{
        res.send(
            {
                "status":"success",
                "data":{ "enr_no":req.body.enr_no},
                "message":"Delete Successfully"
            }
        )
    }