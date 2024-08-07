const axios = require('axios');

const createAlertPolicy = async (name) => {
  const query = `
    mutation {
      alertsPolicyCreate(
        accountId: ${process.env.NEW_RELIC_ACCOUNT_ID},
        policy: {
          name: "${name}",
          incidentPreference: PER_POLICY
        }
      ) {
        id
        name
      }
    }
  `;

  const response = await axios.post(
    process.env.NEW_RELIC_API_URL,
    { query },
    {
      headers: {
        'Content-Type': 'application/json',
        'Api-Key': process.env.NEW_RELIC_API_KEY
      }
    }
  );

  return response.data;
};

module.exports = createAlertPolicy;

// const axios = require('axios');
// require('dotenv').config();

// const NEW_RELIC_API_URL = process.env.NEW_RELIC_API_URL;
// const NEW_RELIC_API_KEY = process.env.NEW_RELIC_API_KEY;

// const headers = {
//   'Api-Key': NEW_RELIC_API_KEY,
//   'Content-Type': 'application/json'
// };

// async function createAlertPolicy(name) {
//   const query = `
//     mutation {
//       alertsMutingRuleCreate(accountId: YOUR_ACCOUNT_ID, mutingRule: {
//         name: "${name}",
//         description: "Created via NerdGraph API",
//         enabled: true
//       }) {
//         id
//         name
//       }
//     }
//   `;
//   return await axios.post(NEW_RELIC_API_URL, { query }, { headers });
// }

// module.exports = createAlertPolicy;
