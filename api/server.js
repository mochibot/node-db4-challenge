const express = require('express');
const helmet = require('helmet');

const recipeRouter = require('./recipe/recipeRouter');
const ingredientRouter = require('./ingredient/ingredientRouter');
const stepRouter = require('./step/stepRouter');

const server = express();

server.use(helmet());
server.use(express.json());
server.use('/api/recipes', recipeRouter);
server.use('/api/ingredients', ingredientRouter);
server.use('/api/steps', stepRouter);

server.get('/', (req, res) => {
  res.status(200).json('Server is running!')
})

module.exports = server;