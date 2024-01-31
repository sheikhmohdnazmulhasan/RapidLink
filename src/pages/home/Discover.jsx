import img from '../../assets/images/Screenshot 2024-01-25 183706.png';

const Discover = () => {
    return (
        <div className=" "  data-aos="fade-up">

            {/* Left Image */}
            <div className="md:flex w-full gap-10">
                <div className="md:w-[40%] w-full hidden md:block">
                    <img src={img} alt="" className='hover:scale-105 transition-all w-full' />
                </div>

                {/* Right content */}
                <div className=" md:w-[60%] w-full ">
                    <div>
                        <h1 className="text-3xl font-bold" data-aos="fade-left">Seamless Connectivity,
                            Empowered Collaboration</h1>
                        <p className="opacity-70">Our mission is to redefine the way you connect, communicate,and <br /> collaborate. Say goodbye to mundane meetings</p>
                    </div>

                    {/* Item1 */}
                    <div className="grid grid-cols-2 mt-6 space-y-4" data-aos="fade-up">

                        {/* Item1 */}
                        <div className="flex items-center gap-4">
                            <div className="border rounded-full w-10 h-10 hover:bg-yellow-300 transition-all cursor-pointer hover:scale-110">
                                <img className="w-10 p-2" src="/src/assets/Icon/video.png" alt="" />
                            </div>
                            <p className=" font-semibold">Virtual Meetings</p>
                        </div>

                        {/* Item2 */}
                        <div className="flex items-center gap-4 ">
                            <div className="border rounded-full w-10 h-10 hover:bg-yellow-300 transition-all cursor-pointer hover:scale-110">
                                <img className="w-10 p-2" src="/src/assets/Icon/calender.png" alt="" />
                            </div>
                            <p className=" font-semibold">Email & Calender</p>
                        </div>

                        {/* Item3 */}
                        <div className="flex items-center gap-4">
                            <div className="border rounded-full w-10 h-10 hover:bg-yellow-300 transition-all cursor-pointer hover:scale-110">
                                <img className="w-10 p-2" src="/src/assets/Icon/phone.png" alt="" />
                            </div>
                            <p className=" font-semibold">VolP Phone System</p>
                        </div>

                        {/* Item 4 */}
                        <div className="flex items-center gap-4">
                            <div className="border rounded-full w-10 h-10 hover:bg-yellow-300 transition-all cursor-pointer hover:scale-110">
                                <img className="w-10 p-2" src="/src/assets/Icon/group.png" alt="" />
                            </div>
                            <p className=" font-semibold">Team Chat</p>
                        </div>

                        {/* Item 5 */}
                        <div className="flex items-center gap-4">
                            <div className="border rounded-full w-10 h-10 hover:bg-yellow-300 transition-all cursor-pointer hover:scale-110">
                                <img className="w-10 p-2" src="/src/assets/Icon/calender.png" alt="" />
                            </div>
                            <p className=" font-semibold">Appointment Schedule</p>
                        </div>

                        {/* 6 */}
                        <div className="flex items-center gap-4">
                            <div className="border rounded-full w-10 h-10 hover:bg-yellow-300 transition-all cursor-pointer hover:scale-110">
                                <img className="w-10 p-2" src="/src/assets/Icon/tv.png" alt="" />
                            </div>
                            <p className=" font-semibold">Online Whiteboard</p>
                        </div>
                    </div>

                    <button className=" w-40 h-16 font-semibold hover:scale-105 rounded uppercase before:block before:absolute mt-10 hover:before:bg-yellow-300 before:w-0 before:h-0 hover:before:h-20 hover:before:w-44 before:-bottom-2 before:-right-2 before:duration-500 before:rounded-xl before:-z-10 relative inline-block transform bg-transparent border-2 overflow-hidden border-yellow-300 duration-500" data-aos="fade-up">Discover</button>
                </div>
            </div>


        </div>
    );
};

export default Discover;