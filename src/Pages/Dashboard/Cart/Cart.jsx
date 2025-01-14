import { FaTrashAlt } from "react-icons/fa";
import UseCart from "../../../Hocks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hocks/useAxiosSecure";


const Cart = () => {
  const [cart, refetch] = UseCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0)
  const axiosSecure = useAxiosSecure();

  const handleDelete = id =>{
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
        axiosSecure.delete(`cart/${id}`)
        .then(res=> {
          if(res.data.deletedCount > 0){
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
  }
  return (
    <div>
      <div className="flex justify-evenly">
        <h2 className="text-4xl">Items {cart.length}</h2>
        <h2 className="text-4xl">Total Price {totalPrice}</h2>
        <button className="btn btn-primary">Pay</button>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                #
              </th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              cart.map((item, index) => <tr key={index}>
                <th>
                  {index + 1}
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {item.name}
                </td>
                <td>{item.price}$</td>
                <th>
                  <button onClick={()=>handleDelete(item._id)} className="btn btn-ghost btn-lg text-red-500"><FaTrashAlt></FaTrashAlt></button>
                </th>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Cart;
