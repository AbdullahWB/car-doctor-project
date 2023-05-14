import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import Checkout from "../../Pages/Checkout/Checkout";
import CheckoutForm from "../../Pages/Checkout/CheckoutForm";
import Booking from "../../Pages/Booking/Booking";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/checkout/:id',
                element: <PrivetRoute><Checkout></Checkout></PrivetRoute>,
                loader: ({params}) => fetch(`http://localhost:3000/services/${params.id}`)
            },
            {
                path: '/checkoutForm/:id',
                element: <PrivetRoute><CheckoutForm></CheckoutForm></PrivetRoute>, 
                loader: ({params}) => fetch(`http://localhost:3000/services/${params.id}`)
            },
            {
                path: '/bookings',
                element: <PrivetRoute><Booking></Booking></PrivetRoute>
            }
        ]
    }
])

export default router;