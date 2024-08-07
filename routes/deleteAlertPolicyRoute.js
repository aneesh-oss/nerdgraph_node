const express = require('express');
const deleteAlertPolicy = require('../nerdgraph/deleteAlertPolicy');

const router = express.Router();

router.delete('/delete-alert-policy', async (req, res) => {
  const { id } = req.body;
  try {
    const result = await deleteAlertPolicy(id);
    res.json(result.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
