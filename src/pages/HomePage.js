import { Box, Container } from '@mui/material';
import Home from '../components/Home';
import { useEffect, useState } from 'react';
import { homeService } from '../services';
import NewEpidemic from '../components/NewEpidemic';
import Loading from '../common/Loading';
import VietnamCasesByDayChart from '../components/VietNamCasesByDayChart';
import ProvinceCharts from '../components/ProvinceCharts';

const HomePage = () => {
  const [caseInfo, setCaseInfo] = useState({});
  const [caseByProvinces, setCaseByProvinces] = useState({});

  useEffect(() => {
    homeService.fetchCaseInfo.then((data) => setCaseInfo(data));
    homeService.fetchCaseByProvinces.then((data) => setCaseByProvinces(data));
  }, []);

  return (
    caseInfo.data ? 
    <Box sx={{ width: '100%', py: 4 }}>
      <Container>
        <Box>
          <Home caseInfo={caseInfo} />
        </Box>
        <Box mt={4}>
          <NewEpidemic caseInfo={caseInfo} />
        </Box>
        <Box mt={4}>
          <VietnamCasesByDayChart caseInfo={caseInfo} />
        </Box>
        <Box mt={4}>
          <ProvinceCharts caseByProvinces={caseByProvinces} />
        </Box>
      </Container>
    </Box> : <Loading />
  );
};

export default HomePage;