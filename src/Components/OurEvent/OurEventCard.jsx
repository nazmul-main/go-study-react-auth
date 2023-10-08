/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';

const OurEventCard = ({ course }) => {

    const { id, name, image, price, description, } = course || {}

    return (

        <div>
            <div className="relative flex  flex-col rounded-xl bg-white bg-clip-border border-red-600 border-b-4 text-gray-700 shadow-md group">
                <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 group">
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
                        <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased hover:text-red-600">
                            {name}
                        </p>
                        <p className="block font-sans text-base leading-relaxed text-blue-gray-900 antialiased hover:text-red-600 font-bold">
                            Price: {price}
                        </p>
                    </div>
                    <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75 hover:text-red-600">
                        {description}
                    </p>
                </div>
                <div className="p-6 pt-0">
                    <Link to={`/details/${id}`}>
                        <button className="w-full btn text-red-600 hover:bg-red-600 hover:text-white" type="button">Details</button>
                    </Link>
                </div>
            </div>

        </div>

    );
};

export default OurEventCard;
