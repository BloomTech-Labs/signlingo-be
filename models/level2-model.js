/*
**Contributors:
**Seth Cox
**David Isakson
**April - May 2020
*/

const db = require('../data/dbconfig');

module.exports = {
    addUser,
    lessons,
    findById,
    update,
    getUser
}

/*
**Boolean values for Lesson, Practice, and Quiz set to False to denote
**that the given user has not completed that portion of the current level.
**Boolean value for Active denotes that the current level is active and
**available for the user to use.
**Signs field denote the current ASL signs that are being learned for the
**current level.
*/
function addUser(User_ID) {
    return db('Level_2').insert({
      User_ID: User_ID,
      Lesson: false,
      Practice: false,
      Quiz: false,
      Active: false,
      signs: 'F to J'
    }).returning("*");
}

function lessons() {
    return db('FtoJ');
}

function findById(id) {
    return db('Level_2')
        .where({ id })
        .first();
}

function getUser (id) {
    return db('Level_2').where({User_ID: id}).select("*").first();
}

function update(changes, id) {
    return db('Level_2')
        .where({ User_ID: id })
        .update(changes)
        .then(() => {
            return getUser(id)
        })
};