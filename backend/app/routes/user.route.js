const express = require('express')
const { userController } = require('../controllers/user.controller')
const store = require('../middlewares/multer')
const userValidation = require('../validations/user.validation')
const router = express.Router()

//get All
router.route('/').get(userController.getAll)
// GetById
router.route('/:id').get(userController.getById)
//Add
router.post(
    '/',
    // store.array('images', 5),
    // userValidation,
    userController.add,
)
//edit
router.put(
    '/:id',
    // store.array('images', 5),
    // userValidation,
    userController.edit,
)
//delete
router.route('/:id').delete(userController.delete)
module.exports = router