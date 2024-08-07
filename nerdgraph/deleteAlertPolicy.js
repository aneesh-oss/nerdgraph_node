const axios = require('axios');

const deleteAlertPolicy = async (id) => {
  const query = `
    mutation {
      alertsPolicyDelete(
        accountId: ${process.env.NEW_RELIC_ACCOUNT_ID},
        id: "${id}"
      ) {
        id
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

module.exports = deleteAlertPolicy;

// const axios = require('axios');
// require('dotenv').config();

// const NEW_RELIC_API_URL = process.env.NEW_RELIC_API_URL;
// const NEW_RELIC_API_KEY = process.env.NEW_RELIC_API_KEY;

// const headers = {
//   'Api-Key': NEW_RELIC_API_KEY,
//   'Content-Type': 'application/json'
// };

// async function deleteAlertPolicy(id) {
//   const query = `
//     mutation {
//       alertsMutingRuleDelete(accountId: YOUR_ACCOUNT_ID, id: "${id}") {
//         id
//       }
//     }
//   `;
//   return await axios.post(NEW_RELIC_API_URL, { query }, { headers });
// }

// module.exports = deleteAlertPolicy;
