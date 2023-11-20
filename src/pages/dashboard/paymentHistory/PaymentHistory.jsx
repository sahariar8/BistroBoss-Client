import React from 'react';
import SectionTitle from '../../shared/SectionTitle';
import useAxios from '../../../assets/hooks/useAxios';
import useAuth from '../../../assets/hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import { FaTrash } from 'react-icons/fa';

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxios();
    const { data: payments = [] } = useQuery({
        queryKey:['payments',user.email],
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    }) 
  
    return (
        <div>
           <SectionTitle heading='Payment History' subHeading='at a glance'></SectionTitle>
           <div className='pt-10'>
          <div className="overflow-x-auto">
          <h1 className='font-bold'>Total Payment : <span className='text-orange-400 '>{payments.length}</span></h1>
            <table className="table">
              
              {/* head */}
              <thead>
                <tr>
                  <th>#sl</th>
                  <th>Email</th>
                  <th>Price</th>
                  <th>transaction Id</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
               
               {
                    payments.map((item,index)=> <tr key={item._id}> 
                        <th>
                          <label>
                            {index +1}
                          </label>
                        </th>
                        <td>
                          {item.email}
                        </td>
                        <td>$ {item.price}</td>
                        <td>{item.transactionId}</td>
                        <td> {item.date}</td>
                      <td>
                      <button className='btn btn-sm btn-warning'> {item.status}</button>
                      </td>
                      </tr>)
               }

                
              </tbody>
            </table>
          </div>
        </div>
        </div>
    );
};

export default PaymentHistory;