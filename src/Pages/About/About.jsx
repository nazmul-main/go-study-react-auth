import TeamMember from "../../Components/TeamMember/TeamMember";


const About = () => {
    return (
        <div>
            <div className="h-[15vh] md:h-[25vh] relative">
                <div className="absolute inset-0 bg-black bg-opacity-70"></div>
                <div className="bg-[url('https://i.ibb.co/z7Sd3R9/Mass-Circles-1.png')] bg-no-repeat bg-cover h-full">
                    <div className="text-white text-center absolute inset-0 flex items-center justify-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-[#03d5b4]">About us</h1>
                    </div>
                </div>
            </div>
            <div className="flex  flex-col md:flex-row items-center justify-center  max-w-screen-xl mx-auto mt-10 px-7 ">
                <div className="flex-1">
                    <img className="" src='https://i.ibb.co/3fsJx01/3026238-removebg-preview.png' alt="" />
                </div>
                <div className="flex-1">
                    <div className="space-y-12">
                        <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-center">Some Information about us </h2>
                        <p className="text-gray-600 mb-6">
                            Welcome to Your Website/Company Name, your trusted source for educational events and services. We are dedicated to providing you with high-quality educational experiences that empower and enrich your knowledge.
                        </p>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
                        <p className="text-gray-600 mb-6">
                            At Your Website/Company Name, our mission is to foster a love for learning and personal growth. We believe that education is the key to unlocking potential and achieving success. That is why we offer a wide range of educational events and services designed to inspire, inform, and empower our community.
                        </p>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Team</h2>
                        <p className="text-gray-600 mb-6">
                            Our team is composed of passionate educators, experts, and professionals who are committed to delivering top-notch educational content. With years of experience in their respective fields, our instructors are dedicated to helping you achieve your goals and expand your horizons.
                        </p>
                    </div>
                </div>

            </div>
            <TeamMember></TeamMember>
        </div>
    );
};

export default About;