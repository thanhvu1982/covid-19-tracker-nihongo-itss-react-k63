import { config } from '../configs/config';
import { client } from './axios';

const fetchCaseInfo = client.get(config.caseByDay);
const fetchCaseByProvinces = client.get(config.caseByProvince);
const fetchCaseByDayOfProvinces = client.get(config.caseByDayOfProvinces);


export default {
  fetchCaseInfo,
  fetchCaseByProvinces,
  fetchCaseByDayOfProvinces
};