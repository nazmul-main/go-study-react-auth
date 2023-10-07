import { useLoaderData } from "react-router-dom";
import OurCourses from "../../Components/OurCourses/OurCourses";
import Banner from "../../Components/Header/Banner/Banner";

const Home = () => {

    const courses = useLoaderData()

    return (
        <div>
            <Banner></Banner>
            <OurCourses courses={courses}></OurCourses>
        </div>
    );
};

export default Home;