const User = require('.././models/user.model')
exports.index = async (req, res)=>{
    try{ 
        const users = await User.findAll();
        res.status(201).json(users);
      } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
exports.store = async (req, res)=>{
    const user={
        username: req.body.username,
        birthdate: req.body.birthdate,
      }
    const jane = await User.create(user);
    res.send('insert customer successfully');
}    
exports.update = async (req, res)=>{
    await User.update(
        { username: req.body.username,birthdate: req.body.birthdate },
        {   where: {
            id: req.body.id,
          },
        },
      );    
    //const customer = await Model.findByIdAndUpdate(req.body.id,req.body,{ new: true });
    res.send('update customer successfully');
}
exports.destroy = async (req, res)=>{
    await User.destroy({
        where: {
          id: req.body.id,
        },
      });
    //const customer = await Model.findByIdAndDelete(req.body.id);
    res.send('delete customer successfully');
}