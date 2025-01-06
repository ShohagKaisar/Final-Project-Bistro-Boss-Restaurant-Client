import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem";


const MenuCategory = ({items, title, img}) => {
  return (
    <div className="pt-8">
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 mb-12 mt-16">
        {
          items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
        }
      </div>
      <Link to={`/order/${title}`}><button className="border-b-4 border-black rounded-b-lg px-4 py-2 hover:bg-black hover:rounded-t-lg hover:font-bold hover:text-white">Order Now</button></Link>
    </div>
  );
};

export default MenuCategory;