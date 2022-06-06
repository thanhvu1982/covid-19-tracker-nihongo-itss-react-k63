import { Box, Grid, Paper, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CaseCard from '../common/CaseCard';

const Home = ({ caseInfo }) => {
  const theme = useTheme();
  const today = caseInfo.data[caseInfo.data.length - 1];
  const yesterday = caseInfo.data[caseInfo.data.length - 2];
  const isToday =
    parseInt(caseInfo.meta.lastUpdated.split(', ')[1].split('/'), 10) ===
    new Date().getDate();
  const data = {
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
  };
  return (
    <Paper elevation={2} sx={{ p: 2, position: 'relative' }}>
      <Paper
        elevation={0}
        sx={{ backgroundColor: theme.palette.common.secondaryPaper, p: 1 }}
      >
        <Typography
          variant="h4"
          sx={{ textAlign: 'center', fontWeight: 'bold', mb: 1 }}
        >
          ベトナムのコロナウイルスデータ
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ textAlign: 'center', fontWeight: 'bold' }}
        >
          更新: {data.lastUpdated}
        </Typography>
      </Paper>
      <Box pt={2}>
        <Typography
          variant="h6"
          color="primary"
          sx={{ fontWeight: 'bold', textAlign: 'center', mb: 2 }}
        >
          2020年の始めから今にかけてのデータ
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <CaseCard
              type="confirmed"
              newCases={data.confirmed}
              totalCases={data.totalConfirmed}
              isToday={data.isToday}
            />
          </Grid>
          <Grid item xs={6}>
            <CaseCard
              type="recovered"
              newCases={data.recovered}
              totalCases={data.totalRecovered}
              isToday={data.isToday}
            />
          </Grid>
          <Grid item xs={6}>
            <CaseCard
              type="deaths"
              newCases={data.deaths}
              totalCases={data.totalDeaths}
              isToday={data.isToday}
            />
          </Grid>
          <Grid item xs={6}>
            <CaseCard
              type="curing"
              newCases={data.curing}
              totalCases={data.totalCuring}
              isToday={data.isToday}
            />
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default Home;
