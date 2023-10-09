/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const BlogCard = ({ blog }) => {
    /* AOS pacage */
     useEffect(() => {
    AOS.init({
        duration: 1200,
    });
}, []);
    const { title, image_url, author, date, description, } = blog || {}
    return (
        <>
            <div className=" py-4">
                <div className=" py-7 px-4 space-y-4 ">
                    <h2 data-aos="fade-right" className="text-xl md:text-2xl lg:text-4xl font-bold">{title}</h2>
                    <h2 className="font-semibold text-[#fc6c4d]">Date:{date}</h2>
                    <div>
                        <img data-aos="zoom-out" className="w-full h-96 object-cover  rounded-md" src={image_url} />
                    </div>
                    <div className=" py-4">
                        <h2 className="text-xl font-bold">{author}</h2>
                        <div className="border-4 w-1/12  my-3 border-[#03d5b4]"></div>
                        <h2 data-aos="zoom-in-right">{description} <strong className="text-[#fc6c4d] cursor-pointer">Read More--</strong>.</h2>
                    </div>

                </div>

            </div>

        </>





    );
};

export default BlogCard;