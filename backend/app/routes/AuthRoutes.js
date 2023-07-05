const express = require('express')
const router = express.Router()
const { register, login, getMe , getAllUsers , deleteUser , getAdminUsers } = require("../controllers/AuthController");
const {checkUser} = require("../middlewares/auth")
router.post('/',register)
router.post('/login',login)
router.get('/getMe',checkUser,getMe)
router.get('/users', getAllUsers);
router.delete('/users/:id', deleteUser);
router.get('/admin-users', getAdminUsers);



module.exports=router