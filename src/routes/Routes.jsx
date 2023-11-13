
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../pages/Layout/Layout';
import Home from '../pages/home/Home';
import Menu from '../pages/Menu/Menu';
import Order from '../pages/order/Order';

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
                path:'our-menu',
                element:<Menu></Menu>
            },
            {
                path:'order/:category',
                element:<Order></Order>
            },
        ]
    }
])
