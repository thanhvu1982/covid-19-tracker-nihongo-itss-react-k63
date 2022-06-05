import { config } from '../configs/config';
import { client } from './axios';

const fetchCaseInfo = client.get(config.caseByDay);
const fetchCaseByProvinces = client.get(config.caseByProvince)
const fethcCaseByDayOfProvinces = client.get(config.caseByDayOfProvinces)

export default {
  fetchCaseInfo,
  fetchCaseByProvinces,
  fethcCaseByDayOfProvinces
};
