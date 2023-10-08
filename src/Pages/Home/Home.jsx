import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner/Banner";
import OurEvent from "../../Components/OurEvent/OurEvent";

const Home = () => {

    const courses = useLoaderData()

    return (
        <div>
            <Banner></Banner>
            <OurEvent courses={courses}></OurEvent>
        </div>
    );
};

export default Home