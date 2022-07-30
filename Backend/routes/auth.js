const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const User = require("../models/User");

// Create a User using :POST "/api/auth/createuser" . Doesn't require Auth
router.post(
  "/createuser",
  [
    body("email").isEmail(),
    body("name").isLength({ min: 3 }),
    body("password").isLength({ min: 6 }),
  ],
  async (req, res) => {

    //If there are errors 
    //return Bad request & the error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //Check whether the user email exists already
    let user=await User.findOne({email:req.body.email})
    console.log(user)
    if(user){
        return res.json({error: "Sorry ausr with this email already exists "})
    }

     user=await User.create({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
    })
    res.json(user)

    //   .then((user) => res.json(user))
    //   .catch((err) => {
        // console.log(err);
        // res.json({ err: err });
    //   });
  }
);

module.exports = router;
