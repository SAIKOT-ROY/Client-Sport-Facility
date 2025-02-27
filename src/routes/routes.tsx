
import Facality from "@/pages/Facality/Facality";
import MainLayout from "../MainLayout";
import Home from "../pages/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import Register from "@/pages/Register/Register";
import Login from "@/pages/Login/Login";
import MainDashboard from "@/pages/Dashboard/MainDashboard";
import BookingManagement from "@/pages/BookingManagement/BookingManagement";
import FacalityManagement from "@/pages/FacalityManagement/FacalityManagement";
import ManageUser from "@/pages/ManageUser/ManageUser";
import CreateAdmin from "@/pages/CreateAdmin/CreatAdmin";
import Contact from "@/pages/Contact/Contact";
import AboutUs from "@/pages/AboutUs/AboutUs";


const routs = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout />,
        children:[
            {
                path:'/',
                element:<Home />
            },
            {
                path:'/facality',
                element:<Facality />
            },
            {
                path:'/contsct',
                element:<Contact />
            },
            {
                path:'/about-us',
                element:<AboutUs />
            },
            {
                path:'/login',
                element:<Login />
            },
            {
                path:'/register',
                element:<Register />
            },
        ]
    },
    {
        path: '/dashoard',
        element: <MainDashboard />,
        children:[
            {
                path:'manage-user',
                element:<ManageUser/>
            },
            {
                path:'booking-management',
                element:<BookingManagement/>
            },
            {
                path:'facality-management',
                element:<FacalityManagement/>
            },
            {
                path:'create-admin',
                element:<CreateAdmin />
            },
        ]
    }
])

export default routs