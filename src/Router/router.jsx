import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Auth/Register";
import Login from "../Auth/Login";
import JobDetails from "../Pages/Job Details/JobDetails";
import PrivateRoute from "../Pages/Private Route/PrivateRoute";
import JobApply from "../Pages/Job Apply/JobApply";
import MyApplications from "../Pages/My Applications/MyApplications";
import AddJob from "../Pages/Add Job/AddJob";
import MyPostedJobs from "../Pages/My Posted Jobs/MyPostedJobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h2>Route not found</h2>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/signIn",
        element: <Login />,
      },
      {
        path: "/jobs/:id",
        element: (
          <PrivateRoute>
            <JobDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://job-portal-server-five-rho.vercel.app/jobs/${params.id}`),
      },
      {
        path: "/job-apply/:id",
        element: (
          <PrivateRoute>
            <JobApply />
          </PrivateRoute>
        ),
      },
      {
        path: "/myApplications",
        element: (
          <PrivateRoute>
            <MyApplications />
          </PrivateRoute>
        ),
      },
      {
        path: "/addJob",
        element: (
          <PrivateRoute>
            <AddJob />
          </PrivateRoute>
        ),
      },
      {
        path:'/myPostedJob',
        element:<PrivateRoute>
          <MyPostedJobs/>
        </PrivateRoute>
      }
    ],
  },
]);

export default router;
