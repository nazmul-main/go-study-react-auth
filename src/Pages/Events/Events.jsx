import { useLoaderData } from "react-router-dom";
import OurEventCard from "../../Components/OurEvent/OurEventCard";

const Events = () => {
    const courses = useLoaderData()
    return (
        
        <div>
            <div className="h-[15vh] md:h-[25vh] relative">
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>
            <div className="bg-[url('https://i.ibb.co/zsxPGBj/thought-catalog-505eect-W54k-unsp.jpg')] bg-no-repeat bg-cover h-full">
                <div className="text-white text-center absolute inset-0 flex items-center justify-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-[#03d5b4]">All Event</h1>
                </div>
            </div>
        </div>
            <div className='max-w-screen-xl mx-auto py-7 px-4 md:px-8 lg-px-12 '>
            
            <div className="grid gap-2 md:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {courses?.map((course) => (
                    <OurEventCard key={course.id} course={course} />
                ))}
            </div>
        </div>
        </div>
    );
};

export default Events;