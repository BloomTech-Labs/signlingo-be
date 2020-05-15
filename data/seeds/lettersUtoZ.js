/*
**Contributors:
**Seth Cox
**David Isakson
**April - May 2020
*/
const tbl = 'UtoZ';

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex(tbl).del()
    .then(function () {
      // Inserts seed entries
      return knex(tbl).insert([
        {letter: 'U', image: 'https://photos.app.goo.gl/Z81LymZ8viaF7xse7'},
        {letter: 'V', image: 'https://photos.app.goo.gl/sV7QBucsgXTa3QVj8'},
        {letter: 'W', image: 'https://photos.app.goo.gl/cG6Z81n4Hygk7qum6'},
        {letter: 'X', image: 'https://photos.app.goo.gl/3RzxkdRaBtztoE4g7'},
        {letter: 'Y', image: 'https://photos.app.goo.gl/NdCPbAN3Z17Gwi356'},
        {letter: 'Z', image: 'https://photos.app.goo.gl/RXVaMAzma9pPfcjt9'}
      ]);
    });
};
