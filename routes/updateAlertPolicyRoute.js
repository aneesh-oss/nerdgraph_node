const express = require('express');
const updateAlertPolicy = require('../nerdgraph/updateAlertPolicy');

const router = express.Router();

router.put('/update-alert-policy', async (req, res) => {
  const { id, name } = req.body;
  try {
    console.log('Received update request:', { id, name });
    const result = await updateAlertPolicy(id, name);
    console.log('Update result:', result);
    res.json(result);
  } catch (error) {
    console.error('Error in update-alert-policy route:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
