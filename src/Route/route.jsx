import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import PageNotFound from "../Components/PageNotFound";
import LoginPage from "../Pages/Registration";
import Registration from "../Pages/Registration";
import Login from "../Pages/Login";
import AddServiceForm from "../Components/AddServiceForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [



    ]
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: 'registration',
    element: <Registration></Registration>
  },
  ,
  {
    path: '/addServiceForm',
    element: <AddServiceForm></AddServiceForm>
  },
  {
    path: '*',
    element: <PageNotFound></PageNotFound>
  }
]);

export default router