import { Box, Container } from '@mui/material';
import Home from '../components/Home';

const HomePage = () => {
  return (
    <Box sx={{ width: '100%', py: 4 }}>
      <Container>
        <Box>
          <Home />
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;