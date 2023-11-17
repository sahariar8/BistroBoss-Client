import React from 'react';
import SectionTitle from '../../shared/SectionTitle';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../../assets/hooks/useAxiosPublic';
import useAxios from '../../../assets/hooks/useAxios';
import Swal from 'sweetalert2';

const image_hosting_key= import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddItems = () => {
    const { register, handleSubmit,reset } = useForm()
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxios();
  const onSubmit = async(data) =>{
    console.log(data);
    //img upload to imgbb
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
        const menuRes = await axiosSecure.post('/menu',menuItem);
    console.log(menuRes.data);
    if(menuRes.data.insertedId){
        reset();
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${data.name} is added to the Menu`,
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
          heading="add an item"
          subHeading="what's new ?"
        ></SectionTitle>
        <div className="px-20 py-10 bg-slate-100">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full">
              <label className="p-2 font-bold text-slate-700">Recipe Name</label>
              <input
                className="input input-bordered w-full"
                {...register("name",{required:true})}
                placeholder="Name"
                type="text"
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="p-2 font-bold text-slate-700">Category</label>
                <select defaultValue='default' className="select select-bordered w-full max-w-xs" {...register("category",{required:true})}>
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
                  {...register("price",{required:true})}
                  placeholder="price"
                  type="number"
                />
              </div>
            </div>

            <div className="w-full">
              <label className="p-2 font-bold text-slate-700">
                Recipe Details
              </label>

              <textarea
                className="textarea textarea-bordered w-full"
                placeholder="Message"
                rows="8"
                {...register("recipe",{required:true})}
              ></textarea>
            </div>
            <input type="file" className="file-input w-full max-w-xs" {...register("image",{required:true})}/>

            <div className="mt-4">
              <button
                type="submit"
                className="rounded-lg btn btn-primary btn-block"
              >
                Add Item
              </button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default AddItems;