const express = require('express');
const fetchAlertPolicies = require('../nerdgraph/fetchAlertPolicies');

const router = express.Router();

router.get('/alert-policies', async (req, res) => {
  try {
    const result = await fetchAlertPolicies();
    res.json(result.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
