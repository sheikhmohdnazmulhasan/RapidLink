// import { AccordionComponent } from "./Accordion";
import CallBtn from "../../components/CallBtn";
import Banner from "./Banner";
import Collaboration from "./Collaboration";
import Discover from "./Discover";
import Engaging from "./Engaging";
import Flexibility from "./Flexibility";
import RTGS from "./RTGS";
import WN from "./WN";

const Home = () => {
    return (
        <div>
            <CallBtn />
            <Banner />
            <div className="md:mx-20 mx-5 mt-16 md:mt-36">
                <Discover></Discover>
                <Collaboration />
                {/* <Flexibility></Flexibility> */}
            </div>
            <Engaging />
            <div className="md:mx-36 mx-5 mt-16 md:mt-36">
                <WN />
            </div>
            <RTGS />
        </div>
    );
};

export default Home;