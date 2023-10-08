import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="h-[40vh] md:h-[80vh] relative mb-12">
            <div className="absolute inset-0 bg-black bg-opacity-90"></div>
            <div className="bg-[url('https://www.casita.com/images/files/public/28032023012127PM-Shutterstock_2129585300-min.jpg')] bg-no-repeat bg-cover h-full">
                <div className="text-white absolute inset-0 px-4 md:px-8 lg:px-12 flex justify-center items-center">
                    <div className="w-1/2 mx-auto space-y-6">
                        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">
                            EDUCATION IS POWER <br /> <span className="text-[#03d5b4]">OF SUCCESS</span>
                        </h1>
                        <p className="text-gray-300 w-3/4 leading-6 ">
                            Education powers a better world by serving society and allowing people to become better citizens. As we all know, “education is a key to success”. Education allows society to gain knowledge and gives way to more professional career options like teaching, engineering, and accounting.
                        </p>
                         {/* <div className="border-4 w-1/12   border-[#fc6c4d] my-4"></div> */}
                        <div>
                        <Link to='/blog'  className=" px-5 py-2 rounded-md bg-[#03d5b4] text-[#2C3659] font-bold ">BLOG</Link>  
                        </div>
                        
                    </div>
                    
                </div>

            </div>
        </div>




    );
};

export default Banner;