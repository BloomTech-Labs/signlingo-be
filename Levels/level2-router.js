/*
**Contributors:
**Seth Cox
**David Isakson
**April - May 2020
*/
const router = require("express").Router();

const level2 = require("../models/level2-model");

router.put("/", (req, res) => {
  level2
    .findById(req.params.id)
    .then(data => {
      if (data) {
        level2.addUser(req.body, req.params.id)
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
