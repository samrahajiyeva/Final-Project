const express = require('express')
const { activityController } = require('../controllers/activity.controller')
const store = require('../middlewares/multer')
const activityValidation = require('../validations/activity.validation')
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
router.route('/').get(activityController.getAll)
// GetById
router.route('/:id').get(activityController.getById)
//Add
router.post(
    '/',
    upload.fields([
        { name: 'image', maxCount: 1 },
      ]),
    activityController.add,
)

//edit
router.put(
    '/:id',
    upload.fields([
        { name: 'image', maxCount: 1 },
      ]),
    activityController.edit,
)

//delete
router.route('/:id').delete(activityController.delete)
module.exports = router