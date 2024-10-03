const exress=require('express')


const facultyController=require('./../controller/faculty_controller')


//route instance
const router=exress.Router()
 
router.get('/faculty',facultyController.index)
router.get('/faculty/:name/',facultyController.show)
router.post('/faculty',facultyController.store)
router.put('/faculty',facultyController.update)
router.delete('/faculty',facultyController.destroy)


module.exports=router;