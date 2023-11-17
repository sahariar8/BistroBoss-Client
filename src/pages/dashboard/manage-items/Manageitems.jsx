import React from 'react';
import SectionTitle from '../../shared/SectionTitle';
import useMenu from '../../../assets/hooks/useMenu';
import { FaEdit, FaTrash } from 'react-icons/fa';
import useAxios from '../../../assets/hooks/useAxios';
import Swal from 'sweetalert2';

const Manageitems = () => {
    const [menu, ,refetch] = useMenu();
    const axiosSecure = useAxios();

   const handleDelete = item =>{
        console.log(item);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then( async(result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`);
                console.log(res.data);
                if(res.data.deletedCount > 0){
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: `${item.name} has been deleted.`,
                        icon: "success"
                      });
                }
               
              
            }
          });
   }

   const handleEdit = id =>{

   }
    return (
      <div>
        <SectionTitle
          heading="Manage All Items"
          subHeading="Hurry UP"
        ></SectionTitle>
        <div className="pt-10">
          <div className="overflow-x-auto">
            <h1 className="text-2xl md:text-3xl py-3 font-semibold text-slate-600">
              Total Items: {menu.length}
            </h1>
            <table className="table">
              {/* head */}
              <thead className="bg-orange-300  text-base">
                <tr>
                  <th>#sl</th>
                  <th>Name</th>
                  <th>image</th>
                  <th>price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="text-slate-600">
                {menu.map((item, index) => (
                  <tr key={item._id}>
                    <th>
                      <label>{index + 1}</label>
                    </th>
                    <th>{item.name}</th>
                    <td>
                      <div className="avatar">
                        <div className="w-12">
                          <img src={item.image} />
                        </div>
                      </div>
                    </td>
                    <td>$ {item.price}</td>
                    <th className="flex gap-2 items-center">
                      <button
                        className="btn btn-warning btn-xs text-white"
                          onClick={() => handleEdit(item)}
                      >
                       <FaEdit className='text-lg'/>Edit
                      </button>
                      <button
                        className="btn btn-error btn-xs text-white"
                          onClick={() => handleDelete(item)}
                      >
                        Delete<FaTrash className='text-lg'/>
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};

export default Manageitems;