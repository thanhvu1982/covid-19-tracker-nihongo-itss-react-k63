import HomePage from '../pages/HomePage';
import WorldwidePage from '../pages/WorldwidePage';

export const routes = [
  {
    exact: true,
    path: '/',
    element: <HomePage />,
  },
  {
    exact: true,
    path: '/worldwide',
    element: <WorldwidePage />,
  },
];
