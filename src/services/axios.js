import axios from 'axios';
import { config } from '../configs/config';

const client = axios.create({});
client.interceptors.response.use(({ data }) => data);

export const axiosKompaClient = axios.create({
  baseURL: config.kompaApi,
  headers: {
    accept: '*/*',
    'accept-language': 'vi,en-US;q=0.9,en;q=0.8',
    'content-type': 'application/json',
    referrer: 'https://corona.kompa.ai/',
    referrerPolicy: 'strict-origin-when-cross-origin',
    mode: 'cors',
    credentials: 'omit',
  },
});

export { client };
