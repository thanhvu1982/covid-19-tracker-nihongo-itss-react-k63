import { axiosKompaClient } from '../services/axios';

export const fetchWorldwideCaseInfo = async () => {
  const query = {
    operationName: 'totalConfirmed',
    variables: {},
    query: `
      query totalConfirmed {
        totalConfirmed
        totalConfirmedLast
        totalRecovered
        totalRecoveredLast
        totalDeaths
        totalDeathsLast
      }
    `,
  };
  return axiosKompaClient.post('/', JSON.stringify(query));
};
