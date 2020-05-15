const level1 = require('../models/level1-model');
const level2 = require('../models/level2-model');
const level3 = require('../models/level3-model');
const level4 = require('../models/level4-model');
const level5 = require('../models/level5-model');


const levels = (req, res, next) => {
    let user_id = level1.findById(req)
    // console.log(req);
    console.log(res.data);
    
    if (!user_id) {
        level1.addUser(req);
        level2.addUser(req);
        level3.addUser(req);
        level4.addUser(req);
        level5.addUser(req);
        next();
    } else {
        next();
    }
} 

module.exports = levels;



