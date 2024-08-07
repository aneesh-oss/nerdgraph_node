const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

const createAlertPolicyRoute = require('./routes/createAlertPolicyRoute');
const updateAlertPolicyRoute = require('./routes/updateAlertPolicyRoute');
const deleteAlertPolicyRoute = require('./routes/deleteAlertPolicyRoute');
const fetchAlertPoliciesRoute = require('./routes/fetchAlertPoliciesRoute');

app.use('/api', createAlertPolicyRoute);
app.use('/api', updateAlertPolicyRoute);
app.use('/api', deleteAlertPolicyRoute);
app.use('/api', fetchAlertPoliciesRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// const express = require('express');
// const bodyParser = require('body-parser');
// const dotenv = require('dotenv');

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(bodyParser.json());

// const createAlertPolicyRoute = require('./routes/createAlertPolicyRoute');
// const updateAlertPolicyRoute = require('./routes/updateAlertPolicyRoute');
// const deleteAlertPolicyRoute = require('./routes/deleteAlertPolicyRoute');
// const fetchAlertPoliciesRoute = require('./routes/fetchAlertPoliciesRoute');

// app.use('/api', createAlertPolicyRoute);
// app.use('/api', updateAlertPolicyRoute);
// app.use('/api', deleteAlertPolicyRoute);
// app.use('/api', fetchAlertPoliciesRoute);

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
