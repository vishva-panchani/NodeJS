const exress=require('express')


const studentController=require('./../controller/student_controller')
const studentValidation=require('./../validator/studentvalidation')
const tokenMiddleware=require('./../middleware/tokenMiddleWare')
//route instance
const router=exress.Router()
 
router.get('/students',tokenMiddleware,studentController.index)
router.get('/students/:name/:enr_no',studentController.show)
router.post('/students',studentValidation.createStudent,studentController.store)
router.put('/students',studentController.update)
router.delete('/students',studentController.destroy)


module.exports=router;