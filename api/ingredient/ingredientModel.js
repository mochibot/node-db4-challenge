const db = require('../../data/data-config');

module.exports = {
  getRecipesForIngredient,
  getIngredientById,
  getIngredients
}

function getRecipesForIngredient(id) {
  return db('ingredients as i')
          .where('i.id', id)
          .join('recipe_ingredients as ri', 'ri.ingredient_id', 'i.id')
          .join('recipes as r', 'r.id', 'ri.recipe_id')
          .select('i.ingredient_name', 'r.recipe_name')
}

function getIngredientById(id) {
  return db('ingredients').where({ id }).first();
}

function getIngredients() {
  return db('ingredients');
}