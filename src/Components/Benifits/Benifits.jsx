import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Benifits = () => {

    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
      }, []);
   
  
    return (
        <div className="max-w-screen-xl mx-auto py-7 px-4 md:px-8 lg-px-12 md:py-12">
            <div className="flex flex-col lg:flex-row  md:px-28 justify-center items-center gap-2 md:gap-12">
                <div className="flex gap-4 ">
                    <div data-aos="fade-right" >
                        <img src="../resource/img2.jpg" alt="" />
                        <img className="w-3/5 float-right mt-4" src="../resource/img4.jpg" alt="" />
                    </div>

                    <div data-aos="fade-up">
                        <img className="" src="../resource/img3.jpg" alt="" />
                    </div>
                </div>

                <div data-aos="fade-down-right" className="space-y-4">
                    <div data-aos="fade-up-right" className="border-2 w-1/6  border-yellow-300"></div>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold"> Career benefits</h2>
                    <p className="text-gray-500">You can start and finish one of these popular courses in under a day  <br />for free! Check out the list below.. Take the course for free
                    </p>
                    <ul data-aos="fade-up-left" className="list-disc ml-7 text-gray-500">
                        <li>Get unlimited access to 4,000+ of our top courses</li>
                        <li>Explore a variety of fresh topics</li>
                        <li>Find the right instructor for you</li>
                    </ul>


                </div>
            </div>
        </div>
    );
};

export default Benifits;