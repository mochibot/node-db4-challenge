const express = require('express');

const ingredientDB = require('./ingredientModel');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const ingredients = await ingredientDB.getIngredients();
    res.status(200).json(ingredients);
  } catch(error) {
    res.status(500).json({ message: error.message})
  }
})

router.get('/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const ingredient = await ingredientDB.getIngredientById(id);
    
    if (ingredient) {
      res.status(200).json(ingredient);
    } else {
      res.status(404).json({ message: 'no ingredient of such id exists'})
    }
  } catch(error) {
    res.status(500).json({ message: error.message })
  }
})

router.get('/:id/recipes', async (req, res) => {
  const id = req.params.id;

  try {
    const recipes = await ingredientDB.getRecipesForIngredient(id);
    if (recipes.length) {
      res.status(200).json(recipes);
    } else {
      res.status(404).json({ message: 'ingredient or recipe for such ingredient does not exist'})
    }
  } catch(error) {
    res.status(500).json({ message: error.message})
  }
})

module.exports = router;