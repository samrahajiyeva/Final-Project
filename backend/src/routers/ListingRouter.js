const router = require("express").Router()
const { GetListing, GetListingById, PostListing, DeleteListing, UpdateListing } = require("../controllers/Listing.Controller")

router.get("/", GetListing)
router.get('/:id', GetListingById)
router.post('/', PostListing)
router.delete("/:id", DeleteListing)
router.put("/:id", UpdateListing)
module.exports = router