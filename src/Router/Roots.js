import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import Login from "../Components/Login/Login";
import Main from "../Components/Main/Main";
import MainService from "../Components/mainService/MainService";
import Register from "../Components/Register/Register";
import Home from "../Components/Home/Home";
import DetailsMore from "../Components/DetailsMore/DetailsMore";
import AddServices from "../Components/AddServices/AddServices";
import AllReviews from "../Components/AllReviews/AllReviews";
import PrivateRoute from "../Components/Private/PrivateRoute/PrivateRoute";
import Error from "../Components/Error/Error";

const Roots = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>},
      {path: '/', element:<Main></Main>,
      children: [
        { path: "home", element: <Home></Home> },
        { path: "Blog", element: <Blog></Blog> },
        { path: "login", element: <Login></Login> },
        { path: "Register", element: <Register></Register> },
        {
          path: "services",
          element: <PrivateRoute><MainService></MainService></PrivateRoute>,
          loader: () => fetch("http://localhost:5001/services"),
        },
        {
          path: "/services/:_id",
          element: <PrivateRoute><DetailsMore></DetailsMore></PrivateRoute>,
          loader: ({ params }) => fetch(`http://localhost:5001/services/${params._id}`),
        },
        {path: 'addServices', element: <AddServices></AddServices>},
        {path: 'AllReviews', element: <AllReviews></AllReviews>}
      ],
     
    },
    {path: "*", element: <Error></Error>}
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default Roots;
