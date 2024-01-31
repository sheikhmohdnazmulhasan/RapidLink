import React from 'react';

const Feature = () => {
    return (
        <div data-aos="fade-left">
            <section className="flex items-center justify-center bg-gray-100 lg:h-screen md:px-10">
                <div className="px-4 py-20 mx-auto max-w-7xl">
                    <div className="flex flex-wrap items-center gap-8 lg:flex-nowrap">
                        <div className="w-full lg:w-1/2">
                            <div className="relative">
                                <h1 className="absolute -top-14 left-0 text-[120px] font-bold opacity-5 md:block hidden">
                                    FEATURE
                                </h1>
                                <h1 className="text-5xl font-bold"> Our <span className="text-yellow-500"> Features
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
                            <p className="mb-4 text-base text-gray-500 lg:mb-16">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus magni eius eaque?
                                Pariatur
                                numquam, odio quod nobis ipsum ex cupiditate? Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Amet, cum.
                            </p>
                        </div>
                        <div className="grid flex-1 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
                            <div
                                className="w-full p-8 text-center transition-all bg-white rounded shadow hover:shadow-lg">
                                <div className="inline-block p-4 mb-4 bg-blue-400 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                                        className="text-white" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm-.5 5a.5.5 0 0 1 1 0v1.5H10a.5.5 0 0 1 0 1H8.5V9a.5.5 0 0 1-1 0V7.5H6a.5.5 0 0 1 0-1h1.5V5z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-black"> Security and privacy </h3>
                            </div>
                            <div
                                className="w-full p-8 text-center transition-all bg-white rounded shadow hover:shadow-lg">
                                <div className="inline-block p-4 mb-4 bg-blue-400 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 text-white h-10">
                                        <path d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                                    </svg>

                                </div>
                                <h3 className="text-lg font-semibold text-black">  File and Picture Attachments </h3>
                            </div>
                            <div
                                className="w-full p-8 text-center transition-all bg-white rounded shadow hover:shadow-lg">
                                <div className="inline-block p-4 mb-4 bg-blue-400 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 text-white h-10">
                                        <path d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                                    </svg>

                                </div>
                                <h3 className="text-lg font-semibold text-black"> End-to-end encrypted private messaging </h3>
                            </div>
                            <div
                                className="w-full p-8 text-center transition-all bg-white rounded shadow hover:shadow-lg">
                                <div className="inline-block p-4 mb-4 bg-blue-400 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                                        className="text-white" viewBox="0 0 16 16">
                                        <path
                                            d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z">
                                        </path>
                                        <path
                                            d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z">
                                        </path>
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-black"> Connect with host </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Feature;