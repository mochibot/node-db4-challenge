exports.checkRecipeInput = function (req, res, next) {
  let body = req.body;
  if (!body.recipe_name) {
    res.status(400).json({ message: 'Recipe name is required'});
  } else {
    next();
  }
}

exports.checkIngredientInput = function (req, res, next) {
  let body = req.body;
  if (!body.ingredient_name) {
    res.status(400).json({ message: 'Ingredient name and quantity are required'});
  } else {
    next();
  }
}

exports.checkRecipeIngredientInput = function (req, res, next) {
  let body = req.body;
  if (!body.ingredient_name || !body.ingredient_quantity) {
    res.status(400).json({ message: 'Ingredient quantity is required'});
  } else {
    next();
  }
}

exports.checkStepInput = function (req, res, next) {
  let body = req.body;
  if (!body.step_number || !body.step_instruction) {
    res.status(400).json({ message: 'Step number and instruction are required'});
  } else {
    next();
  }
} 