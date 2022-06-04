import axios from 'axios';

const client = axios.create({});
client.interceptors.response.use(({ data }) => data);

export { client };
