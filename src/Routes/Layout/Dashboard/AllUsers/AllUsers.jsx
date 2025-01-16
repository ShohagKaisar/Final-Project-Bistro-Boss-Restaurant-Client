import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hocks/useAxiosSecure";
import { FaTrashAlt, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/users');
      return res.data;
    }
  })

  const handleDelete = (user) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`)
          .then(res => {
            console.log(res.data);
            if (res.data.deletedCount > 0) {
              // Refetch data 
              refetch();
              swalWithBootstrapButtons.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          })
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error"
        });
      }
    });
  };

  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`)
      .then(res => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is an admin now !`,
            showConfirmButton: false,
            timer: 1500
          });
          refetch();
        }
    })
  }

  return (
    <div>
      <div className="flex justify-evenly">
        <h2 className="text-3xl">All Users</h2>
        <h2 className="text-3xl">Total User: {users.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, index) => <tr key={index}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {
                    user.role === 'admin' ? "Admin" :
                      <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost btn-lg bg-orange-500 text-white"><FaUser></FaUser></button>
}
                </td>
                <td>
                  <button onClick={() => handleDelete(user)} className="btn btn-ghost btn-lg text-red-500"><FaTrashAlt></FaTrashAlt></button>
                </td>
              </tr>)
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;