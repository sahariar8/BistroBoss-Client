import React, { useContext } from 'react';
import img from '../../assets/others/authentication1.png';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../provider/ContextProvider';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';


const Register = () => {
    const { user,createUser,userProfileUpdate} = useContext(AuthContext)
    const navigate = useNavigate();

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
              <title>Bistro Boss | Sign Up</title>
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
                    pattern: /^(?=.*[A-Z])(?=.*[\W_]).+$/
                     })} />
                {errors.password?.type === 'required' && <span className='text-red-600'>Password Required</span>}
                {errors.password?.type === 'minLength' && <span className='text-red-600'>Password Must be six Charecter</span>}
                {errors.password?.type === 'pattern' && <span className='text-red-600'>Password Must be One UpperCase and One Special Charecter</span>}
              </div> 
              
              <div className="form-control mt-6">
                <button  className="btn btn-primary" type='submit'>Register</button>
              </div>
              <div className='flex justify-between px-5'>
                <h1>Already Have an Account?</h1>
                <h2 className='text-primary'><Link to='/login'>Login</Link></h2>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;