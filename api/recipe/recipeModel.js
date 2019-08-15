const db = require('../../data/data-config');

module.exports = {
  getRecipes,
  getRecipeById,
  getShoppingList,
  getInstructions,
  addRecipe,
  deleteRecipe,
  updateRecipe
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

function addRecipe(recipe) {
  return db('recipes').insert(recipe).then(id => getRecipeById(id[0]));
}

function deleteRecipe(id) {
  return db('recipes').where({ id }).del();
}

function updateRecipe(id, changes) {
  return db('recipes').where({ id}).update(changes).then(() => getRecipeById(id));
}