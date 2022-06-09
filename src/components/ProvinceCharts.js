import { Box, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import Loading from '../common/Loading';
import ProvinceChart from './ProvinceChart';

const ProvinceCharts = ({ caseByProvinces }) => {
  const dataByMap = caseByProvinces;
  const [chartsData, setChartsData] = useState({
    confirmed: {
      provinces: [],
      cases: [],
    },
    deaths: {
      provinces: [],
      cases: [],
    },
  });

  useEffect(() => {
    const caseByMap = JSON.parse(JSON.stringify(dataByMap.data));
    const topFiveByConfirmed = caseByMap
      .sort((a, b) => a.confirmed - b.confirmed)
      .slice(Math.max(caseByMap.length - 5, 1));
    const topFiveByDeaths = caseByMap
      .sort((a, b) => a.deaths - b.deaths)
      .slice(Math.max(caseByMap.length - 5, 1));

    const provincesByConfirmed = topFiveByConfirmed.map((item) => item.name);
    const casesByConFirmed = topFiveByConfirmed.map((item) => item.confirmed);
    const provincesByDeaths = topFiveByDeaths.map((item) => item.name);
    const casesByDeaths = topFiveByDeaths.map((item) => item.deaths);

    setChartsData({
      confirmed: {
        provinces: provincesByConfirmed.reverse(),
        cases: casesByConFirmed.reverse(),
      },
      deaths: {
        provinces: provincesByDeaths.reverse(),
        cases: casesByDeaths.reverse(),
      },
    });
  }, [dataByMap.data]);

  return (
    <Grid container spacing={4}>
      <Grid item xs={6}>
        <Box sx={{ position: 'relative' }}>
          <Loading hide={!dataByMap.loading} />
          <ProvinceChart
            title="感染者数が一番多い県"
            cases={chartsData.confirmed.cases}
            provinces={chartsData.confirmed.provinces}
          />
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box sx={{ position: 'relative' }}>
          <Loading hide={!dataByMap.loading} />
          <ProvinceChart
            title="死亡者数が一番多い県"
            cases={chartsData.deaths.cases}
            provinces={chartsData.deaths.provinces}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProvinceCharts;
