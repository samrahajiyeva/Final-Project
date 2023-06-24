const express = require('express')
const { shopController } = require('../controllers/shop.controller')
const store = require('../middlewares/multer')
const shopValidation = require('../validations/shop.validation')
const router = express.Router()
const multer = require('multer')
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"public/");
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

const upload = multer({storage})

//get All
router.route('/').get(shopController.getAll)
// GetById
router.route('/:id').get(shopController.getById)
//Add
router.post(
    '/',
    upload.single('image'),
    shopController.add,
)
//edit
router.put(
    '/:id',
    upload.single('image'),
    shopController.edit,
)
//delete
router.route('/:id').delete(shopController.delete)
module.exports = router