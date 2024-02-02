import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            {/* footer */}
            <footer className=" text-white bg-white">
                <div className="footer space-y-4 md:space-y-0 p-5 md:p-10 bg-[#1E1E1E] md:flex justify-between">
                    <div className="">
                        <h1 className="text-xl font-semibold">RapidLink - Online Meeting Platform</h1>
                        <p className="opacity-55">Dhaka, Bangladesh</p>
                        <p className="opacity-55">Phone: +880 100010000</p>
                        <p className="opacity-55">Email: info@rapidlink.com</p>
                    </div>
                    <nav>
                        <header className="footer-title font-bold">Useful Links</header>
                        <div className="opacity-70 space-y-5">
                            <Link to={'/about'} className="link link-hover ">About us</Link> <br />
                            <Link to={'/contact'} className="link link-hover">Contact</Link> <br />
                            <Link to={'/media'} className="link link-hover ">Media</Link> <br />
                        </div>
                    </nav>
                    <form>
                        <header className="footer-title text-xl font-semibold">Newsletter</header>
                        <fieldset className="form-control w-80">
                            <label className="label">
                                <span className="opacity-55">Stay in the loop with the latest updates and exclusive offers, join our newsletter today for a front-row seat to automotive excellence!</span>
                            </label>
                            <div className="mt-3">
                                <input type="text" placeholder="username@site.com" className="input py-3 px-3 text-black rounded-l-sm input-bordered join-item" />
                                <button className="btn bg-[#FFE900] transition-all text-black py-3 px-3 hover:bg-[#dacf5e] font-semibold rounded-r-sm join-item">Subscribe</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
                <div className=" p-4 bg-black flex flex-col md:flex-row justify-center md:justify-between w-full px-10">
                    <aside className="flex justify-center">
                        <p className="hidden md:flex justify-center">Copyright &copy; RapidLink, 2024 - All right reserved</p>
                        <p className="flex justify-center md:hidden">Copyright &copy; RapidLink, 2024 - All right reserved</p>
                    </aside>
                    <aside className="flex gap-3 text-3xl justify-center mt-3 md:mt-0">
                        <a href="https://www.instagram.com/cmc.uae?igsh=MmE1emZqYjRhZHVv" target="_blank" rel="noreferrer"> <FaLinkedin className="cursor-pointer hover:scale-110 transition-all hover:text-[#3EA354]" /></a>

                        <a href="https://www.tiktok.com/@cmc_modification_center" target="_blank" rel="noreferrer">
                            <FaTwitter className="cursor-pointer hover:scale-110 transition-all hover:text-[#3EA354]" /> </a>

                        <a href="https://wa.me/+971503583882" target="_blank" rel="noreferrer">
                            <FaFacebook className="cursor-pointer hover:scale-110 transition-all hover:text-[#3EA354]" />
                        </a>

                    </aside>
                </div>
            </footer>
        </>
    );
};

export default Footer;