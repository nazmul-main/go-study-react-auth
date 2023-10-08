
import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import EvenetDetailsCard from './EvenetDetailsCard';

const EvenetDetails = () => {

    const [course, setCourse] = useState({})

    const { id } = useParams()
    const EvenetDetails = useLoaderData()

    useEffect(() => {
        const findDetails = EvenetDetails?.find(details => details.id === id)
        setCourse(findDetails)

    }, [id, EvenetDetails])

    console.log(course);




    return (
        <div>
            <EvenetDetailsCard course={course}></EvenetDetailsCard>
        </div>
    );
};

export default EvenetDetails;