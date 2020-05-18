/*
 ** This file and the folder that it is in was generated by the
 ** Node Package dukeapi found at: https://www.npmjs.com/package/dukeapi
 **
 ** Version: 1.0.0
 ** Author: David H. Isakson II
 ** License: MIT
 ** Github: https://github.com/ikeman32/duke-api-wauth
 ** Contact: david.isakson.ii@gmail.com
 */
 /*
 **Contributors:
 **Seth Cox
 **David Isakson
 **April - May 2020
 */
require("dotenv").config();
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken"); // installed this
const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS);
const { userValidationRules, validate } = require("../middleware/validation");

const User = require("../models/auth-model");
const level1 = require('../models/level1-model');
const level2 = require('../models/level2-model');
const level3 = require('../models/level3-model');
const level4 = require('../models/level4-model');
const level5 = require('../models/level5-model');

//JWT End Points generated by dukeapi
router.post("/register", userValidationRules(), validate, (req, res) => {

  let user = req.body;

  const returnUser = {email: req.body.email, token: signToken(user)};

  const hash = bcrypt.hashSync(user.password, SALT_ROUNDS); // 2 ^ n
  user.password = hash;

  User.add(user)
    .then((saved) => {
      const id  = saved[0].id;//Isolate object from array of objects

      // Disclaimer - Theres is a probably a better way to handle this with knex, but chose to go down the JS route
      const promises = []; // The promise array that we will use to link to levels with user.id

      // push all promises into promises array
      // If you want to create another level this is where you add it
      promises.push(level1.addUser(id));
      promises.push(level2.addUser(id));
      promises.push(level3.addUser(id));
      promises.push(level4.addUser(id));
      promises.push(level5.addUser(id));
      //resolve all the promises with .all
      Promise.all(promises)
        .then((result) => {
          // send the results of the resolved promise on success
          //Include User_ID with object
          res.status(201).json({id:result[0][0].User_ID ,email:returnUser.email , token:returnUser.token});
        })
        .catch((newError) => {
          console.log('newError', newError);
          res.status(500).json({newError: newError});
        })
    })
    .catch((error) => {
      res.status(500).json({error: error});
    });
});

router.post("/login", userValidationRules(), validate, (req, res) => {
  let { email, password } = req.body;


  User.findBy({ email })

    .first()
    .then((user) => {
      console.log(user)
        let user_id = level1.findById(user.id);
        // console.log(user_id)

      if (user && bcrypt.compareSync(password, user.password)) {
        // sign token
        const token = signToken(user); // new line


        // send the token
        res.status(200).json({
          id: user.id,
          email: user.email,
          token: token // added token as part of the response sent
        });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

// this functions creates and signs the token
function signToken(user) {
  const payload = {
    email: user.email,
  };

  const secret = process.env.JWT_SECRET;

  const options = {
    expiresIn: "1h",
  };

  return jwt.sign(payload, secret, options); // notice the return
}

module.exports = router;
