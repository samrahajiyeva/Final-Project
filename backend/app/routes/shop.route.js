const express = require('express')
const { shopController } = require('../controllers/shop.controller')
const store = require('../middlewares/multer')
const shopValidation = require('../validations/shop.validation')
const router = express.Router()

//get All
router.route('/').get(shopController.getAll)
// GetById
router.route('/:id').get(shopController.getById)
//Add
router.post(
    '/',
    // store.array('images', 5),
    // shopValidation,
    shopController.add,
)
//edit
router.put(
    '/:id',
    // store.array('images', 5),
    // shopValidation,
    shopController.edit,
)
//delete
router.route('/:id').delete(shopController.delete)
module.exports = router