exports.up = function(knex, Promise) {
  return knex.schema.createTable("books", table => {
    table.increments();
    table.string("title").notNullable();
    table.string("author").notNullable();
    table.integer("pages").notNullable();
    table
      .integer("genre_id")
      .references("id")
      .inTable("genres");
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {};
