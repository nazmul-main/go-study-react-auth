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
            <div className="flex h-[15vh] md:h-[25vh] bg-black-opacity bg-[url('https://i.ibb.co/zsxPGBj/thought-catalog-505eect-W54k-unsp.jpg')] bg-no-repeat bg-cover text-white items-center justify-center mb-6">
                <hr />
                <h2 className="text-2xl md:text-4xl font-bold">Event Details</h2>
            </div>

            <div className=" grid grid-cols-4 justify-center items-center max-w-screen-xl mx-auto ">
                <div className="col-span-3 ">
                    <img src={image} className="w-full h-38 md:h-72 object-cover" alt="" />
                    <h2 className='text-2xl font-bold'>{name}</h2>
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