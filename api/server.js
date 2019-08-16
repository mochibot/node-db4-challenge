const express = require('express');
const helmet = require('helmet');

const recipeRouter = require('./recipe/recipeRouter');
const ingredientRouter = require('./ingredient/ingredientRouter');

const server = express();

server.use(helmet());
server.use(express.json());
server.use('/api/recipes', recipeRouter);
server.use('/api/ingredients', ingredientRouter);

server.get('/', (req, res) => {
  res.status(200).json('Server is running!')
})

module.exports = server;