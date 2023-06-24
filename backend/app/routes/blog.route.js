const express = require('express')
const { blogController } = require('../controllers/blog.controller')
const store = require('../middlewares/multer')
const blogValidation = require('../validations/blog.validation')
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
router.get('/', blogController.getAll)
// GetById
router.route('/:id').get(blogController.getById)
//Add
router.post(
    '/',
    upload.single('image'),
    blogController.add,
)

//edit
router.put(
    '/:id',
    upload.single('image'),
    blogController.edit,
)

//delete
router.route('/:id').delete(blogController.delete)
module.exports = router