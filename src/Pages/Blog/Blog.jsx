import { useLoaderData } from "react-router-dom";
import BlogCard from "./BlogCard";

const Blog = () => {
    const blogData = useLoaderData();


    return (

        <div className="">
            <div className="h-[15vh] md:h-[25vh] relative">
                <div className="absolute inset-0 bg-black bg-opacity-70"></div>
                <div className="bg-[url('https://i.ibb.co/z7Sd3R9/Mass-Circles-1.png')] bg-no-repeat bg-cover h-full">
                    <div className="text-white text-center absolute inset-0 flex items-center justify-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-[#03d5b4]">Blog Post</h1>
                    </div>
                </div>
            </div>
            <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12 md:w-4/5 py-4 ">
                {
                    blogData?.map((blog) => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))}
            </div>


        </div>
    );
};

export default Blog;