import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/ContextProvider';
import Swal from 'sweetalert2';
import useCart from '../../assets/hooks/useCart';

const Header = () => {

  const {user,logOut} = useContext(AuthContext);
  const [cart] = useCart();
  const navigate = useNavigate();

  const handleLogOut = () =>{

         logOut()
         .then(()=>{
          Swal.fire({
            title: "Successfully Log Out",
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
          navigate('/login');
         })
         .catch(error=>{
          console.log(error);
         })

  }
    const item = (
      <>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/our-menu">Our-Menu</Link>
        </li>
        <li>
          <Link to="/order/Salad">Order Food</Link>
        </li>
        <li>
          <Link to="/secret">Secret</Link>
        </li>
        <li>
          <Link to='/dashboard/cart'>
             
              Chart
                <div className="badge badge-secondary ml-1">+{cart.length}</div>
             
          </Link>
        </li>
      </>
    );
    return (
        <div className="navbar fixed z-[10] md:text-white bg-black bg-opacity-50 max-w-screen-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             {item}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {item}
          </ul>
        </div>
        <div className="navbar-end">
        {
                      user?
                      <>
                      <h1>{user?.displayName}</h1>
                      <li>
                      <button className='btn btn-ghost normal-case btn-sm' onClick={handleLogOut}>LogOut</button>
                      </li>
                      </>
                      :
                      <>
                       <li><Link to="/login">Login</Link></li>
                      </>
                    }
        </div>
      </div>
    );
};

export default Header;