import { Box, Container } from '@mui/material';
import Home from '../components/Home';
import { useEffect, useState } from 'react';
import { homeService } from '../services';
import NewEpidemic from '../components/NewEpidemic';
import Loading from '../common/Loading';
import VietnamCasesByDayChart from '../components/VietNamCasesByDayChart';
import ProvinceCharts from '../components/ProvinceCharts';
import ProvinceByDayChart from '../components/ProvinceByDayCharts';
const HomePage = () => {
  const [caseInfo, setCaseInfo] = useState({});
  const [caseByProvinces, setCaseByProvinces] = useState({});
  const [caseByDayOfProvinces, setCaseByDayOfProvinces] = useState({});

  useEffect(() => {
    homeService.fetchCaseInfo.then((data) => setCaseInfo(data));
    homeService.fetchCaseByProvinces.then((data) => setCaseByProvinces(data));
    homeService.fethcCaseByDayOfProvinces.then((data) => setCaseByDayOfProvinces(data));
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
        <Box mt={4}>
          <ProvinceByDayChart caseByDayOfProvinces={caseByDayOfProvinces} />
        </Box>
      </Container>
    </Box> : <Loading />
  );
};

export default HomePage;