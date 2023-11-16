import useAdmin from "../assets/hooks/useAdmin";
import useAuth from "../assets/hooks/useAuth";


const AdminRoutes = ({children}) => {
    const [isAdmin,isAdminLoading] = useAdmin();
    const { user,loading } = useAuth();

    if(loading || isAdminLoading){
        return <span className="loading loading-dots loading-lg"></span>
    }
    if( user && isAdmin ){
        return children;
    }
    return <Navigate  to='/login' state={{from: location}} replace ></Navigate>

};

export default AdminRoutes;