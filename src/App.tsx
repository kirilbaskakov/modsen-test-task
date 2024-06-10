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
      {routes.map(({ path, element }) => (
        <Route path={path} element={element()} />
      ))}
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
