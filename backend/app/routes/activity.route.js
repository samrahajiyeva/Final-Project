const express = require('express')
const { activityController } = require('../controllers/activity.controller')
const store = require('../middlewares/multer')
const activityValidation = require('../validations/activity.validation')
const router = express.Router()

//get All
router.route('/').get(activityController.getAll)
// GetById
router.route('/:id').get(activityController.getById)
//Add
router.post(
    '/',
    // store.array('images', 5),
    // activityValidation,
    activityController.add,
)
//edit
router.put(
    '/:id',
    // store.array('images', 5),
    // activityValidation,
    activityController.edit,
)
//delete
router.route('/:id').delete(activityController.delete)
module.exports = router