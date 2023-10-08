/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import OurEventCard from '../OurEvent/OurEventCard';
import OurEvent from '../OurEvent/OurEvent';

const EvenetDetailsCard = ({ course }) => {
    const { id, name, image, price, event_details, } = course || {}


    return (

        <div className='mb-12'>
             <h2 className="text-2xl md:text-4xl text-center mb-2 font-bold">Event Details</h2>


            <div className="border-8 w-1/12  mx-auto mb-6 border-teal-500"></div>
            <div className="  justify-center items-center max-w-screen-xl mx-auto ">
                <div className="w-4/5 mx-auto space-y-5 ">
                    <img src={image} className="w-full h-38 md:h-96 object-cover" alt="" />
                    <h2 className='text-2xl font-bold'>{name}</h2>
                    <div className="border-4 w-1/12   mb-6 border-teal-500"></div>
                    <p className='justify-center'>
                        {event_details}
                    </p><br />
                    <div className='bg-[#F9F9F9] py-6 '>
                        <p className='text-2xl font-bold text-center mb-7'>What you will learn?</p>
                        <div className=' flex gap-12 px-10'>
                            <ul className='list-disc space-y-2'>
                                <li>Learn how perspective works and how to incorporate it into your art</li>
                                <li>Learn how perspective works and how to incorporate it into your art</li>
                                <li>Learn how perspective works and how to incorporate it into your art</li>
                                <li>Learn how perspective works and how to incorporate it into your art</li>
                            </ul>
                            <ul className='list-disc  space-y-2'>
                                <li>Learn how perspective works and how to incorporate it into your art</li>
                                <li>Learn how perspective works and how to incorporate it into your art</li>
                                <li>Learn how perspective works and how to incorporate it into your art</li>
                                <li>Learn how perspective works and how to incorporate it into your art</li>
                            </ul>
                        </div>
                        <div>
                        
                        </div>

                    </div>
                        
                </div>
                <div>

                </div>

            </div>
        </div>
    );
};

export default EvenetDetailsCard;