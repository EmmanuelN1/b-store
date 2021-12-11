import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannar from "../assets/banner.jpeg";
import logo from "../assets/logo.png";  

function Banner() {
    return (
        <div className="relative ">
            {/*Gradient effect in Tailwind CSS */}
            <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20 "/>

            <Carousel autoPlay infinteLoop showStatus={false} showIndicators={false} showThumbs={false} interval={3000}>

            <div>
                <img loading="lazy" src="https://links.papareact.com/7ma" alt=""/>
            </div>

            <div>
                <img loading="lazy" src="https://links.papareact.com/gi1" alt=""/>
            </div>

            <div>
                <img loading="lazy" src="https://links.papareact.com/6ff" alt=""/>
            </div>

            </Carousel>
        </div>
    )
}

export default Banner
