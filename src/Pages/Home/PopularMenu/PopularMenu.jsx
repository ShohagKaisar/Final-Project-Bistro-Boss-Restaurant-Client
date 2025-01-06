
import SectionTittle from "../../../Components/SectionTittle/SectionTittle";
import MenuItem from "../../Shared/MenuItem";
import useMenu from "../../../Hocks/useMenu";


const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter(item => item.category === 'popular')


  return (
    <>
      <section className="mb-12">
        <SectionTittle heading={"From Our Menu"}
          subHeading={"Check it out"}></SectionTittle>
      </section>
      <div className="grid md:grid-cols-2 gap-10 mb-12">
        {
          popular.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
        }
      </div>
      {/* <button className="border-b-4 border-white rounded-b-lg px-4 py-2 hover:bg-white hover:text-black hover:rounded-t-lg hover:font-bold">Order Now</button> */}
    </>
  );
};

export default PopularMenu;