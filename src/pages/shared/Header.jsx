import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/ContextProvider';
import Swal from 'sweetalert2';
import useCart from '../../assets/hooks/useCart';
import useAdmin from '../../assets/hooks/useAdmin';

const Header = () => {

  const {user,logOut} = useContext(AuthContext);
  const [ isAdmin ] = useAdmin();
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
         {
            isAdmin && user && <Link to="/dashboard/admin-home">Dashboard</Link>
         }
         {
             user && !isAdmin && <Link to="/dashboard/user-home">Dashboard</Link>
         }
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
            user?.email ? 
              <div className="flex items-center">
                <div className="avatar online">
                  <div className="w-8 md:w-12 rounded-full">
                    <img src={user?.photoURL}/>
                  </div>
                </div>
                <h1 className="ml-1 font-semibold ">{user.displayName}</h1>
                <h1 className="btn btn-sm normal-case btn-neutral ml-2 text-base font-semibold" onClick={handleLogOut}>LogOut</h1>
                
              </div>
             : 
              <NavLink to="/login">LogIn</NavLink>
            
        }
        </div>
      </div>
    );
};

export default Header;