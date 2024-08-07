const axios = require('axios');

const updateAlertPolicy = async (id, name) => {
  const query = `
    mutation {
      alertsPolicyUpdate(
        accountId: ${process.env.NEW_RELIC_ACCOUNT_ID},
        id: "${id}",
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

  try {
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

    console.log('Response data:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error updating alert policy:', error.response ? error.response.data : error.message);
    throw error;
  }
};


module.exports = updateAlertPolicy;

// const axios = require('axios');

// const updateAlertPolicy = async (id, name) => {
//   const query = `
//     mutation {
//       alertsPolicyUpdate(
//         accountId: ${process.env.NEW_RELIC_ACCOUNT_ID},
//         id: "${id}",
//         policy: {
//           name: "${name}",
//           incidentPreference: PER_POLICY
//         }
//       ) {
//         id
//         name
//       }
//     }
//   `;

//   const response = await axios.post(
//     process.env.NEW_RELIC_API_URL,
//     { query },
//     {
//       headers: {
//         'Content-Type': 'application/json',
//         'Api-Key': process.env.NEW_RELIC_API_KEY
//       }
//     }
//   );

//   return response.data;
// };

// module.exports = updateAlertPolicy;

// const axios = require('axios');
// require('dotenv').config();

// const NEW_RELIC_API_URL = process.env.NEW_RELIC_API_URL;
// const NEW_RELIC_API_KEY = process.env.NEW_RELIC_API_KEY;

// const headers = {
//   'Api-Key': NEW_RELIC_API_KEY,
//   'Content-Type': 'application/json'
// };

// async function updateAlertPolicy(id, name) {
//   const query = `
//     mutation {
//       alertsMutingRuleUpdate(accountId: YOUR_ACCOUNT_ID, id: "${id}", mutingRule: {
//         name: "${name}",
//         description: "Updated via NerdGraph API",
//         enabled: true
//       }) {
//         id
//         name
//       }
//     }
//   `;
//   return await axios.post(NEW_RELIC_API_URL, { query }, { headers });
// }

// module.exports = updateAlertPolicy;
