import { useEffect, useState } from 'react';
import wn1 from '../../assets/images/WN1.png';

const WN = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('wn.json').then(res => res.json()).then(data => setData(data))
    }, []);


    return (
        <div>
            <div className="text-center" data-aos="zoom-out">
                <h1 className='text-3xl font-bold'>Whats New at  <span className="text-yellow-400">RapidLink</span></h1>
                <p className='opacity-75 mt-3 mb-16'>Our mission is to redefine the way you connect, communicate,and <br /> collaborate. Say goodbye to mundane</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4" data-aos="fade-up">
                {data.map(data => <div key={data.title} className="max-w-sm hover:scale-105 transition-all bg-white border border-gray-200 rounded-lg shadow">
                    <a href="#">
                        <img  className="" src="/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div className="">
                        <img src={data.img} alt="" />
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{data.title}</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700">{data.des}</p>
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                Read more
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>)}
            </div>

        </div>
    );
};

export default WN;