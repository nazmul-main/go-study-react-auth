import { useLoaderData } from "react-router-dom";
import OurEventCard from "../../Components/OurEvent/OurEventCard";

const Events = () => {
    const courses = useLoaderData()
    return (
        <div className='max-w-screen-xl mx-auto py-7 px-4 md:px-8 lg-px-12 '>
            <h2 className='text-4xl font-bold text-center text-[#03d5b4] my-7'> Our all Events</h2>
            <div className="grid gap-2 md:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {courses?.map((course) => (
                    <OurEventCard key={course.id} course={course} />
                ))}
            </div>
        </div>
    );
};

export default Events;