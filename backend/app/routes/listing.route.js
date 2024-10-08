const express = require('express')
const { listingController } = require('../controllers/listing.controller')
const store = require('../middlewares/multer')
const listingValidation = require('../validations/listing.validation')
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
router.get("/",listingController.getAll)
// GetById
router.route('/:id').get(listingController.getById)
//Add
router.post(
    '/',
    upload.fields([
        { name: 'image', maxCount: 1 },
      ]),
    listingController.add,
)

//edit
router.put(
    '/:id',
    upload.fields([
        { name: 'image', maxCount: 1 },
      ]),
    listingController.edit,
)

//delete
router.route('/:id').delete(listingController.delete)
module.exports = router