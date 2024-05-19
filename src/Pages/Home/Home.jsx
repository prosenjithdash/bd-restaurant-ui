import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Category from "./Category";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import Testimonial from "./Testimonial";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home </title>
                {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
            </Helmet>

            <Banner />
            <Category />
            <PopularMenu />
            <Testimonial/>
            <Featured/>
        </div>
    );
};

export default Home;