
import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import CourseDetailsCard from './CourseDetailsCard';

const CourseDetails = () => {

    const [course, setCourse] = useState({})

    const { id } = useParams()
    const courseDetails = useLoaderData()

    useEffect(() => {
        const findDetails = courseDetails?.find(details => details.id === id)
        setCourse(findDetails)

    }, [id, courseDetails])

    console.log(course);




    return (
        <div>
            <CourseDetailsCard course={course}></CourseDetailsCard>
        </div>
    );
};

export default CourseDetails;