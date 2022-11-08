import { RouterProvider } from 'react-router-dom';

import Route from './Routes/Route';

function App() {

  const router = Route();

  return (
    <RouterProvider router={router}>

    </RouterProvider>
  );
}

export default App;
