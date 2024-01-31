import img from "../../assets/images/banner.png"
// import Button from "./shared/Button"
import { CiPlay1 } from "react-icons/ci";

const Banner = () => {
    return (
        <div style={{ backgroundPosition: "150%" }} className={` md:h-screen bg-[url('https://i.ibb.co/YTjKthB/bannerBG.png')] bg-no-repeat bg-contain  mx-auto`}>
            <div style={{ backgroundImage: "linear-gradient(90deg, #4A55A2 0%, rgba(52, 128, 200, 0.90) 62.61%, rgba(52, 128, 200, 0.13) 100%)" }} className="h-full w-full md:px-20">
                <div className="container px-4 mx-auto h-full py-10 md:py-0 flex items-center">
                    <div className="flex flex-col md:flex-row gap-2 md:items-center">
                        <div className="md:w-[70%] text-center md:text-left">
                            <h1 className="text-[32px] text-left md:text-[52px] lg:text-[72px] md:leading-[70px] lg:leading-[80px] font-lusitana text-white font-bold mb-8"  data-aos="fade-right">Revolutionize Your <br />
                                Meetings with <br />
                                RapidLink</h1>

                            <div className="md:flex gap-2">

                                <button className='hover:bg-transparent hidden md:inline-block border border-[#FFE900] text-[#04111D] py-[10px] px-[20px] md:py-[18px] md:px-[38px] rounded-[5px] font-semibold capitalize font-poppins bg-[#ede04ae0] transition duration-300 text-[18px]'>
                                    Discover More
                                </button>
                                <button className='bg-transparent hidden md:inline-block border border-[#FFE900] hover:text-[#04111D] py-[10px] px-[20px] md:py-[18px] md:px-[38px] rounded-[5px] font-semibold capitalize font-poppins hover:bg-[#ede04ae0] transition duration-300 text-[18px] text-yellow-400'>
                                    Learn about new teams
                                </button>
                            </div>
                        </div>
                        <div className="md:w-[30%] relative">
                            <span className="absolute h-16 w-16 bg-[#FFE900] -left-[10px] -bottom-[40px] transform -translate-y-1/2 "></span>
                            <div className="z-20 relative">
                                <img src={img} alt="banner image" />
                                <div className="absolute   right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2 h-8 w-8 p-6 rounded-full flex items-center justify-center border-2 border-[#FFE900]">
                                    <div className="bg-gray-300 rounded-full p-2">
                                        <CiPlay1 width={20} height={20} className="text-yellow-400 text-2xl" />
                                    </div>
                                </div>
                            </div>
                            <span className="absolute h-16 w-16 bg-[#FFE900] -right-[10px] top-[24px] transform -translate-y-1/2 z-10"></span>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner