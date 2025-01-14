/* eslint-disable react/prop-types */
import Swal from "sweetalert2";
import useAuth from "../../../Hocks/UseAuth";
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from './../../../Hocks/useAxiosSecure';
import UseCart from "../../../Hocks/useCart";




const FoodCard = ({ item }) => {
  const { image, price, recipe, name, _id } = item;
  const Navigate = useNavigate();
  const { user } = useAuth();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = UseCart();

  const handleAddToCart = () => {
    if (user && user.email) {
      // Send cart item to DB
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price
      }
      axiosSecure.post('/carts', cartItem)
        .then(res => {
          console.log(res.data);
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} added successfully`,
              showConfirmButton: false,
              timer: 1500
            });
            // refetch cart to update  the card items count
            refetch();
          }
        })

    } else {
      Swal.fire({
        title: "You are not login",
        text: "Please login for add to cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Please login!"
      }).then((result) => {
        if (result.isConfirmed) {
          // Send the user to the login page
          Navigate('/login', { state: { from: location } })
        }
      });
    }
  }


  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes" />
        </figure>
        <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4 rounded-lg">{price}$</p>
        <div className="card-body flex flex-col items-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button
              onClick={handleAddToCart} className="border-b-4 border-orange-500 bg-slate-300 rounded-b-lg px-4 py-2 hover:bg-black hover:text-white hover:rounded-t-lg hover:font-bold">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;