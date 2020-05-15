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
    update
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
    return db('Level_4').insert({
      User_ID: User_ID,
      Lesson: false,
      Practice: false,
      Quiz: false,
      Active: false,
      signs: 'P to T'
    }).returning("*");
}

function lessons() {
    return db('PtoT');
}

function findById(id) {
    return db('Level_4')
        .where({ id })
        .first();
}

function update(changes, id) {
    return db('Level_4')
        .where({ User_ID: User_ID })
        .update(changes)
        .then(() => {
            return findById(id)
        })
};
