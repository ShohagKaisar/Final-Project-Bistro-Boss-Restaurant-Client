import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg"
import dessertBg from "../../../assets/menu/dessert-bg.jpeg"
import pizzaBg from "../../../assets/menu/pizza-bg.jpg"
import soupBg from "../../../assets/menu/soup-bg.jpg"
import saladBg from "../../../assets/menu/salad-bg.jpg"
import useMenu from "../../../Hocks/useMenu";
import SectionTittle from "../../../Components/SectionTittle/SectionTittle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter(item => item.category === 'dessert')
  const soup = menu.filter(item => item.category === 'soup')
  const salad = menu.filter(item => item.category === 'salad')
  const pizza = menu.filter(item => item.category === 'pizza')
  const offered = menu.filter(item => item.category === 'offered')

  return (
    <div>
      <Helmet>
        <title>Bistro Boss-Menu</title>
      </Helmet>
      <Cover img={menuImg} title={"OUR MENU"}></Cover>
      {/* Main Cover */}
      <SectionTittle subHeading={"don't miss"} heading={'Todays Offer'}></SectionTittle>
      {/* Offered Menu Items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* Desert Menu Items */}
      <MenuCategory items={desserts} title={'Desert'} img={dessertBg}></MenuCategory>
      {/* Pizza Menu Item */}
      <MenuCategory items={pizza} title={'Pizza'} img={pizzaBg}></MenuCategory>
      {/* Soup Munu Item */}
      <MenuCategory items={soup} title={'Soup'} img={soupBg}></MenuCategory>
      {/* Salad Menu Item */}
      <MenuCategory items={salad} title={'Salad'} img={saladBg}></MenuCategory>
    </div>
  );
};

export default Menu;