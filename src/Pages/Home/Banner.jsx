// Step 1: install => npm install react-responsive-carousel
// Step 2: import those file 
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (

        // Step 3: Carousel tag copy and paste hare =>
        <Carousel className="text-center max-w-[1920px] mx-auto">
            <div>
                <img src="https://i.ibb.co/31FqSHk/Restaurant-Food-Web-Banner-Design-1180x664.jpg" />
                {/* <p className="legend">Legend 1</p> */}
            </div>
            <div>
                <img src="https://i.ibb.co/xf7Myq9/Website-Food-Banner-Design-1180x664.jpg" />
                {/* <p className="legend">Legend 1</p> */}
            </div>
            <div>
                <img src="https://i.ibb.co/10H29Wy/Tasty-Food-Web-Banner-Design-1180x664.jpg" />
                {/* <p className="legend">Legend 1</p> */}
            </div>
            <div>
                <img src="https://i.ibb.co/93R1mT4/maxresdefault.jpg" />
                {/* <p className="legend">Legend 1</p> */}
            </div>
            <div>
                <img src="https://i.ibb.co/6B3vbL8/maxresdefault.jpg" />
                {/* <p className="legend">Legend 1</p> */}
            </div>
            <div>
                <img src="https://i.ibb.co/BGvS2rb/Free-Food-Advertising-Banner-Template.jpg" />
                {/* <p className="legend">Legend 1</p> */}
            </div>
        </Carousel>
    );
};

export default Banner;