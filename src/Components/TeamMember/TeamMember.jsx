import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const TeamMember = () => {

    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
      }, []);

    return (
        <div className="max-w-screen-xl mx-auto py-7 px-4 md:px-8 lg-px-12 md:py-12">
            <div className="border-2 w-1/12  border-teal-500"></div>
            <h2 data-aos="zoom-fade-right" className="text-xl md:text-2xl lg:text-4xl font-bold py-4 md:py-12">Meet  Our Team Member</h2>
            <div className='grid    gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-4  '>
                <div data-aos="fade-up-right" className="bg-gray-100 border-b-4 border-[#03d5b4] rounded-md">
                    <img className="rounded-t-md mb-2 w-full h-3/4" src="../resource/teacher/teacher1.jpg" alt="" />
                    <div className="space-y-2 px-4">
                        <h2 className="text-xl font-bold">Tomas Bata</h2>
                        <small><span className="font-semibold ">Work On:</span> Financial Literacy -Seminar </small>
                    </div>

                </div>
                <div data-aos="flip-left" className="bg-gray-100 border-b-4 border-[#03d5b4] rounded-md">
                    <img  className="rounded-t-md mb-2 w-full h-3/4" src="../resource/teacher/teacher2.jpg" alt="" />
                    <div className="space-y-2 px-4">
                        <h2 className="text-xl font-bold">John Harris</h2>
                        <small><span className="font-semibold ">Work On:</span> History Lecture Series</small>
                    </div>

                </div>
                <div data-aos="flip-right" className="bg-gray-100 border-b-4 border-[#03d5b4] rounded-md">
                    <img className="rounded-t-md mb-2 w-full h-3/4" src="../resource/teacher/teacher3.jpg" alt="" />
                    <div className="space-y-2 px-4">
                        <h2 className="text-xl font-bold">David Weems</h2>
                        <small><span className="font-semibold ">Work On:</span> Science Fair for Kids</small>
                    </div>

                </div>
                <div data-aos="fade-right" className="bg-gray-100 border-b-4 border-[#03d5b4] rounded-md">
                    <img className="rounded-t-md mb-2 w-full h-3/4" src="../resource/teacher/teacher4.jpg" alt="" />
                    <div className="space-y-2 px-4">
                        <h2 className="text-xl font-bold">John Frieda</h2>
                        <small><span className="font-semibold ">Work On:</span> Creative Writing Workshop</small>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TeamMember;