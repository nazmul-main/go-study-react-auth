import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner/Banner";
import OurEvent from "../../Components/OurEvent/OurEvent";
import Benifits from "../../Components/Benifits/Benifits";

const Home = () => {

    const courses = useLoaderData()

    return (
        <div>
            <Banner></Banner>
            <OurEvent courses={courses}></OurEvent>
            <Benifits></Benifits>
        </div>
    );
};

export default Home