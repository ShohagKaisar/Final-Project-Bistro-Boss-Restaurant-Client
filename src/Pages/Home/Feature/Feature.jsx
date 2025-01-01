import SectionTittle from "../../../Components/SectionTittle/SectionTittle";
import featured from "../../../assets/home/featured.jpg";
import "./Featured.css"

const Feature = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-10"> 
      <SectionTittle subHeading={"Check it out"} heading={"Featured Item"}></SectionTittle>
      <div className="md:flex pb-20 pt-12 px-36 justify-center items-center  bg-slate-600 bg-opacity-65">
        <div>
          <img src={featured} alt="" />
        </div>
        <div className="ml-10">
          <p>Aug 20, 2034</p>
          <p className="uppercase">Where can i get some</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aut asperiores necessitatibus explicabo, quidem reiciendis, id dolor repellat quod maiores veritatis minus voluptatum aliquid? Cupiditate sed eveniet, est ipsam architecto ad inventore obcaecati nam expedita modi? Fugiat impedit unde deserunt perferendis. Sequi dicta sunt sapiente aperiam, non libero reiciendis quos.</p>
          <button className="border-b-4 border-white rounded-b-lg px-4 py-2 hover:bg-white hover:text-black hover:rounded-t-lg hover:font-bold">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Feature;