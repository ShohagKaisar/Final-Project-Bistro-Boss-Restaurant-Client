import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Feature from "../Feature/Feature";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
  return (
    <div>
            <Helmet>
              <title>Bistro Boss-Home</title>
            </Helmet>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <Feature></Feature>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;