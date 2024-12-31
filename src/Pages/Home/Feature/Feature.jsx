import SectionTittle from "../../../Components/SectionTittle/SectionTittle";
import featured from "../../../assets/home/featured.jpg"
import { clampChroma } from './../../../../node_modules/culori/src/clamp';

const Feature = () => {
  return (
    <div>
      <SectionTittle subHeading={"Check it out"} heading={"Featured Item"}></SectionTittle>
      <div>
        <div>
          <img src={featured} alt="" />
        </div>
        <div>
          <p>Aug 20, 2034</p>
          <p className="uppercase">Where can i get some</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aut asperiores necessitatibus explicabo, quidem reiciendis, id dolor repellat quod maiores veritatis minus voluptatum aliquid? Cupiditate sed eveniet, est ipsam architecto ad inventore obcaecati nam expedita modi? Fugiat impedit unde deserunt perferendis. Sequi dicta sunt sapiente aperiam, non libero reiciendis quos.</p>
          <button className="btn btn-outline btn-secondary">Secondary</button>j
        </div>
      </div>
    </div>
  );
};

export default Feature;