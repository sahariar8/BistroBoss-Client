import React from 'react';
import useCart from '../../../assets/hooks/useCart';
import useAxios from '../../../assets/hooks/useAxios';
import Swal from 'sweetalert2';

const Cart = () => {

    const [cart,refetch] = useCart();
    const totalPrice = cart.reduce((total,item)=>total+item.price,0)
    const axiosSecure = useAxios();

    const handleDelete = id =>{
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
        .then(res=>{
            console.log(res.data);
            if(res.data.deletedCount > 0 ){
                
                refetch();
                Swal.fire({
                    title: "Deleted!",
                    text: "Your Order deleted Successfully",
                    icon: "success"
                  });
            }
        })
             
            }
          });
    
    }
    return (
      <div>
        <h1 className="text-5xl text-center font-bold text-orange-400">
          My Cart
        </h1>
        <div className="divider"></div>
        <div className="flex justify-evenly font-bold pt-10">
          <h1>
            Total Items : <span className="text-orange-400">{cart.length}</span>
          </h1>
          <h2>
            Total Price: <span className="text-orange-400">${totalPrice}</span>
          </h2>
          <button className="btn btn-sm normal-case bg-orange-300">Pay</button>
        </div>
        <div className='pt-10'>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>#sl</th>
                  <th>item Image</th>
                  <th>Item name</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
               
               {
                    cart.map((item,index)=> <tr>
                        <th>
                          <label>
                            {index +1}
                          </label>
                        </th>
                        <td>
                          <div className="flex items-center gap-3">
                            <div className="avatar">
                              <div className="mask mask-squircle w-12 h-12">
                                <img
                                  src={item.image}
                                  alt="Avatar Tailwind CSS Component"
                                />
                              </div>
                            </div>
                          </div>
                        </td>
                        <td> {item.name}</td>
                        <td>{item.price}</td>
                        <th className='flex gap-2'>
                          <button className="btn btn-warning btn-xs">Edit</button>
                          <button className="btn btn-error btn-xs" onClick={()=>handleDelete(item._id)}>Delete</button>
                        </th>
                      </tr>)
               }

                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};

export default Cart;