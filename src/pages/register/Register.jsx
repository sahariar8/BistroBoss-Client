import React, { useContext } from 'react';
import img from '../../assets/authentication.gif';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../provider/ContextProvider';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../assets/hooks/useAxiosPublic';
import SocialLogin from '../socialLogin/SocialLogin';


const Register = () => {
    const { createUser,userProfileUpdate,logOut} = useContext(AuthContext)
    const navigate = useNavigate();
    const axiosPublic =useAxiosPublic();

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit = (data) =>{
        console.log(data);
        createUser(data.email,data.password)
        .then(result=>{
          const loggedUser = result.user;
          console.log(loggedUser);
          userProfileUpdate(data.name,data.photo)
          .then(()=>{
            console.log('user profile Updated')

            const userInfo = { name:data.name,email:data.email };
            axiosPublic.post('/users',userInfo)
            .then(res=>{
              console.log(res.data);
              if(res.data.insertedId){
                Swal.fire({
                  title: "Resgistration Successfully Done",
                  showClass: {
                    popup: `
                      animate__animated
                      animate__fadeInUp
                      animate__faster
                    `
                  },
                  hideClass: {
                    popup: `
                      animate__animated
                      animate__fadeOutDown
                      animate__faster
                    `
                  }
                });
                navigate('/login')
              }
  
            })
           
          })
          .catch(error=>console.log(error))
         
        })
        .catch(error=>{
          console.log(error.message);
        })
      };

    return (
        <div className="hero min-h-screen max-w-screen-xl mx-auto">
          <Helmet>
          <Helmet>
            <title>Sahariar's Dine | Register</title>
        </Helmet>
          </Helmet>
        <div className="hero-content flex-col lg:flex-row-reverse md:px-10">
          <div className="text-center md:w-1/2 lg:text-left pt-10 md:pt-0">
                <img src={img} alt=""/>
          </div>
          <div className="card shadow-2xl md:w-1/2 md:px-10 w-full">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)} >
            <h1 className="text-3xl md:text-5xl font-bold text-center text-yellow-500">Register Now</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Your Name" className="input input-bordered"  {...register("name", { required: true })}/>
                {errors.name && <span className='text-red-600'>Name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input type="text" placeholder="Your PhotoUrl" className="input input-bordered"  {...register("photo", { required: true })}/>
                {errors.photo && <span className='text-red-600'>Photo Url is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" className="input input-bordered"  placeholder="Email" {...register("email", { required: true })} />
                {errors.email && <span className='text-red-600'>Email is required</span>}
              </div> 
        <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password"  className="input input-bordered"
                  placeholder="password" 
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])[A-Za-z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]{6,}$/}
                    )} />
                {errors.password?.type === 'required' && <span className='text-red-600'>Password Required</span>}
                {errors.password?.type === 'minLength' && <span className='text-red-600'>Password Must be six Charecter</span>}
                {errors.password?.type === 'pattern' && <span className='text-red-600'>Password Must be One UpperCase,one numeric number and One Special Charecter</span>}
              </div> 
              
              <div className="form-control mt-6">
                <button  className="btn btn-primary" type='submit'>Register</button>
              </div>
              <div className='flex justify-between px-5'>
                <h1>Already Have an Account?</h1>
                <h2 className='text-primary'><Link to='/login'>Login</Link></h2>
              </div>
            </form>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    );
};

export default Register;