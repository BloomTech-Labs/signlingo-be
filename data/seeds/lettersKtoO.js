/*
**Contributors:
**Seth Cox
**David Isakson
**April - May 2020
*/
const tbl = 'KtoO';

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex(tbl).del()
    .then(function () {
      // Inserts seed entries
      return knex(tbl).insert([
        {letter: 'K', image: 'https://photos.app.goo.gl/XFE63pxzzqeZKmG28'},
        {letter: 'L', image: 'https://photos.app.goo.gl/6crcFygZsCGNnThL6'},
        {letter: 'M', image: 'https://photos.app.goo.gl/LnCCQMMzatDTbCuC8'},
        {letter: 'N', image: 'https://photos.app.goo.gl/ccThj5QKhazkHEaV9'},
        {letter: 'O', image: 'https://photos.app.goo.gl/mC1UWLMTB9UsS3Hz8'}
      ]);
    });
};
