import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./pages/Home";

const routes = [
  {
    exact: true,
    path: "/",
    element: <Home />,
  },
];

const App = () => {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} {...route} />
          ))}
        </Routes>
      </DefaultLayout>
    </BrowserRouter>
  );
};

export default App;
