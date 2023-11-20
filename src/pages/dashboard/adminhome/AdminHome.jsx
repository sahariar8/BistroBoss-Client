import React from 'react';
import useAuth from '../../../assets/hooks/useAuth';
import useAxios from '../../../assets/hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import { FaMoneyBill, FaMoneyBillWave, FaTruck, FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';

const AdminHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxios();

    const { data:stats } = useQuery({
        queryKey:['stats'],
        queryFn: async ()=>{
            const res = await axiosSecure.get('/admin-stats');
            console.log(res.data);
            return res.data;
        }
    })


    return (
      <div>
        <h1 className="text-3xl font-bold">
          Hi, Welcome Back{" "}
          <span className="text-orange-400 ml-2">{user?.displayName}</span>{" "}
        </h1>
        <div className="grid md:grid-cols-4 py-10 gap-5">
            {/* card */}
          <div className="stats shadow">
            <div className="stat bg-rose-400">
              <div className="text-xl font-bold text-center">Total User</div>
              <div className="stat-value flex justify-evenly items-center">
                    <h1><FaUsers/></h1>
                    <h1>{stats.totalUser}</h1>
              </div>
              
            </div>
          </div>
          {/* card */}
            {/* card */}
          <div className="stats shadow">
            <div className="stat bg-green-400">
              <div className="text-xl font-bold text-center">Total Menu</div>
              <div className="stat-value flex justify-evenly items-center">
                    <h1><FaUtensils/></h1>
                    <h1>{stats.totalMenu}</h1>
              </div>
              
            </div>
          </div>
          {/* card */}
            {/* card */}
          <div className="stats shadow">
            <div className="stat bg-yellow-400">
              <div className="text-xl font-bold text-center">Total Order</div>
              <div className="stat-value flex justify-evenly items-center">
                    <h1><FaTruck/></h1>
                    <h1>{stats.totalOrder}</h1>
              </div>
              
            </div>
          </div>
          {/* card */}
            {/* card */}
          <div className="stats shadow">
            <div className="stat bg-blue-400">
              <div className="text-xl font-bold text-center">Total Revenue</div>
              <div className="stat-value flex justify-evenly items-center">
                    <h1><FaWallet className=''/></h1>
                    <h1>{stats.revenue}</h1>
              </div>
              
            </div>
          </div>
          {/* card */}
           
        </div>
      </div>
    );
};

export default AdminHome;