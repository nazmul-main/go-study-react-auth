/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


const BlogCard = ({ blog }) => {
    const {  title, image_url, author, date, description, } = blog || {}
    return (
        <>
            <div className=" py-4">
                <div className=" py-7 px-4 space-y-4 ">
                    <h2 className="text-xl md:text-2xl lg:text-4xl font-bold">{title}</h2>
                    <div className="border-4 w-1/12  my-3 border-[#03d5b4]"></div>
                    <h2 className="font-semibold">Date:{date}</h2>
                    <div>
                        <img className="w-5/3 rounded-md" src="https://s3-us-east-2.amazonaws.com/maryville/wp-content/uploads/2020/08/05123236/MVU-BSMATH-2020-Q1-Skyscraper-Guide-for-Women-in-Mathematics-header-v11.jpg" />
                    </div>
                    <div className=" py-4">
                        <h2 className="text-xl font-bold">{author}</h2>
                        
                        <h2>Math helps us have better problem-solving skills.
                            Analytical thinking refers to the ability to think critically about the world around us. Reasoning is our ability to think logically about a situation. Analytical and reasoning skills are important because they help us solve problems and look for 
                            Analytical thinking refers to the ability to think critically about the world around us.solutions <strong className="text-[#fc6c4d] cursor-pointer">Read More--</strong>.</h2>
                    </div>

                </div>

            </div>
            
        </>





    );
};

export default BlogCard;