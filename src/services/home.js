import { config } from '../configs/config';
import { client } from './axios';

const fetchCaseInfo = client.get(config.caseByDay);

export default {
  fetchCaseInfo,
};
