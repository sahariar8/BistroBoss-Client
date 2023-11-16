import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from "react-icons/fa";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import useAdmin from '../../assets/hooks/useAdmin';

const Dashboard = () => {

    const [isAdmin] = useAdmin();
    return (
        <div className='flex max-w-screen-xl mx-auto'>
           <div className='w-1/5 bg-orange-300 min-h-screen px-6'>
            <h1 className='text-3xl pt-6 font-bold font-slobo '>Bistro Boss</h1>
            <h2 className='text-xl font-semibold font-serif'>RESTAURENT</h2>
           <ul>
                <li className='pt-3 font-bold text-white font-serif flex items-center'> <FaHome className='mr-2'/> Admin Home</li>
           </ul>
            <ul className='menu p-4 font-semibold' >
               {
                isAdmin ? <>
                    <li><NavLink to='/dashboard/admin-home'><FaHome/>Admin Home</NavLink></li>
                    <li><NavLink to='/dashboard/add-items'><FaUtensils/>Add Items</NavLink></li>
                    <li><NavLink to='/dashboard/manage-items'><FaList/> Manage Items</NavLink></li>
                    <li><NavLink to='/dashboard/manage-bokings'><FaBook/>Manage Bookings</NavLink></li>
                    <li><NavLink to='/dashboard/all-users'><FaUsers/>All Users</NavLink></li>
                </>
                :
                <>
                    <li><NavLink to='/dashboard/reservation'><FaCalendar/>Reservation</NavLink></li>
                    <li><NavLink to='/dashboard/payment'><FaWallet/> Payment History</NavLink></li>
                    <li><NavLink to='/dashboard/cart'><FaShoppingCart/> My Cart</NavLink></li>
                    <li><NavLink to='/dashboard/review'><FaAd/>Add Review</NavLink></li>
                    <li><NavLink to='/dashboard/booking'><FaList/>My Booking</NavLink></li>
                </>
               }
               <div className="divider"></div>
                    <li><NavLink to='/'><FaHome/>Home</NavLink></li>
                    <li><NavLink to='/order/salad'><MdOutlineRestaurantMenu />Menu</NavLink></li>
                    <li><NavLink to='/contact'><FaEnvelope />Contact</NavLink></li>
               
            </ul>

           </div>
           <div className='w-4/5'>
                <div className='py-10 px-10'>
                <Outlet></Outlet>
                </div>
           </div>
        </div>
    );
};

export default Dashboard;