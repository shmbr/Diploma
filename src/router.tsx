import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import NotFound from "./routes/NotFound";
import {
  ABOUT_ROUTE,
  API_ROUTE,
  HOME_ROUTE,
  NOT_FOUND_ROUTE,
  PLAYGROUND_ROUTE,
  THEME_ROUTE,
} from "./routes";
import Playground from "./routes/Playground";
import Api from "./routes/Api";
import Theme from "./routes/Theme";
import MainLayout from "./layouts/MainLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout/>}>
      <Route index element={<Home />} />
      <Route path={HOME_ROUTE} element={<Home />} />
      <Route path={ABOUT_ROUTE} element={<About />} />
      <Route path={PLAYGROUND_ROUTE} element={<Playground />} />
      <Route path={THEME_ROUTE} element={<Theme />} />
      <Route path={API_ROUTE} element={<Api />} />
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
