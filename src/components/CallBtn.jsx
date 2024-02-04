import { useState } from "react";
import WP from '../assets/x.png';
import { Link } from "react-router-dom";

const CallBtn = () => {
    const [showNeedHelp, setShowNeedHelp] = useState(false);

    return (


        <div className=" right-5 bottom-5 !fixed z-[50000]">
            <div className="flex items-center gap-4">

                {showNeedHelp && <p className='font-semibold text-black'>Join Meeting</p>}
                <Link to={'/rapid-call'} onMouseEnter={() => setShowNeedHelp(true)} onMouseLeave={() => setShowNeedHelp(false)}>  <img className="w-12 cursor-pointer hover:scale-110 transition-all" src={WP} alt="" /></Link>

            </div>
        </div>
    );
};

export default CallBtn;