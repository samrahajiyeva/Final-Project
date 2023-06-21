const router = require("express").Router()
const { GetBlog, GetBlogById, PostBlog, DeleteBlog, UpdateBlog } = require("../controllers/Blog.Controller")

router.get("/", GetBlog)
router.get('/:id', GetBlogById)
router.post('/', PostBlog)
router.delete("/:id", DeleteBlog)
router.put("/:id", UpdateBlog)
module.exports = router