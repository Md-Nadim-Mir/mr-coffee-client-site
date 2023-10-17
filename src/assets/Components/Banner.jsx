

const Banner = () => {

    return (

        <div className="bg-cover bg-center bg-no-repeat bg-[url(../../../../../public/banner.png)] h-[70vh] flex justify-between md:pr-14">

            <div>

            </div>

            <div  className="px-2">
                <h1 className='text-3xl font-bold pt-16 lg:pt-28 text-white'>Would you like a Cup of Delicious Coffee?</h1>

                <p className="text-white text-xs font-bold pt-3 py-2">It's coffee time - Sip & Savor - Relaxation in every sip!  Get the nostalgia back!! Your companion <br />  of every moment!!! Enjoy the beautiful  moments and make them memorable.</p>

                <button  className="btn bg-[#E3B577] hover:bg-[#E3B577] mt-3 p-2 rounded-md font-bold">Learn More</button>
            </div>

        </div>
    );
};

export default Banner;