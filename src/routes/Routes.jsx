
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../pages/Layout/Layout';
import Home from '../pages/home/Home';
import Menu from '../pages/Menu/Menu';
import Order from '../pages/order/Order';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import PrivateRoute from './PrivateRoute';
import MyOrder from '../pages/shared/MyOrder';
import Dashboard from '../pages/dashboard/Dashboard';
import Cart from '../pages/dashboard/cart/Cart';
import Reservation from '../pages/dashboard/Reservation/Reservation';
import Review from '../pages/dashboard/review/Review';
import Payment from '../pages/dashboard/payment/Payment';
import Booking from '../pages/dashboard/Booking/Booking';
import AllUsers from '../pages/dashboard/allUsers/AllUsers';

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        errorElement:<></>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/our-menu',
                element:<Menu></Menu>
            },
            {
                path:'/order/:category',
                element:<Order></Order>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'secret',
                element:<PrivateRoute><MyOrder></MyOrder></PrivateRoute>
            }
        ]
    },
    {
        path:'dashboard',
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        errorElement:<></>,
        children:[
            {
                path:'cart',
                element:<Cart></Cart>
            },
            {
                path:'reservation',
                element:<Reservation></Reservation>
            },
            {
                path:'review',
                element:<Review></Review>
            },
            {
                path:'payment',
                element:<Payment></Payment>
            },
            {
                path:'booking',
                element:<Booking></Booking>
            },
            //admin
            {
                path:'all-users',
                element:<AllUsers></AllUsers>
            }
        ]
    }
])
