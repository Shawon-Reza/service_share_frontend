import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import PageNotFound from "../Components/PageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    // children: 
  },
  {
    path: '*',
    element: <PageNotFound></PageNotFound>
  }
]);

export default router