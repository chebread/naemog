import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Home from 'routes/Home';
import NotFoundPage from 'routes/NotFoundPage';

const Router = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default Router;
