
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dishes').del()
    .then(function () {
      // Inserts seed entries
      return knex('dishes').insert([
        {dish_name: 'pizza'},
        {dish_name: 'tacos'},
        {dish_name: 'burgers'}
      ]);
    });
};
