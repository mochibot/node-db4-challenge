const db = require('../../data/data-config');

module.exports = {
  getRecipes,
  getRecipeById,
  getShoppingList,
  getInstructions,
}

function getRecipes() {
  return db('recipes');
}

function getRecipeById(id) {
  return db('recipes').where({ id }).first();
}

function getInstructions(id) {
  return db('steps')
          .where('recipe_id', id)
          .orderBy('step_number')
}

function getShoppingList(id) {
  return db('recipe_ingredients as ri')
          .where('ri.recipe_id', id)
          .join('ingredients as i', 'ri.ingredient_id', 'i.id')
          .select('i.ingredient_name', 'ri.ingredient_quantity', 'ri.ingredient_unit');
}