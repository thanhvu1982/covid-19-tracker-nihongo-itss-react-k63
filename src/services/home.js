import { config } from '../configs/config';
import { client } from './axios';

const fetchCaseInfo = client.get(config.caseByDay);
const fetchCaseByProvinces = client.get(config.caseByProvince)

export default {
  fetchCaseInfo,
  fetchCaseByProvinces,
};