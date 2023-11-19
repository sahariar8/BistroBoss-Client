
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
import AddItems from '../pages/dashboard/add-items/AddItems';
import AdminRoutes from './AdminRoutes';
import Manageitems from '../pages/dashboard/manage-items/Manageitems';
import UpdateItems from '../pages/dashboard/updateitems/UpdateItems';

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
            //users
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
                element:<AdminRoutes><AllUsers></AllUsers></AdminRoutes>
            },
            {
                path:'add-items',
                element:<AdminRoutes><AddItems></AddItems></AdminRoutes>  
            },
            {
                path:'manage-items',
                element:<AdminRoutes><Manageitems></Manageitems></AdminRoutes>
            },
            {
                path:'updateitem/:id',
                element:<AdminRoutes><UpdateItems></UpdateItems></AdminRoutes>,
                loader:({params}) =>fetch(`http://localhost:5000/menu/${params.id}`)
            },
        ]
    }
])
