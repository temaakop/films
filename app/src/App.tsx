import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage } from "./pages/main-page";
import "./App.css";
import ErrorPage from "./pages/error-pages";
import { FilmPages } from "./pages/film-pages";

import { RequestTokenPage } from "./pages/request-token-page";
import { Authorization } from "./pages/authorization-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "film-pages/:filmId",
    element: <FilmPages />,
  },
  {
    path: "request-token-page",
    element: <RequestTokenPage />,
  },
  {
    path: "/request-token-page/authorization-page",
    element: <Authorization />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
