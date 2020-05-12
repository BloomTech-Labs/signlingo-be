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
    findById
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
    return db('Level_5').insert({
      User_ID: User_ID,
      Lesson: 'False',
      Practice: 'False',
      Quiz: 'False',
      Active: 'True',
      signs: 'U to Z'
    }).returning("*");
}

function lessons() {
    return db('UtoZ');
}

function findById(id) {
    return db('Level_5')
        .where({ id })
        .first();
}
