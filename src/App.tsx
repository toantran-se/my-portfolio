import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { PATHS } from './configs';
import { Home } from './containers';

const router = createBrowserRouter([
  {
    path: PATHS.home,
    element: <Home />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
