//MYSQL---------------------------------------------------------

const express=require('express');
const router=express.Router();
const studentMysqlController=require('./../controller/Mysql_student_controller');
const studentValidation=require('./../validation/Stdudent_validation');

//Index
router.get('/students',studentMysqlController.index)

//Show
router.get('/students/:id/',studentMysqlController.show)

//Store
router.post('/students',studentValidation.studentCreate,studentMysqlController.store)

//update
router.put('/students',studentMysqlController.update)

//Delete
router.delete('/students',studentMysqlController.destroy)


module.exports=router;