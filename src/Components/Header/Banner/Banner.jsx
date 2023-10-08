
const Banner = () => {
    return (
        <div className="h-[40vh] md:h-[80vh] relative">
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>
            <div className="bg-[url('https://i.ibb.co/zsxPGBj/thought-catalog-505eect-W54k-unsp.jpg')] bg-no-repeat bg-cover h-full">
                <div className="text-white text-center absolute inset-0 flex items-center justify-center">
                    <h1 className="text-4xl md:text-6xl font-bold">Your Text Here</h1>
                </div>
            </div>
        </div>




    );
};

export default Banner;