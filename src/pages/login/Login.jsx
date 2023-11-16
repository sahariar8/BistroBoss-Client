import React, { useContext, useEffect, useState } from 'react';
import img from '../../assets/others/authentication1.png';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../provider/ContextProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogin from '../socialLogin/SocialLogin';

const Login = () => {

    const {login} = useContext(AuthContext)
    const [disabled,setDisabled] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();
    console.log('from order',location);

    const from = location.state?.from?.pathname || "/";

    // if(loading){
    //   return <span className="loading loading-dots loading-lg"></span>
    // }

   
    
    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])

    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email =form.email.value;
        const password =form.password.value;
        console.log(email,password);
        login(email,password)
        .then(result=>{
          const user = result.user;
          console.log(user);
          Swal.fire({
            title: "User Login SucessFully",
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
          navigate(from, { replace: true });
        })
        .catch(err=>{
          console.log(err.message);
        })


    }

    const handleValidCaptcha = (e) =>{
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)==true) {
           setDisabled(false)
        }
   
        else {
            alert('Captcha Does Not Match');
            setDisabled(true)
        }
    }

    return (
        <div className="hero min-h-screen max-w-screen-xl mx-auto">
        <div className="hero-content flex-col lg:flex-row-reverse md:px-10">
          <div className="text-center md:w-1/2 lg:text-left pt-10 md:pt-0">
                <img src={img} alt=""/>
          </div>
          <div className="card shadow-2xl md:w-1/2 md:px-10 w-full">
            <form className="card-body" onSubmit={handleLogin}>
            <h1 className="text-3xl md:text-5xl font-bold text-center text-yellow-500">Login now</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' className="input input-bordered"  placeholder="password" required />
              </div> 
              <div className="form-control">
                <label className='label'>
                <LoadCanvasTemplate />
                </label>
                <input type="text" onBlur={handleValidCaptcha} name='captcha' placeholder="Type Captcha Here" className="input input-bordered"  />
                {/* <button className="btn btn-xs mt-4 normal-case" onClick={handleValidCaptcha}>Validate</button> */}

              </div>
              <div className="form-control mt-6">
                <button disabled={disabled} className="btn btn-primary" type='submit'>Login</button>
              </div>
              <div className='flex justify-between px-5'>
                <h1>Don't have an Account?</h1>
                <h2 className='text-primary'><Link to="/register">Register</Link></h2>
              </div>
            </form>
           <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    );
};

export default Login;