/*
**Contributors:
**Seth Cox
**David Isakson
**April - May 2020
*/
const router = require("express").Router();

const level1 = require("../models/level1-model");

router.put("/", (req, res) => {
  console.log(req.body);
  level1
    .findById(req.params.User_ID)
    .then(data => {
      if (data) {
        level1.update(req.body, req.params.User_ID)
          .then(data => {
            res.status(201).json(data);
          })
          .catch(error => {
            res.status(500).json(error);
          })
      } else {
      res.status(404).json(data, "could not find the user");
    }
    })
    .catch((error) => {
      res.status(500).json({error,  message: "Failed to update the data" });
    })
});

module.exports = router;
