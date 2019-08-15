
exports.up = function(knex) {
  return knex.schema.createTable('recipes', table => {
    table.increments();
    table.string('recipe_name', 255).unique().notNullable();
    table.text('recipe_description');
  })
  .createTable('ingredients', table => {
    table.increments();
    table.string('ingredient_name', 255).unique().notNullable();
  })
  .createTable('steps', table => {
    table.increments();
    table.integer('step_number').unsigned().notNullable();
    table.text('step_instruction').notNullable();
    table.integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');
  })
  .createTable('recipe_ingredients', table => {
    table.increments();
    table.decimal('ingredient_quantity').notNullable();
    table.string('ingredient_unit', 50);
    table.integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');
    table.integer('ingredient_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('ingredients')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
