exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("genres")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("genres").insert([
        { type: "action" },
        { type: "murder mystery" },
        { type: "science fiction" }
      ]);
    });
};
