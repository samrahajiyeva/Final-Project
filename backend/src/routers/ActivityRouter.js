const router = require("express").Router()
const { GetActivity, GetActivityById, PostActivity, DeleteActivity, UpdateActivity } = require("../controllers/Activity.Controller")

router.get("/", GetActivity)
router.get('/:id', GetActivityById)
router.post('/', PostActivity)
router.delete("/:id", DeleteActivity)
router.put("/:id", UpdateActivity)
module.exports = router