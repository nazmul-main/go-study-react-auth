import toast from "react-hot-toast";


const Contact = () => {


    const handleContact = () => {
        toast.success('Message sent successfully!', {
          duration: 3000,
        });
      };
    

    return (
        <div>
            <div className="h-[15vh] md:h-[25vh] relative">
                <div className="absolute inset-0 bg-black bg-opacity-70"></div>
                <div className="bg-[url('https://i.ibb.co/z7Sd3R9/Mass-Circles-1.png')] bg-no-repeat bg-cover h-full">
                    <div className="text-white text-center absolute inset-0 flex items-center justify-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-[#03d5b4]"> Contact us</h1>
                    </div>
                </div>
            </div>
            <div>
                <div className=" flex  flex-col md:flex-row items-center justify-center  max-w-screen-xl mx-auto mt-10 py-28">
                    <div className="w-2/4 col-span-1 ">
                        <img className="" src="../resource/undraw_Contact_us_re_4qqt-removebg-preview.png" alt="" />
                    </div>
                    <div className="shadow-md border  col-span-3 mx-auto p-5   md:w-3/5 lg:w-1/3  rounded-md">
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
                                    type=""
                                />

                            </div>
                            <div>
                                <textarea
                                    className="outline-none border border-[#03d5b4] w-full h-24 rounded-md py-2 px-2"
                                    placeholder="What's on you mind"
                                    id=""
                                    required
                                ></textarea>
                            </div>



                            <input onClick={handleContact} className="w-full btn bg-[#03d5b4] hover:bg-[#03d5b4] text-[#2C3659] font-bold" type="submit" value="Sent" />

                        </form>


                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;