/*
**Contributors:
**Seth Cox
**David Isakson
**April - May 2020
*/
const tbl = 'AtoE';

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex(tbl).del()
    .then(function () {
      // Inserts seed entries
      return knex(tbl).insert([
        {letter: 'A', image: 'https://photos.app.goo.gl/ZzZryfR1ygX6eFv37'},
        {letter: 'B', image: 'https://photos.app.goo.gl/D1xX1qX5jqrJiMiS9'},
        {letter: 'C', image: 'https://photos.app.goo.gl/2TXNXcHyJJ1za7AXA'},
        {letter: 'D', image: 'https://photos.app.goo.gl/Kq3KzzVJTaH2m7n48'},
        {letter: 'E', image: 'https://photos.app.goo.gl/saPms6Mj6RenuqQK7'}
      ]);
    });
};
