const db = require('../../data/data-config');

module.exports = {
  getSteps,
  getStepById,
  deleteStep,
  updateStep
}

function getSteps() {
  return db('steps');
}

function getStepById(id) {
  return db('steps').where({ id }).first();
}

function deleteStep(id) {
  return db('steps').where({ id }).del();
}

function updateStep(id, changes) {
  return db('steps').where({ id }).update(changes).then(() =>getStepById(id));
}