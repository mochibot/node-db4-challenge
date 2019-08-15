
exports.seed = function(knex) {
  return knex('recipes').insert([
    {recipe_name: 'Macoroni and cheese', recipe_description: 'Simple macaroni and cheese recipe from allrecipes.com'},
    {recipe_name: 'Fried rice', recipe_description: 'Fried rice Penny style'},
  ]);
};
