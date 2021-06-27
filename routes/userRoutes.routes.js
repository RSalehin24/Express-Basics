 const express = require('express');
 const router = express.Router();
 const bodyParser = require('body-parser');
 const isLoggedIn = require("./../middlewares/auth.middlewares.js")
 const {getRegister, postRegister, getLogin, getDashBoard} = require("./../controllers/userController.controllers")

 router.use(bodyParser.urlencoded({extended: false}));
 router.use(bodyParser.json());

 router.get("/login",getLogin);
 router.get("/dashboard", getDashBoard);
 router.get("/register", getRegister); 
 router.post("/register", isLoggedIn,postRegister);
 router.route('/register').all(isLoggedIn).get(getRegister).post(postRegister);
 module.exports = router; 