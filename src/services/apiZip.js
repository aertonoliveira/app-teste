import axios from 'axios';

const apiZip = axios.create({
  baseURL: 'https://viacep.com.br/ws/',
});

export default apiZip;
