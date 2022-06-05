import { Button, Grid, Paper, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import {
  formatNumber,
} from '../utils/formatNumber';

const ranges = [
  {
    value: 30,
    label: '1月間',
  },
  {
    value: 60,
    label: '２月間',
  },
  {
    value: 90,
    label: '３月間',
  },
  {
    value: 1000000,
    label: '全部',
  },
];

const VietnamCasesByDayChart = ({caseInfo}) => {
  const theme = useTheme();
  const dataByDay = caseInfo;
  const [chartData, setChartData] = useState({
    dates: [],
    confirmed: [],
    deaths: [],
    recovered: [],
  });
  const [selectedRange, setSelectedRange] = useState(ranges[0]);

  function onSelectRange(range) {
    setSelectedRange(range);
  }

  useEffect(() => {
    const dates = [];
    const confirmed = [];
    const recovered = [];
    const deaths = [];
    const selectedData = dataByDay.data.slice(
      dataByDay.data.length - selectedRange.value,
    );
    selectedData.map((item) => dates.push(item.date));
    selectedData.map((item) => confirmed.push(item.newConfirmed));
    selectedData.map((item) => recovered.push(item.newRecovered));
    selectedData.map((item) => deaths.push(item.newDeaths));

    setChartData({
      dates,
      confirmed,
      deaths,
      recovered,
    });
  }, [dataByDay.data, selectedRange]);

  return (
    <Paper
      elevation={2}
      sx={{ overflow: 'hidden', py: 4, position: 'relative' }}
    >
      <Typography
        variant="h6"
        sx={{ fontWeight: 'bold', textAlign: 'center', mb: 3 }}
      >
        ベトナムのコロナウイルス状況
      </Typography>
      <Chart
        options={{
          theme: {
            mode: 'dark',
          },
          dataLabels: {
            enabled: false,
          },
          colors: [
            theme.palette.common.confirmed,
            theme.palette.common.recovered,
            theme.palette.common.deaths,
          ],
          chart: {
            id: 'chart',
            zoom: false,
            toolbar: {
              show: false,
            },
            background: 'rgba(0, 0, 0, 0)',
          },
          xaxis: {
            categories: chartData.dates,
            tickPlacement: 'on',
            tickAmount: 5,
            labels: {
              rotate: 0,
              rotateAlways: false,
            },
          },
          stroke: {
            show: true,
            curve: 'smooth',
            lineCap: 'butt',
            width: 2,
          },
          tooltip: {
            y: {
              formatter: (value) => {
                return formatNumber(value);
              },
            },
          },
        }}
        series={[
          {
            name: '感染者数',
            data: chartData.confirmed,
          },
          {
            name: '回復者数',
            data: chartData.recovered,
          },
          {
            name: '死亡者数',
            data: chartData.deaths,
          },
        ]}
        type="area"
      />
      <Grid container spacing={2} sx={{ width: '100%', px: 2, mt: 2 }}>
        {ranges.map((item) => (
          <Grid item xs={3} key={item.value}>
            <Button
              variant={
                selectedRange.value === item.value ? 'contained' : 'outlined'
              }
              fullWidth
              onClick={() => onSelectRange(item)}
            >
              {item.label}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default VietnamCasesByDayChart;