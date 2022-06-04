import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import { routes } from './routes/publicRoute';
import { ThemeProvider } from '@mui/material/styles';
import theme from './themes/defaultTheme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <DefaultLayout>
          <Routes>
            {routes.map((route) => (
              <Route key={route.path} {...route} />
            ))}
          </Routes>
        </DefaultLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
