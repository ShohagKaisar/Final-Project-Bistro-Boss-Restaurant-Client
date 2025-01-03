import { useEffect, useState } from "react";
import SectionTittle from "../../../Components/SectionTittle/SectionTittle";
import MenuItem from "../../Shared/MenuItem";


const PopularMenu = () => {

  const [menu, SetMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then(res => res.json())
      .then(data => {
        const popularData = data.filter(item => item.category === "popular")
        SetMenu(popularData)
        console.log(menu);
      })
  }, [])

  return (
    <>
      <section className="mb-12">
        <SectionTittle heading={"From Our Menu"}
          subHeading={"Check it out"}></SectionTittle>
      </section>
      <div className="grid md:grid-cols-2 gap-10 mb-12">
        {
          menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
        }
      </div>
    </>
  );
};

export default PopularMenu;