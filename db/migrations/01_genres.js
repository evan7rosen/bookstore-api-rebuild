exports.up = function(knex, Promise) {
  return knex.schema.createTable("genres", table => {
    table.increments();
    table.string("type");
  });
};

exports.down = function(knex, Promise) {};
