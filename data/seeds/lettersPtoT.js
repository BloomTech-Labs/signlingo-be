/*
**Contributors:
**Seth Cox
**David Isakson
**April - May 2020
*/
const tbl = 'PtoT';

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex(tbl).del()
    .then(function () {
      // Inserts seed entries
      return knex(tbl).insert([
        {letter: 'P', image: 'https://photos.app.goo.gl/HuMyYCVNkkgWVsjh7'},
        {letter: 'Q', image: 'https://photos.app.goo.gl/ktDLN6LPjZbQGUAM6'},
        {letter: 'R', image: 'https://photos.app.goo.gl/pDF1ZAwWSWw2p1DV7'},
        {letter: 'S', image: 'https://photos.app.goo.gl/4A51wrnTQKwdiLiZ9'},
        {letter: 'T', image: 'https://photos.app.goo.gl/i6EY6fcYxBRoP1Ug6'}
      ]);
    });
};
