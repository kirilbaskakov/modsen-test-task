import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import Layout from "#components/Layout";
import MainPage from "#pages/MainPage";
import DetailsPage from "#pages/DetailsPage";
import FavoritesPage from "#pages/FavoritesPage";

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<Layout />}>
      <Route index element={<MainPage />} />
      <Route path="/details/:id" element={<DetailsPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
