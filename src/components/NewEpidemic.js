import { Grid, Paper, Typography } from '@mui/material';
import CaseCard from '../common/CaseCard';

const NewEpidemic = ({ caseInfo }) => {
  const today = caseInfo.data[caseInfo.data.length - 1];
  const data = {
    from274Confirmed: today.totalConfirmed,
    from274Deaths: today.totalDeaths,
  };
  return (
    <Paper elevation={2} sx={{ p: 2, position: 'relative' }}>
      {/* <Loading hide={!homeState.dataByDay.loading} /> */}
      <Typography
        variant="h6"
        color="primary"
        sx={{ fontWeight: 'bold', textAlign: 'center', mb: 4, mt: 2 }}
      >
        2021/04/27から今にかけてのデータ
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <CaseCard
            type="confirmed"
            hideNew
            totalCases={data?.from274Confirmed}
          />
        </Grid>
        <Grid item xs={6}>
          <CaseCard type="deaths" hideNew totalCases={data?.from274Deaths} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default NewEpidemic;
