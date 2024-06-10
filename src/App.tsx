import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromChildren,
} from 'react-router-dom';
import Layout from '#components/Layout/Layout';
import routes from './routes';

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<Layout />}>
      {routes.map((route) => (
        <Route path={route.path} element={<route.element />} />
      ))}
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
