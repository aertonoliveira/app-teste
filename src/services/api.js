import axios from 'axios';
//import { REACT_APP_BASE_URL } from 'react-native-dotenv';

//const url = REACT_APP_BASE_URL;

//const url = 'http://192.168.2.107:3333';

const url = 'http://54.207.48.180:3333';

let headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  Accept: 'application/json',
};

let api = axios.create({
  baseURL: url,
  headers: headers,
});

export default api;
