import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUber, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {

  const isAdmin = true;
  return (
    <div className="flex">
      {/* Dashboard side bar */}
      <div className="w-64 min-h-screen bg-orange-500">
        <ul className="menu">
          {
            isAdmin ? <>
              <li>
              <NavLink to={'/dashboard/adminhome'}><FaHome></FaHome>Admin Home</NavLink>
            </li>
              <li>
                <NavLink to={'/dashboard/additems'}><FaUtensils></FaUtensils>Add Items</NavLink>
              </li>
              <li>
                <NavLink to={'/dashboard/manageitems'}><FaList></FaList>Manage Item</NavLink>
              </li>
              <li>
                <NavLink to={'/dashboard/bookings'}><FaBook></FaBook>Manage Bookings</NavLink>
              </li>
              <li>
                <NavLink to={'/dashboard/users'}><FaUber></FaUber>All Users</NavLink>
              </li>
            </> :
              <>
                <li>
                  <NavLink to={'/dashboard/userhome'}><FaHome></FaHome>User Home</NavLink>
                </li>
                <li>
                  <NavLink to={'/dashboard/reservation'}><FaCalendar></FaCalendar>Reservation</NavLink>
                </li>
                <li>
                  <NavLink to={'/dashboard/cart'}><FaShoppingCart></FaShoppingCart>My Cart</NavLink>
                </li>
                <li>
                  <NavLink to={'/dashboard/review'}><FaAd></FaAd>Add a Review</NavLink>
                </li>
                <li>
                  <NavLink to={'/dashboard/bookings'}><FaList></FaList>My Bookings</NavLink>
                </li>
              </>
          }
          {/* Shared Navlink */}
          <div className="divider"></div>
          <li>
            <NavLink to={'/'}><FaHome></FaHome>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/order/salad'}><FaSearch></FaSearch>Menu</NavLink>
          </li>
          <li>
            <NavLink to={'/order/contact'}><FaEnvelope></FaEnvelope>Contact</NavLink>
          </li>
        </ul>
      </div>
      {/* Dashboard content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default Dashboard;
