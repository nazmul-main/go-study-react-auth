/* eslint-disable react/prop-types */
import OurEventCard from "./OurEventCard";

const OurEvent = ({ courses }) => {
    // Slice the first 8 items from the courses array
    const first8Courses = courses.slice(0, 8);

    return (
        <div className='max-w-screen-xl mx-auto py-7 px-4 md:px-8 lg-px-12 '>
            <h2 className='text-4xl font-bold text-center text-[#03d5b4] my-7'> Our Event</h2>
            <div className="grid gap-2 md:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {first8Courses?.map((course) => (
                    <OurEventCard key={course.id} course={course} />
                ))}
            </div>
        </div>
    );
};

export default OurEvent;
