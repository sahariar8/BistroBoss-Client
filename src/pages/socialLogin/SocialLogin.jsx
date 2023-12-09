
import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../provider/ContextProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../assets/hooks/useAxiosPublic";


const SocialLogin = () => {

    const {googleSign} = useContext(AuthContext);
    console.log(googleSign);
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic() ;

    const handleGoogle = () =>{
      console.log("first")
        googleSign().then(result=>{
          console.log(result.user);
          
          const userInfo = {
            name : result.user?.displayName,
            email : result.user?.email,
            subscription: 'no', 
          }
          console.log(userInfo);
          // axiosPublic.post('/users',userInfo)
          // .then(res=>{
          //   console.log(res.data);
          // })
          
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
          navigate('/');
        })
        .catch(error=>{
          console.log(error);
        })
      }

    return (
        <div>
             <div className="divider">OR</div>
             <div className='py-5 px-8'>
                <button className='btn btn-accent w-full' onClick={handleGoogle}><FaGoogle className='text-white' />Google</button>
             </div>
        </div>
    );
};

export default SocialLogin;