import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <div>
            <div className=" flex  flex-col md:flex-row items-center justify-center  max-w-screen-xl mx-auto mt-10 py-28">
             <div className="w-2/4 col-span-1 ">
                <img className="" src="/public/resource/undraw_Contact_us_re_4qqt-removebg-preview.png" alt="" />
            </div>
            <div className="shadow-md border w-2/3 col-span-3 mx-auto p-5   md:w-3/5 lg:w-1/3  rounded-md">
                <h2 className="text-3xl font-bold text-[#2C3659] mb-8 text-center">Contact Us</h2>

                <form className="space-y-7 ">
                    <div>
                        <input
                            className="outline-none border border-[#03d5b4] w-full rounded-md py-2 px-2"
                            placeholder="Yor Name "
                            type="email"
                            id="" required /><br />
                    </div>
                    <div>
                        <input
                            className="outline-none border border-[#03d5b4] w-full rounded-md py-2 px-2"
                            placeholder="Email Aeddress "
                            type="email"
                            id="" required /><br />
                    </div>
                    
                    <div className="relative">
                        <input
                            className="outline-none border border-[#03d5b4] w-full rounded-md py-2 px-2"
                            placeholder="Enter Your Number"
                            id=""
                            required
                        />

                    </div>
                    <div className="relative">
                        <input
                            className="outline-none border border-[#03d5b4] w-full rounded-md py-2 px-2"
                            placeholder="Enter Your Number"
                            id=""
                            required
                            type=""
                        />

                    </div>
                    

                    <input className="w-full btn bg-[#03d5b4] hover:bg-[#03d5b4] text-[#2C3659] font-bold" type="submit" value="Sent" />

                </form>
               

            </div>
           
        </div>
        </div>
    );
};

export default Contact;