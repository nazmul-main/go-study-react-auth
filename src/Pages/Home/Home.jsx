import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner/Banner";
import OurEvent from "../../Components/OurEvent/OurEvent";
import Benifits from "../../Components/Benifits/Benifits";
import TeamMember from "../../Components/TeamMember/TeamMember"

const Home = () => {

    const courses = useLoaderData()

    return (
        <div>
            <Banner></Banner>
            <OurEvent courses={courses}></OurEvent>
            <Benifits></Benifits>
            <TeamMember></TeamMember>
        </div>
    );
};

export default Home