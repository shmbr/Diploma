import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import NotFound from "./routes/NotFound";
import { ABOUT_ROUTE, HOME_ROUTE, NOT_FOUND_ROUTE } from "./routes";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path={HOME_ROUTE} element={<Home />} />
      <Route path={ABOUT_ROUTE} element={<About />} />
      <Route path={NOT_FOUND_ROUTE} element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  ),
  { basename: "/Diploma" }
);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
