const Faculty=require('./../model/Faculty');

exports.index = async (req, res)=>{
    try{ 
            //console.log(req.query.name)
            // retrive records from mongo
            const faculty = await Faculty.find({"name":req.query.name});    
            res.status(201).json(faculty);
    
          } catch (error) {
            console.log("error is :",error);
            
            res.status(500).json({ error: error.message });
        }
    }
    
    exports.show = async (req, res) => {
        try{ 
            //console.log(req.query.name)
            // retrive records from mongo
            const faculty = await Faculty.find({"_id":req.params.id});    
            res.status(201).json(faculty);
    
          } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };

    
    exports.store = async (req, res)=>{
        try{ 
            console.log(req.body)
    
            const faculty = await Faculty.create(req.body)
            res.status(201).json(faculty);
          } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    
    exports.update = async (req, res)=>{
        
        try{ 
            console.log(req.body)
    
            const faculty = await Faculty.findByIdAndUpdate(req.body.id,req.body,{ new: true })
            res.status(201).json(faculty);
          } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    
    exports.destroy = async (req, res)=>{
        try{ 
            console.log(req.body)
    
            const faculty = await Faculty.findByIdAndDelete(req.body.id)
            res.status(201).json(faculty);
          } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }