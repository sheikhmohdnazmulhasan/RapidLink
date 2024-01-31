import { FaPlayCircle } from "react-icons/fa";
import Engaging1 from '../../assets/images/Engaging.png';

const Engaging = () => {

    return (
        <div className="bg-[#4A58A4] h-96 w-full flex justify-center items-center mt-32" data-aos="fade-up">
            <div className="md:border-2 md:px-10 rounded-lg w-[75%] h-[65%] flex justify-center items-center">
                <div className="flex justify-evenly w-full items-center gap-5">
                    <div className="flex-1">
                        <h2 className="text-2xl font-semibold text-white mb-2">Drive More Engaging <br /> Meetings with RapidLink</h2>
                        <p className="text-sm text-white opacity-75 ">Here's how RapidLink stands out in driving more interactive and captivating <br />
                            online collaboration compared to other video conferencing platforms</p>
                        <button className="bg-[#FFE900] mt-4 px-3 py-2 font-semibold rounded flex hover:bg-transparent border border-[#FFE900] hover:text-[#FFE900] transition-all items-center gap-2">Watch Now <FaPlayCircle className="" /> </button>
                    </div>

                    {/* Image
                    <div className="flex-1">
                        <img className="w-[16%]" src={Engaging1} alt="" />
                    </div> */}
                </div>


            </div>
        </div>
    );
};

export default Engaging;