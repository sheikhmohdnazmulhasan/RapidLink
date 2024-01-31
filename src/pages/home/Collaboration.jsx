import image1 from '../../assets/images/x.png';
import image2 from '../../assets/images/x2.png';

// icon
import icon1 from '../../assets/Icon/New folder/activities 1.png';
import icon2 from '../../assets/Icon/New folder/directions 1.png';
import icon3 from '../../assets/Icon/New folder/reliability 1.png';
import icon4 from '../../assets/Icon/New folder/research 1.png';

const Collaboration = () => {
    return (
        <div className="mt-20">
            <div className="md:flex justify-center items-center gap-36 flex-row-reverse">
                <div className="md:w-1/2 ">
                    <h1 className="text-3xl font-bold mb-10" data-aos="fade-left">Transforming Communication <br /> & <span className="text-yellow-400">Collaboration</span> </h1>
                    <div className="flex">
                        <div className="relative">
                            <img className='mb-3 md:mb-0' src={image1} alt="" />
                            <img className='hidden md:flex  absolute top-40 right-[340px]' src={image2} alt="" />
                        </div>
                    </div>

                </div>
                <div className="md:w-1/2">
                    <div className="">
                        <span className='opacity-75'>We believe in empowering businesses to reach new heights
                            by revolutionizing the way they communicate and
                            collaborate. Here's how <span className='font-semibold'>RapidLink</span> stands out</span>
                    </div>
                    <div className="mt-6 space-y-3">
                        <div className="flex hover:scale-105 cursor-pointer items-center bg-[#F6F6FF] hover:bg-[#e7e7ef] transition-all p-4 gap-4 rounded-md" data-aos="fade-right">
                            <div className="bg-[#4A55A2] flex justify-center items-center h-16 w-20 rounded-lg">
                                <img className='' src={icon2} alt="" />
                            </div>
                            <div className="">
                                <h3 className='text-xl font-semibold'>Flexibility comes first.</h3>
                                <p className='text-sm opacity-70'>We firmly believe that flexibility is at the heart of successful collaboration</p>
                            </div>
                        </div>

                        <div className="flex hover:scale-105 cursor-pointer items-center bg-[#F6F6FF] hover:bg-[#e7e7ef] transition-all p-4 gap-4 rounded-md" data-aos="fade-right">
                            <div className="bg-[#4A55A2] flex justify-center items-center h-16 w-20 rounded-lg">
                                <img className='' src={icon1} alt="" />
                            </div>
                            <div className="">
                                <h3 className='text-xl font-semibold'>Seamless Communication</h3>
                                <p className='text-sm opacity-70'>RapidLink facilitates seamless communication, breaking down geographical barriers. </p>
                            </div>
                        </div>

                        <div className="flex hover:scale-105 cursor-pointer items-center bg-[#F6F6FF] hover:bg-[#e7e7ef] transition-all p-4 gap-4 rounded-md" data-aos="fade-right">
                            <div className="bg-[#4A55A2] flex justify-center items-center h-16 w-20 rounded-lg">
                                <img className='' src={icon4} alt="" />
                            </div>
                            <div className="">
                                <h3 className='text-xl font-semibold'>Analytics and Insights</h3>
                                <p className='text-sm opacity-70'>This data-driven approach allows your business to continuously improve and optimize. </p>
                            </div>
                        </div>

                        <div className="flex hover:scale-105 cursor-pointer items-center bg-[#F6F6FF] hover:bg-[#e7e7ef] transition-all p-4 gap-4 rounded-md" data-aos="fade-right">
                            <div className="bg-[#4A55A2] flex justify-center items-center h-16 w-20 rounded-lg">
                                <img className='' src={icon3} alt="" />
                            </div>
                            <div className="">
                                <h3 className='text-xl font-semibold'>Reliability and Security</h3>
                                <p className='text-sm opacity-70'>Our commitment to data privacy, encryption, and regular security updates.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Collaboration;