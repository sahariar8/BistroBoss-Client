import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../assets/hooks/useAxios";
import Swal from "sweetalert2";
import { FaUsers } from "react-icons/fa";

const AllUsers = () => {
  const axiosSecure = useAxios();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "User deleted Successfully",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  const handleMakeAdmin =user =>{
    console.log(user);

    axiosSecure.patch(`/users/admin/${user._id}`)
    .then(res=>{
        console.log(res.data);
        if(res.data.modifiedCount > 0){
            refetch();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${user.name} is an Admin Now`,
                showConfirmButton: false,
                timer: 1500
              });
        }
    })
}
  return (
    <div>
      <h1 className="text-3xl md:text-5xl text-center text-orange-300 font-bold">
        Manage All Users
      </h1>
      <div className="pt-10">
        <div className="overflow-x-auto">
          <h1 className="text-2xl md:text-3xl py-3 font-semibold text-slate-600">
            Total User:{users.length}
          </h1>
          <table className="table">
            {/* head */}
            <thead className="bg-orange-300  text-base">
              <tr>
                <th>#sl</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-slate-600">
              {users.map((item, index) => (
                <tr key={item._id}>
                  <th>
                    <label>{index + 1}</label>
                  </th>
                  <th>{item.name}</th>
                  <td>{item.email}</td>
                  <td>
                  {
                    item.role === "admin"? <>
                        <h1 className=" font-serif font-semibold text-red-600 p-1">admin</h1>
                    </>
                    :
                    <button
                      className="btn btn-warning btn-xs"
                      onClick={() => handleMakeAdmin(item)}
                    >
                      <FaUsers className="text-xl text-white" />
                    </button>
                  }
                  </td>
                  <th className="flex gap-2">
                    <button
                      className="btn btn-error btn-xs"
                      onClick={() => handleDelete(item._id)}
                    >
                      Delete
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
