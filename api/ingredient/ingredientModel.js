const db = require('../../data/data-config');

module.exports = {
  getRecipesForIngredient,
  getIngredientById,
  getIngredients,
  addIngredient,
  deleteIngredient,
  updateIngredient
};

function getRecipesForIngredient(id) {
  return db('ingredients as i')
          .where('i.id', id)
          .join('recipe_ingredients as ri', 'ri.ingredient_id', 'i.id')
          .join('recipes as r', 'r.id', 'ri.recipe_id')
          .select('i.ingredient_name', 'r.recipe_name')
};

function getIngredientById(id) {
  return db('ingredients').where({ id }).first();
};

function getIngredients() {
  return db('ingredients');
};

function addIngredient(ingredient) {
  return db('ingredients').insert(ingredient).then(id => getIngredientById(id[0]))
};

function deleteIngredient(id) {
  return db('ingredients').where({ id }).del();
};

function updateIngredient(id, changes) {
  return db('ingredients').where({ id }).update(changes).then(() => getIngredientById(id));
};