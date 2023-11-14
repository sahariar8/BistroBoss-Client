import React, { useEffect } from 'react';
import useMenu from '../../../assets/hooks/useMenu';
import useAuth from '../../../assets/hooks/useAuth';
import Swal from 'sweetalert2';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import useAxios from '../../../assets/hooks/useAxios';
import useCart from '../../../assets/hooks/useCart';

const FoodCards = ({item}) => {
    const { _id,name,recipe,image,price } = item;
    const {user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxios();
    const [,refetch] = useCart();
 

    const handleCart = () =>{
      if(user && user?.email){
       console.log(user.email,item);
      const cartItem = {
        menuId :_id,
        email:user.email,
        name,image,price
      }

       axiosSecure.post('/carts',cartItem)
        .then(res=>{
          console.log(res.data);
          if(res.data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} added to your cart`,
              showConfirmButton: false,
              timer: 1500
            });
            //Refetch Data
            refetch();
          }
         
        })
      
      console.log(cartItem);

      }else{
        Swal.fire({
          title: "You Are Not Logged In",
          text: "Please Login to add to this cart?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Login!"
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login',{ state:{from:location}});
            // return <Navigate state={location?.pathname} to='/login'></Navigate>
          }
        });
      }
    }
    
    return (
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" className="rounded-xl w-full" />
        </figure>
        <div className="card-body text-center">
          <h2 className="card-title justify-center font-bold text-xl">{name}</h2>
          <p className=" text-slate-500 font-semibold">
           {recipe}
          </p>
          <div className="card-actions justify-center">
            <button className="btn btn-outline border-0 border-b-4 text-yellow-500 bg-slate-50" onClick={handleCart}>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    );
};

export default FoodCards;