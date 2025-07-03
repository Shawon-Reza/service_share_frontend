import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import PageNotFound from "../Components/PageNotFound";
import LoginPage from "../Pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: 'login',
        element: <LoginPage></LoginPage>
      }
    ]
  },
  {
    path: '*',
    element: <PageNotFound></PageNotFound>
  }
]);

export default router