
exports.seed = function(knex) {
  return knex('steps').insert([
    {step_number: 1, step_instruction: 'Bring a large pot of lightly salted water to a boil.', recipe_id: 1},
    {step_number: 2, step_instruction: 'Cook elbow macaroni until cooked through, but firm to the bite. Drain.', recipe_id: 1},
    {step_number: 3, step_instruction: 'Melt butter in saucepan over medium heat. Stir in flour, sale, and pepper until smooth.', recipe_id: 1},
    {step_number: 4, step_instruction: 'Slowly pour milk into butter-flour mixture while continuously stirring.', recipe_id: 1},
    {step_number: 5, step_instruction: 'Add Cheddar cheese to milk mixture and stir until cheese is melted.', recipe_id: 1},
    {step_number: 6, step_instruction: 'Fold macaroni into cheese sauce until coated.', recipe_id: 1},
    {step_number: 1, step_instruction: 'Heat a large skillet. Pour in oil and stir in beaten egg and cook until egg is slightly firm. Take out egg and set it aside.', recipe_id: 2},
    {step_number: 2, step_instruction: 'Stir in minced garlic and fry until golden', recipe_id: 2},
    {step_number: 3, step_instruction: 'Stir in white rice. For best results, rice should have been refrigerated at least overnight. Cook until rice becomes fluffy', recipe_id: 2},
    {step_number: 4, step_instruction: 'Stir in the egg from step 1.', recipe_id: 2},
    {step_number: 5, step_instruction: 'Add soy sauce and mix thoroughly. Season with salt and pepper if desired', recipe_id: 2}
  ]);
};
