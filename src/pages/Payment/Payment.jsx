/* eslint-disable react/prop-types */
// import Fade from "@mui/material/Fade";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
import { FaHouseUser } from "react-icons/fa6";
import { MdOutlineErrorOutline } from "react-icons/md";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from 'react'
import { useLocation } from "react-router-dom";

// const stripeKey = ''

const stripePromise = loadStripe('pk_test_51M83t1IVPtt27fTQ9lg8TlV1U0lnOtxYKcO9XaPo2Enkv3TN2xvLAt0ireoQVSjJzG5kbXYf2l07yiUfzxigAjoF00BVAL0tK4');

const Payment = ({ open, setOpen, information, setIsOpen }) => {

    const location = useLocation();

    console.log(location.state);

    function closeModal() {
        setOpen(false);
        setIsOpen(false);
    }

    return (
        <div>
            <>
                <Transition appear show={true} as={Fragment}>
                    <Dialog as="div" className="relative z-10" onClose={closeModal}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black/25" />
                        </Transition.Child>

                        <div className="fixed inset-0 overflow-y-auto">
                            <div className="flex min-h-full items-center justify-center p-4 text-center">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                        <div className="flex flex-col md:flex-row mt-10">
                                            <div className="lg:w-1/2">
                                                <h1 className="text-start text-xl flex items-center">RapidLink</h1>
                                                <h1 className="text-start text-xl mt-6">{location.state.name}</h1>
                                                <h1 className="text-start text-4xl font-bold">${location.state.price}</h1>
                                                <div className="overflow-x-auto">
                                                    {/* <table className="table mt-6">

                                                        <tbody>

                                                            <tr>
                                                                <td>
                                                                    <div className="flex items-center gap-3 mt-6">

                                                                        <div className="flex gap-5">
                                                                            <div className="font-bold">Subscription Fee</div>
                                                                            <p>  ${location.state.price}</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>

                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="flex items-center gap-3">

                                                                        <div>
                                                                            <div className="font-bold">Subtotal</div>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="flex items-center gap-3">

                                                                        <div>
                                                                            <div className="font-bold">Subtotal</div>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    $250.00
                                                                    <br />
                                                                    <span className="badge badge-ghost badge-sm">$0.00</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="flex items-center gap-3">

                                                                        <div>
                                                                            <div className="font-bold">Total due</div>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    $250.00
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table> */}
                                                    <p className="py-5 pr-10">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam blanditiis ratione quam laboriosam explicabo qui natus neque ex perferendis ab aut quae dolores nemo corrupti est dolorum nam eligendi, sapiente optio deserunt incidunt. Explicabo, neque.</p>
                                                </div>
                                            </div>
                                            <div className="lg:w-1/2">
                                                <Elements stripe={stripePromise}>
                                                    <CheckOutForm information={information}></CheckOutForm>
                                                </Elements>
                                            </div>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition>
            </>
        </div>
    );
};

export default Payment;
