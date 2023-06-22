const express = require('express')
const { activityController } = require('../controllers/activity.controller')
const store = require('../middlewares/multer')
const activityValidation = require('../validation/activity.validation')
const router = express.Router()

//get All
router.route('/activity').get(activityController.getAll)
// GetById
router.route('/:id').get(activityController.getById)
//Add
router.post(
    '/',
    store.array('images', 5),
    shopValidation,
    shopController.add,
)
//edit
router.put(
    '/:id',
    store.array('images', 5),
    shopValidation,
    shopController.edit,
)
//delete
router.route('/:id').delete(activityController.delete)
module.exports = router