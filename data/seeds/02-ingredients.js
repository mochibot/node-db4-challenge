
exports.seed = function(knex) {
  return knex('ingredients').insert([
    {ingredient_name: 'elbow macaroni'},
    {ingredient_name: 'butter'},
    {ingredient_name: 'all-purpose flour'},
    {ingredient_name: 'milk'},
    {ingredient_name: 'shredded cheddar cheese'},
    {ingredient_name: 'rice'},
    {ingredient_name: 'oil'},
    {ingredient_name: 'garlic'},
    {ingredient_name: 'egg'},
    {ingredient_name: 'soy sauce'}
  ]);
};
