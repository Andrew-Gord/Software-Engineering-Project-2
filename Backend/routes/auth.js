const express = require('express');

const {body } = require('express-validator');

const router = express.Router();

const User = require("../models/user");
const authController = require('../controllers/auth');
router.use((req,res,next)=>{
    console.log('Time: ', Date.now());
    next();
})
router.post(
    '/signup',[
        body('name').trim().not().isEmpty() ,
        body('email').isEmail().withMessage('Please enter a valid email.')
        .custom(async (Email) => {
            const user = await User.find(Email);
            if(user[0].length > 0){
                return Promise.reject('Email address already exists')
            }
        }).normalizeEmail(),
        body('password').trim().isLength({min: 7 })
    ], authController.signup
);
module.exports = router;