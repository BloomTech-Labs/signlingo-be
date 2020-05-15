/*
**Contributors:
**Seth Cox
**David Isakson
**April - May 2020
*/
exports.up = function(knex) {
  knex.schema.alterTable('KtoO', tbl =>{
    tbl.increments();

  	tbl
  	  .string('letter')
  	  .notNullable()
  	  .unique();

      tbl.text('image').notNullable().alter();

  	  //tbl.string('image').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("KtoO");
};
