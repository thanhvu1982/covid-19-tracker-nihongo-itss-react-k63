import { Box, Container } from '@mui/material';
import Home from '../components/Home';
import { useEffect, useState } from 'react';
import { homeService } from '../services';
import NewEpidemic from '../components/NewEpidemic';

const HomePage = () => {
  const [data, setDatas] = useState({});

  useEffect(() => {
    homeService.fetchCaseInfo.then((caseInfo) => {
      const today = caseInfo.data[caseInfo.data.length - 1];
      const yesterday = caseInfo.data[caseInfo.data.length - 2];
      const isToday =
        parseInt(caseInfo.meta.lastUpdated.split(', ')[1].split('/'), 10) ===
        new Date().getDate();
      setDatas({
        isToday,
        confirmed: isToday ? today.newConfirmed : yesterday.newConfirmed,
        recovered: isToday ? today.newRecovered : yesterday.newRecovered,
        deaths: isToday ? today.newDeaths : yesterday.newDeaths,
        curing: isToday ? today.newCuring : yesterday.newCuring,
        totalConfirmed: today.totalConfirmed2020,
        totalRecovered: today.totalRecovered2020,
        totalDeaths: today.totalDeaths2020,
        totalCuring: today.totalCuring,
        lastUpdated: caseInfo.meta.lastUpdated,
        from274Confirmed: today.totalConfirmed,
        from274Deaths: today.totalDeaths,
      });
    });
  }, []);

  return (
    <Box sx={{ width: '100%', py: 4 }}>
      <Container>
        <Box>
          <Home data={data} />
        </Box>
        <Box mt={4}>
          <NewEpidemic data={data} />
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;