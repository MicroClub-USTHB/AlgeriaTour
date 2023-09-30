import { useRoutes } from "react-router-dom";
import Home from "./pages";

export default function Routes() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
  ]);
  return routes;
}
