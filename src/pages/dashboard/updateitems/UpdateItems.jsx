import React from 'react';
import { useForm } from 'react-hook-form';
import SectionTitle from '../../shared/SectionTitle';
import { useLoaderData } from 'react-router-dom';
import useAxiosPublic from '../../../assets/hooks/useAxiosPublic';
import useAxios from '../../../assets/hooks/useAxios';
import Swal from 'sweetalert2';


const image_hosting_key= import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const UpdateItems = () => {
    const {name,category,price,image,recipe,_id}= useLoaderData();
    console.log(name,category,price,image)
    const { register, handleSubmit,reset } = useForm()
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxios();
    const onSubmit = async(data)=>{
        console.log(data);
        const imagefile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api,imagefile,{
            headers:{
                'Content-Type':'multipart/form-data'
            }
        });
        if(res.data.success){
            const menuItem = {
                name: data.name,
                recipe: data.recipe,
                image: res.data.data.display_url,
                category: data.category,
                price: parseFloat(data.price),
                
            }
            const menuRes = await axiosSecure.patch(`/menu/${_id}`,menuItem);
        console.log(menuRes.data);
        if(menuRes.data.modifiedCount > 0){
            // reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.name} is Updated to the Menu`,
                showConfirmButton: false,
                timer: 1500
              });
              
        }
        console.log(res.data);
        }
        
    }
    return (
        <div>
        <SectionTitle
          heading="Update an item"
          subHeading="what's new ?"
        ></SectionTitle>
        <div className="px-20 py-10 bg-slate-100">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full">
              <label className="p-2 font-bold text-slate-700">Recipe Name</label>
              <input
                className="input input-bordered w-full"
                {...register("name")}
                placeholder="Name"
                type="text"
                defaultValue={name}
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="p-2 font-bold text-slate-700">Category</label>
                <select defaultValue={category} className="select select-bordered w-full max-w-xs" {...register("category")}>
                  <option disabled value='default'>
                   Select Category
                  </option>
                  <option value='salad' className='text-base font-semibold'>Salad</option>
                  <option value='pizza'className='text-base font-semibold'>Pizza</option>
                  <option value='soup' className='text-base font-semibold'>Soup</option>
                  <option value='dessert' className='text-base font-semibold'>Dessert</option>
                  <option value='drinks' className='text-base font-semibold'>Drinks</option>
                  
                </select>
              </div>

              <div>
                <label className="p-2 font-bold text-slate-700">Price</label>
                <input
                  className="input input-bordered w-full"
                  {...register("price")}
                  placeholder="price"
                  type="number"
                  defaultValue={price}
                />
              </div>
            </div>

            <div className="w-full">
              <label className="p-2 font-bold text-slate-700">
                Recipe Details
              </label>

              <textarea
                className="textarea textarea-bordered w-full"
                defaultValue={recipe}
                placeholder="Message"
                rows="8"
                {...register("recipe")}
              ></textarea>
            </div>
            <div className='flex'>
            <input type="file" className="file-input w-full max-w-xs" {...register("image")}/>
            <img src={image} className='w-[80px] ml-5' />
            </div>
           

            <div className="mt-4">
              <button
                type="submit"
                className="rounded-lg btn btn-primary btn-block"
              >
                Update Item
              </button>
            </div>
          </form>
        </div>
      </div>
   
    );
};

export default UpdateItems;