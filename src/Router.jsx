import { createBrowserRouter } from "react-router-dom";
import Red from "./Red";
import Blue from "./Blue";
import Home from "./Home";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/blue", element: <Blue /> },
      { path: "/red", element: <Red /> },
    ],
  },
]);

export default router;
