const express = require('express')
const { blogController } = require('../controllers/blog.controller')
const store = require('../middlewares/multer')
const blogValidation = require('../validations/blog.validation')
const router = express.Router()

//get All
router.get('/', blogController.getAll)
// GetById
router.route('/:id').get(blogController.getById)
//Add
router.post(
    '/',
    // store.array('images', 5),
    // blogValidation,
    blogController.add,
)
//edit
router.put(
    '/:id',
    // store.array('images', 5),
    // blogValidation,
    blogController.edit,
)
//delete
router.route('/:id').delete(blogController.delete)
module.exports = router