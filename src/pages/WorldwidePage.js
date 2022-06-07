import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  useTheme,
} from '@mui/material';
import { useState, useEffect } from 'react';
import { fetchWorldwideCaseInfo } from '../services/worldwide';
import CaseCard from '../common/CaseCard';
import Loading from '../common/Loading';

const Worldwide = () => {
  const theme = useTheme();
  const [caseInfo, setCaseInfo] = useState();

  useEffect(() => {
    fetchWorldwideCaseInfo().then((data) => {
      setCaseInfo(data.data.data);
    });
  });

  return caseInfo ? (
    <Box sx={{ width: '100%', py: 4 }}>
      <Container>
        <Paper elevation={2} sx={{ p: 2, position: 'relative' }}>
          <Paper
            elevation={0}
            sx={{ backgroundColor: theme.palette.common.secondaryPaper, p: 1 }}
          >
            <Typography
              variant="h4"
              sx={{ textAlign: 'center', fontWeight: 'bold', mb: 1 }}
            >
              世界的のコロナウイルスデータ
            </Typography>
          </Paper>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <CaseCard
                type="confirmed"
                newCases={caseInfo.totalConfirmed - caseInfo.totalConfirmedLast}
                totalCases={caseInfo.totalConfirmed}
              />
            </Grid>
            <Grid item xs={12}>
              <CaseCard
                type="recovered"
                newCases={caseInfo.totalRecovered - caseInfo.totalRecoveredLast}
                totalCases={caseInfo.totalRecovered}
              />
            </Grid>
            <Grid item xs={12}>
              <CaseCard
                type="deaths"
                newCases={caseInfo.totalDeaths - caseInfo.totalDeathsLast}
                totalCases={caseInfo.totalDeathsLast}
              />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  ) : (
    <Loading />
  );
};

export default Worldwide;
