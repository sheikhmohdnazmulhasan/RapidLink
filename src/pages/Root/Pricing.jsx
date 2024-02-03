import { useNavigate } from "react-router-dom";

const Pricing = () => {
    const navigate = useNavigate();

    const handleNavigatePay = (name, price) => {
        navigate('/pay', { state: { name, price } })
    }

    return (
        <div data-aos="fade-left">
            <section className="bg-white">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="relative">
                        <h1 className="absolute -top-14 left-0 text-[120px] font-bold opacity-5 md:block hidden">
                            Plan & Pricing
                        </h1>
                        <h1 className="text-5xl font-bold"> Choose Your  <span className="text-yellow-500">
                            Best
                        </span> </h1>
                        <div className="flex w-24 mt-1 mb-6 overflow-hidden rounded md:mb-14">
                            <div className="flex-1 h-2 bg-yellow-200">
                            </div>
                            <div className="flex-1 h-2 bg-yellow-300">
                            </div>
                            <div className="flex-1 h-2 bg-yellow-400">
                            </div>
                        </div>
                    </div>
                    <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 pt-10">
                        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow">
                            <h3 className="mb-4 text-2xl font-semibold">Starter</h3>
                            <p className="font-light text-gray-500 sm:text-lg">Best option for personal use & Small Bassness.</p>
                            <div className="flex justify-center items-baseline my-8">
                                <span className="mr-2 text-5xl font-extrabold">$29</span>
                                <span className="text-gray-500">/month</span>
                            </div>

                            <ul role="list" className="mb-8 space-y-4 text-left">
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Real-time communication</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>User-friendly interface</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Users size: <span className="font-semibold">100 Participants</span></span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Meting Duration: <span className="font-semibold">5 hours</span></span>
                                </li>
                            </ul>
                            <p className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={() => handleNavigatePay('Starter', '29')}>Get started</p>
                        </div>

                        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow">
                            <h3 className="mb-4 text-2xl font-semibold">Company</h3>
                            <p className="font-light text-gray-500 sm:text-lg">Relevant for multiple users, extended & premium support.</p>
                            <div className="flex justify-center items-baseline my-8">
                                <span className="mr-2 text-5xl font-extrabold">$99</span>
                                <span className="text-gray-500">/month</span>
                            </div>

                            <ul role="list" className="mb-8 space-y-4 text-left">
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>  Screen Sharing</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Meeting History</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Users size: <span className="font-semibold">500 Participants</span></span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Meting Duration: <span className="font-semibold">12 hours</span></span>
                                </li>
                            </ul>
                            <p className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={() => handleNavigatePay('Company', '99')}>Get started</p>
                        </div>

                        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow">
                            <h3 className="mb-4 text-2xl font-semibold">Enterprise</h3>
                            <p className="font-light text-gray-500 sm:text-lg">Best for large scale uses and extended redistribution rights.</p>
                            <div className="flex justify-center items-baseline my-8">
                                <span className="mr-2 text-5xl font-extrabold">$499</span>
                                <span className="text-gray-500">/month</span>
                            </div>

                            <ul role="list" className="mb-8 space-y-4 text-left">
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>File and Picture Attachments</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Private Chat</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Users size: <span className="font-semibold">1200+ Participants</span></span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                    <span>Meting Duration: <span className="font-semibold">24 hours</span></span>
                                </li>
                            </ul>
                            <p className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={() => handleNavigatePay('Enterprise', '499')}>Get started</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Pricing;