const express = require('express')
const { listingController } = require('../controllers/listing.controller')
const store = require('../middlewares/multer')
const listingValidation = require('../validations/listing.validation')
const router = express.Router()
let multerStorage = multer.memoryStorage()
let multerUploads = multer({storage: multerStorage, limits: { fileSize: 1024 * 1024 * 10 }})

//get All
router.get("/",listingController.getAll)
// GetById
router.route('/:id').get(listingController.getById)
//Add
router.post(
    '/',
    store.array('images', 5),
    listingValidation,
    listingController.add,
)
//edit
router.put(
    '/:id',
    store.array('images', 5),
    listingValidation,
    listingController.edit,
)
//delete
router.route('/:id').delete(listingController.delete)
module.exports = router