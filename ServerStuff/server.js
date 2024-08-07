const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors'); 
require('dotenv').config(); 
const { v4: uuidv4 } = require('uuid');
 
const app = express();
const port = process.env.PORT || 3000;
const config = require('./config.json');
const CryptoJS = require('crypto-js');

const fs = require('fs');
const dotenv = require('dotenv');

app.use(cors()); 
app.use(bodyParser.json());

const AUTHORIZATION_STRING = 'Authorization';
const GATEWAY_USER_ID_STRING = 'gateway-user-id';
const GATEWAY_ENTITY_ID_STRING = 'gateway-entity-id';

const AUTHORIZATION_ARG = 2;
const GATEWAY_USER_ID_ARG = 3;
const GATEWAY_ENTITY_ID_ARG = 4;
 
var envConfig = dotenv.parse(fs.readFileSync('.env'));

envConfig[AUTHORIZATION_STRING] = CryptoJS.AES.encrypt(process.argv[AUTHORIZATION_ARG].toString(CryptoJS.enc.Utf8), config.AUTHORIZATION_KEY).toString();
envConfig[GATEWAY_USER_ID_STRING] = CryptoJS.AES.encrypt(process.argv[GATEWAY_USER_ID_ARG], config.GATEWAY_USER_ID_KEY).toString();
envConfig[GATEWAY_ENTITY_ID_STRING] = CryptoJS.AES.encrypt(process.argv[GATEWAY_ENTITY_ID_ARG].toString(CryptoJS.enc.Utf8), config.GATEWAY_ENTITY_ID_KEY).toString();

const updatedEnv = Object.keys(envConfig).map(key => `${key}=${envConfig[key]}`).join('\n');
 
fs.writeFileSync('.env', updatedEnv);

envConfig = dotenv.parse(fs.readFileSync('.env'));

const AUTHORIZATION = CryptoJS.AES.decrypt(envConfig[AUTHORIZATION_STRING], config.AUTHORIZATION_KEY).toString(CryptoJS.enc.Utf8);
const GATEWAY_USER_ID = CryptoJS.AES.decrypt(envConfig[GATEWAY_USER_ID_STRING], config.GATEWAY_USER_ID_KEY).toString(CryptoJS.enc.Utf8);
const GATEWAY_ENTITY_ID = CryptoJS.AES.decrypt(envConfig[GATEWAY_ENTITY_ID_STRING], config.GATEWAY_ENTITY_ID_KEY).toString(CryptoJS.enc.Utf8);

const CUSTOM_OTP_API_URL = 'https://api-sandbox.wellsfargo.com/iam/phone-based-id/v1/passcodes';
const VERIFY_OTP_API_URL = 'https://api-sandbox.wellsfargo.com/iam/phone-based-id/v1/passcodes/verify';
const CREATE_APPS_URL = 'https://api-sandbox.wellsfargo.com/credit-cards/cobrand/new-accounts/v2/applications';
const GENERATE_SESSION_TOKEN_URL = 'https://api-sandbox.wellsfargo.com/auth/v1/session-tokens';

let sessionToken = '';
let application_id = '';
let application_token = '';
 
const AUTH_HEADERS = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer ' + AUTHORIZATION,
  'gateway-user-id': GATEWAY_USER_ID,
  'gateway-entity-id': GATEWAY_ENTITY_ID 
};

//Encrypted variables
console.log('ENCRYPTED AUTHORIZATION:', envConfig[AUTHORIZATION_STRING]);
console.log('ENCRYPTED GATEWAY_USER_ID:', envConfig[GATEWAY_USER_ID_STRING]);
console.log('ENCRYPTED GATEWAY_ENTITY_ID:', envConfig[GATEWAY_ENTITY_ID_STRING]);

//Decrypted variables
console.log('DECRYPTED AUTHORIZATION:', AUTHORIZATION);
console.log('DECRYPTED GATEWAY_USER_ID:', GATEWAY_USER_ID);
console.log('DECRYPTED GATEWAY_ENTITY_ID:', GATEWAY_ENTITY_ID);
 
const generateSessionToken = async () => {
  try {
    const response = await axios.post(GENERATE_SESSION_TOKEN_URL, {
      device_fingerprint: {
        ip_address: '10.32.43.9',
        user_agent: 'post2'
      }
    }, {
      headers: {
        ...AUTH_HEADERS,
        'request-id': uuidv4(),
        'client-request-id': uuidv4()
      }
    });
    sessionToken = response.data.session_token;
    console.log('Session token generated:', sessionToken);
  } catch (error) {
    console.error('Failed to generate session token:', error.response ? error.response.data : error.message);
  }
};
 
const createApplication = async () => {
  try {
    const response = await axios.post(CREATE_APPS_URL, {
      landing_url: 'https://landingurl.com',
      referrer: 'https://referrer.com',
      language_code: 'ENG',
      app_source: 'PARTNER_WEBSITE_APPLY_NOW',
      subproduct_code: 'CP',
      action: 'CREATE'
    }, {
      headers: {
        ...AUTH_HEADERS,
        'request-id': uuidv4(),
        'client-request-id': uuidv4(),
        'session-token': sessionToken
      }
    });
    application_id = response.data.application_id;
    application_token = response.data.application_token;
    console.log('Application created:', application_id, application_token);
  } catch (error) {
    console.error('Failed to create application:', error.response ? error.response.data : error.message);
  }
};
 
app.post('/send-otp', async (req, res) => {
  const { phoneNumber } = req.body;
 
  try {
    const response = await axios.post(CUSTOM_OTP_API_URL, {
      //phone_number: phoneNumber,
      phone_number: '2134952367',
      last_4_ssn: '4010', 
      application_id: application_id,
      application_token: application_token
    }, {
      headers: {
        ...AUTH_HEADERS,
        'request-id': uuidv4(),
        'client-request-id': uuidv4(),
        'session-token': sessionToken
      }
    });
    res.status(200).send(response.data);
  } catch (error) {
    console.error('Failed to send OTP:', error.response ? error.response.data : error.message);
    res.status(500).send({ error: 'Failed to send OTP' });
  }
});
 
app.post('/verify-otp', async (req, res) => {
  const { phoneNumber, code } = req.body;
 
  try {
    const response = await axios.post(VERIFY_OTP_API_URL, {
      //passcode: code,
      passcode: '101010',
      application_id: application_id
    }, {
      headers: {
        ...AUTH_HEADERS,
        'request-id': uuidv4(),
        'client-request-id': uuidv4(),
        'session-token': sessionToken
      }
    });
    res.status(200).send(response.data);
  } catch (error) {
    console.error('Failed to verify OTP:', error.response ? error.response.data : error.message);
    res.status(500).send({ error: 'Failed to verify OTP' });
  }
});
 
const initialize = async () => {
  await generateSessionToken();
  await createApplication();
};
 
app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
  await initialize();
});