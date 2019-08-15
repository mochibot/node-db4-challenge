const express = require('express');
const recipeDB = require('./recipeModel');
const { checkRecipeInput } = require('../../middlewares');

const router = express.Router();

//get all recipes
router.get('/', async (req, res) => {
  try {
    const recipes = await recipeDB.getRecipes();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ message: 'error fetching recipes'});
  }
})

//get specific recipe
router.get('/:id', async (req, res) => {
  const id  = req.params.id;

  try {
    const recipe = await recipeDB.getRecipeById(id);
    if (recipe) {
      res.status(200).json(recipe);
    } else {
      res.status(404).json({ message: 'no recipe of this ID exists'});
    }
  } catch (error) {
    res.status(500).json({ message: 'error fetching recipe'})
  }
})

//get steps for a specific recipe
router.get('/:id/instructions', async (req, res) => {
  const id = req.params.id;
  try {
    const steps = await recipeDB.getInstructions(id);
    if (steps.length) {
      res.status(200).json(steps);
    } else {
      res.status(404).json({ message: 'no recipe of this ID exists'});
    }
  } catch (error) {
    
    res.status(500).json({ message: 'error fetching instructions'})
  }
})

//get shoppinglist for a recipe
router.get('/:id/shoppinglist', async (req, res) => {
  const id = req.params.id;
  try {
    const steps = await recipeDB.getShoppingList(id);
    if (steps.length) {
      res.status(200).json(steps);
    } else {
      res.status(404).json({ message: 'no recipe of this ID exists'});
    }
  } catch (error) {
    res.status(500).json({ message: 'error fetching instructions'});
  }
})

//add a recipe
router.post('/', checkRecipeInput, async (req, res) => {
  const recipe = req.body;
  try {
    const newRecipe = await recipeDB.addRecipe(recipe);
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(500).json({ message: error.message || 'error adding recipe'});
  }
})

//update a recipe
router.put('/:id', checkRecipeInput, async (req, res) => {
  const id = req.params.id;
  const recipe = req.body;
  try {
    const updatedRecipe = await recipeDB.updateRecipe(id, recipe);

    if (updatedRecipe) {
      res.status(200).json(updatedRecipe);
    } else {
      res.status(404).json({ message: 'no recipe of this ID exists'});
    }
  } catch (error) {
    res.status(500).json({ message: error.message || 'error updating recipe'});
  }
})

//delete a recipe
router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const toDelete = await recipeDB.getRecipeById(id);
    const deleted = await recipeDB.deleteRecipe(id)

    if (deleted) {
      res.status(200).json({removed: toDelete});
    } else {
      res.status(404).json({ message: 'no recipe of this ID exists'});
    }
  } catch (error) {
    res.status(500).json({ message: error.message || 'error updating recipe'});
  }
})

module.exports = router;