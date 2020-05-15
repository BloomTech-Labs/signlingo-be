/*
**Contributors:
**Seth Cox
**David Isakson
**April - May 2020
*/
const router = require("express").Router();

const asl = require("../models/asl-model");

/*
**These end points were built for the asl-model found in the models folder.
**But that same model ended up being used in the levels routers found in the
**Levels folder. They are presently not being used for anything but have been
**left here in case they were needed for something or the next gorup of devs
**decided to use them.
*/
router.get("/AtoE", (req, res) => {
//Fetch ASL signs A to E
  asl
    .getAtoE()
    .then((tbl) => {
      res.status(200).json(tbl);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/FtoJ", (req, res) => {
//Fetch ASL signs F to J
  asl
    .getFtoJ()
    .then((tbl) => {
      res.status(200).json(tbl);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/KtoO", (req, res) => {
//Fetch ASL signs K to O
  asl
    .getKtoO()
    .then((tbl) => {
      res.status(200).json(tbl);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/PtoT", (req, res) => {
//Fetch ASL signs P to T
  asl
    .getPtoT()
    .then((tbl) => {
      res.status(200).json(tbl);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/UtoZ", (req, res) => {
//Fetch ASL signs U to Z
  asl
    .getUtoZ()
    .then((tbl) => {
      res.status(200).json(tbl);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
