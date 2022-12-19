const process = require('process')

const Axios = require('axios')
const qs = require('qs')

const handler = async function (event) {
  // apply our function to the queryStringParameters and assign it to a variable
  const API_PARAMS = event.queryStringParameters
  // Get env var values defined in our Netlify site UI
  const URL = 'https://api.edamam.com/search';

  const { APP_ID, APP_KEY } = process.env
  try {
    const { data } = await Axios.get(URL, {
          params: {
              q: API_PARAMS['term'],
              app_id: APP_ID,
              app_key: APP_KEY,
              from: 0,
              to: 10
          }
        });

    // refer to axios docs for other methods if you need them
    // for example if you want to POST data:
    //    axios.post('/user', { firstName: 'Fred' })
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    }
  } catch (error) {
    const { data, headers, status, statusText } = error.response
    return {
      statusCode: error.response.status,
      body: JSON.stringify({ status, statusText, headers, data }),
    }
  }
}

module.exports = { handler }
