const express = require('express');
const ingredientDB = require('./ingredientModel');
const { checkIngredientInput } = require ('../../middlewares');

const router = express.Router();

//get all ingredients
router.get('/', async (req, res) => {
  try {
    const ingredients = await ingredientDB.getIngredients();
    res.status(200).json(ingredients);
  } catch(error) {
    res.status(500).json({ message: error.message})
  }
})

//get specific ingredient
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

//get all recipes for given ingredient
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

//add an ingredient
router.post('/', checkIngredientInput, async (req, res) => {
  const ingredient = req.body;
  try {
    const newIngredient = await ingredientDB.addIngredient(ingredient);
    res.status(201).json(newIngredient);
  } catch (error) {
    res.status(500).json({ message: error.message || 'error adding ingredient'});
  }
})

//update an ingredient
router.put('/:id', checkIngredientInput, async (req, res) => {
  const id = req.params.id;
  const ingredient = req.body;
  try {
    const updatedIngredient = await ingredientDB.updateIngredient(id, ingredient);

    if (updatedIngredient) {
      res.status(200).json(updatedIngredient);
    } else {
      res.status(404).json({ message: 'no ingredient of this ID exists'});
    }
  } catch (error) {
    res.status(500).json({ message: error.message || 'error updating ingredient'});
  }
})

//delete an ingredient
router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const toDelete = await ingredientDB.getIngredientById(id);
    const deleted = await ingredientDB.deleteIngredient(id);

    if (deleted) {
      res.status(200).json({removed: toDelete});
    } else {
      res.status(404).json({ message: 'no ingredient of this ID exists'});
    }
  } catch (error) {
    res.status(500).json({ message: error.message || 'error deleting ingredient'});
  }
})

//add an ingredient to recipe

module.exports = router;