/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const OurEventCard = ({ course }) => {
    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
      }, []);

    const { id, name, image, price, description, } = course || {}

    return (

        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <div data-aos-anchor-placement="center-bottom" className="relative flex  flex-col rounded-xl bg-white bg-clip-border border-[#03d5b4] border-b-4 text-gray-700 shadow-md group">
                <div className="relative  overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 group">
                    <div className="relative h-36 w-full transition-transform transform scale-100 hover:scale-110">
                        <img
                            src={image}
                            className="h-full w-full object-cover"
                            alt="Course Image"
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-40"></div>
                    </div>
                </div>

                <div className="p-6">
                    <div className="mb-2">
                        <p className="block font-sans text-base font-bold leading-relaxed text-blue-gray-900 antialiased hover:text-[#03d5b4]">
                            {name}
                        </p>
                        <p className="block font-semibold text-base leading-relaxed text-blue-gray-900 antialiased hover:text-[#03d5b4] ">
                            Price: {price}
                        </p>
                    </div>
                    <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75 hover:text-[#03d5b4]">
                        {description}
                    </p>
                </div>
                <div className="p-6 pt-0">
                    <Link to={`/details/${id}`}>
                        <button className="w-full outline-gray-600 btn text-[#2C3659] hover:bg-[#03d5b4] " type="button">Details</button>
                    </Link>
                </div>
            </div>

        </div>

    );
};

export default OurEventCard;
