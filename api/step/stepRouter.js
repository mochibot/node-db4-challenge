const express = require('express');
const stepDB = require('./stepModel');
const { checkStepInput } = require ('../../middlewares');

const router = express.Router();

//get all steps
router.get('/', async (req, res) => {
  try {
    const steps = await stepDB.getSteps();
    res.status(200).json(steps);
  } catch(error) {
    res.status(500).json({ message: 'error getting steps info' })
  }
})

//get specific step
router.get('/:id', async (req, res) => {
  const id = req.params.id;

  try {
    const step = await stepDB.getStepById(id);
    
    if (step) {
      res.status(200).json(step);
    } else {
      res.status(404).json({ message: 'no step of such id exists'})
    }
  } catch(error) {
    res.status(500).json({ message: 'error getting step info' })
  }
})

//delete a step
router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const toDelete = await stepDB.getStepById(id);
    const deleted = await stepDB.deleteStep(id);

    if (deleted) {
      res.status(200).json({removed: toDelete});
    } else {
      res.status(404).json({ message: 'no step of this ID exists'});
    }
  } catch (error) {
    res.status(500).json({ message: error.message || 'error deleting step'});
  }
})

//update a step
router.put('/:id', checkStepInput, async (req, res) => {
  const id = req.params.id;
  const step = req.body;
  try {
    const updatedStep = await stepDB.updateStep(id, step);

    if (updatedStep) {
      res.status(200).json(updatedStep);
    } else {
      res.status(404).json({ message: 'no step of this ID exists'});
    }
  } catch (error) {
    res.status(500).json({ message: error.message || 'error updating step'});
  }
})

module.exports = router;