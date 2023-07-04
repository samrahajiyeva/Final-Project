const express = require('express')
const { listingController } = require('../controllers/listing.controller')
const store = require('../middlewares/multer')
const listingValidation = require('../validations/listing.validation')
const router = express.Router()
//get All
router.get("/",listingController.getAll)
// GetById
router.route('/:id').get(listingController.getById)
//Add
router.post(
    '/',
    listingController.add,
)

//edit
router.put(
    '/:id',
    listingController.edit,
)

//delete
router.route('/:id').delete(listingController.delete)
module.exports = router