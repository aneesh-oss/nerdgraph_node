const axios = require('axios');

const fetchAlertPolicies = async () => {
  const query = `
    query {
      actor {
        account(id: ${process.env.NEW_RELIC_ACCOUNT_ID}) {
          alerts {
            policiesSearch {
              policies {
                id
                name
              }
            }
          }
        }
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

module.exports = fetchAlertPolicies;

// const axios = require('axios');
// require('dotenv').config();

// const NEW_RELIC_API_URL = process.env.NEW_RELIC_API_URL;
// const NEW_RELIC_API_KEY = process.env.NEW_RELIC_API_KEY;

// const headers = {
//   'Api-Key': NEW_RELIC_API_KEY,
//   'Content-Type': 'application/json'
// };

// async function fetchAlertPolicies() {
//   const query = `
//     {
//       actor {
//         account(id: YOUR_ACCOUNT_ID) {
//           alerts {
//             mutingRules {
//               id
//               name
//             }
//           }
//         }
//       }
//     }
//   `;
//   return await axios.post(NEW_RELIC_API_URL, { query }, { headers });
// }

// module.exports = fetchAlertPolicies;
