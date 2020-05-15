/*
**Contributors:
**Seth Cox
**David Isakson
**April - May 2020
*/
const tbl = 'FtoJ';

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex(tbl).del()
    .then(function () {
      // Inserts seed entries
      return knex(tbl).insert([
        {letter: 'F', image: 'https://photos.app.goo.gl/DVvK8azSuTbndkwT6'},
        {letter: 'G', image: 'https://photos.app.goo.gl/L63w2KkE7Ki52xt98'},
        {letter: 'H', image: 'https://photos.app.goo.gl/xiDRUvhZD4UnTzZu6'},
        {letter: 'I', image: 'https://photos.app.goo.gl/Eu3G2vS9eH8nTdYh6'},
        {letter: 'J', image: 'https://photos.app.goo.gl/LUu23JqsMmqVzP8y5'}
      ]);
    });
};
