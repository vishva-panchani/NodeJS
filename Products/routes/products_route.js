const exress=require('express')

const productController=require('./../controller/productcontroller')
const productValidation=require('./../validator/productvalidation')
//route instance
const router=exress.Router()

router.get('/products',productController.index)
router.get('/products/:id',productController.show)
router.post('/products',productValidation.createProduct,productController.store)
router.put('/products',productController.update)
router.delete('/products',productController.destroy)


module.exports=router;
678