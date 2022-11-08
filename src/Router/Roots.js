import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blog from '../Components/Blog/Blog';
import Login from '../Components/Login/Login';
import Main from '../Components/Main/Main';
import MainService from '../Components/mainService/MainService';
import Register from '../Components/Register/Register';
import Home from '../Components/Home/Home';
const Roots = () => {
    const router = createBrowserRouter([
        {path:'/', element: <Main></Main>, children: [
            {path: 'home', element: <Home></Home>},
            {path: 'Blog', element: <Blog></Blog>},
            {path: 'login', element: <Login></Login>},
            {path: "Register", element: <Register></Register>},
            {path: 'Services', element: <MainService></MainService>}
        ]},
        
    ])
    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
};

export default Roots;