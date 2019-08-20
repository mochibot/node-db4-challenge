const db = require('../../data/data-config');

module.exports = {
  getRecipesForIngredient,
  getIngredientById,
  getIngredients,
  getIngredientByName,
  addIngredient,
  deleteIngredient,
  updateIngredient,
  addIngredientToRecipe,
  deleteIngredientFromRecipe
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

function getIngredientByName(name) {
  return db('ingredients').where('ingredient_name', name).first();
}

function addIngredient(ingredient) {
  return db('ingredients').insert(ingredient).then(id => getIngredientById(id[0]))
};

function addIngredientToRecipe(recipeIngredient, ingredientId, recipeId, ) {
  let newIngredient = {
    ...recipeIngredient,
    ingredient_id: ingredientId, 
    recipe_id: recipeId
  };
  
  return db('recipe_ingredients').insert(newIngredient).then(id => getRecipeIngredient(id[0]));
}

function getRecipeIngredient(id) {
  return db('recipe_ingredients').where({ id });
}

function deleteIngredient(id) {
  return db('ingredients').where({ id }).del();
};

function deleteIngredientFromRecipe(recipeId, ingredientId) {
  return db('recipe_ingredients').where('recipe_id', recipeId).where('ingredient_id', ingredientId).del();
}


function updateIngredient(id, changes) {
  return db('ingredients').where({ id }).update(changes).then(() => getIngredientById(id));
};



