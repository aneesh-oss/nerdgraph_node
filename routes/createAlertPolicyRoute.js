const express = require('express');
const createAlertPolicy = require('../nerdgraph/createAlertPolicy');

const router = express.Router();

router.post('/create-alert-policy', async (req, res) => {
  const { name } = req.body;
  try {
    const result = await createAlertPolicy(name);
    res.json(result.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;


// const express = require('express');
// const createAlertPolicy = require('../nerdgraph/createAlertPolicy');

// const router = express.Router();

// router.post('/create-alert-policy', async (req, res) => {
//   const { name } = req.body;
//   try {
//     const result = await createAlertPolicy(name);
//     res.json(result.data);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// module.exports = router;
