
exports.seed = function(knex) {
  return knex('recipe_ingredients').insert([
    {ingredient_id: 1, recipe_id: 1, ingredient_quantity: 8, ingredient_unit: 'ounce'},
    {ingredient_id: 2, recipe_id: 1, ingredient_quantity: 0.25, ingredient_unit: 'cup'},
    {ingredient_id: 3, recipe_id: 1, ingredient_quantity: 0.25, ingredient_unit: 'cup'},
    {ingredient_id: 4, recipe_id: 1, ingredient_quantity: 2, ingredient_unit: 'cup'},
    {ingredient_id: 5, recipe_id: 1, ingredient_quantity: 2, ingredient_unit: 'cup'},
    {ingredient_id: 6, recipe_id: 2, ingredient_quantity: 1, ingredient_unit: 'cup'},
    {ingredient_id: 7, recipe_id: 2, ingredient_quantity: 1, ingredient_unit: 'tablespoon'},
    {ingredient_id: 8, recipe_id: 2, ingredient_quantity: 1, ingredient_unit: 'clove'},
    {ingredient_id: 9, recipe_id: 2, ingredient_quantity: 2, ingredient_unit: null},
    {ingredient_id: 10, recipe_id: 2, ingredient_quantity: 1, ingredient_unit: 'tablespoon'}
  ]);
};
