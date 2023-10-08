import React from 'react';

const EvenetDetailsCard = ({ course }) => {
    const { id, name, image, price, description, } = course || {}


    return (

        <div>
            <div className="flex h-[15vh] md:h-[20vh] bg-red-100 text-black items-center justify-center">
                <h2 className="text-2xl md:text-4xl font-bold">Course Details</h2>
            </div>
            <div className="flex flex-col justify-center items-center ">
                <img src={image} className="w-2/5 h-38 md:h-72 object-cover" alt="" />
                <h2 className='text-2xl font-bold'>{name}</h2>
                <p className='w-3/5 justify-center'>A React JS tutorial for beginners is a comprehensive introduction to React, a popular JavaScript library for building user interfaces. This tutorial typically starts by explaining React's key concepts, including components and the Virtual DOM. It guides learners through setting up a development environment and creating their first React project.
                </p><br />
                <div className='bg-[#F9F9F9] py-6 '>
                    <p className='text-2xl font-bold text-center mb-7'>What you will learn?</p>
                    <div className='flex mx-auto gap-16 w-3/5 items-center justify-between '>
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

                </div>
              
            </div>

        </div>
    );
};

export default EvenetDetailsCard;