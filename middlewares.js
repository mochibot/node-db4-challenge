exports.checkRecipeInput = function (req, res, next) {
  let body = req.body;
  if (!body.recipe_name) {
    res.status(400).json({ message: 'Recipe name is required'});
  } else {
    next();
  }
}