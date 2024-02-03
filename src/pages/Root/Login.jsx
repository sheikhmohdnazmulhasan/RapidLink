import { useContext, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import Swal from "sweetalert2";
import { sendEmailVerification, sendPasswordResetEmail, signOut } from "firebase/auth";
import { auth } from "../../firebase.config";

const Login = () => {
    const { logInWithEmailAndPassword, googleSignIn, facebookSignIn } = useContext(AuthContext);

    const [showPass, setShowPass] = useState(false);
    const [showPassResetText, setShowPassResetText] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const [showModal, setShowModal] = useState(true);
    const navigate = useNavigate();

    const handleResetEmail = () => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

        if (!emailRegex.test(userEmail)) {
            Swal.fire({
                icon: 'error',
                text: 'Please Provide Valid Email Address'
            });

            return

        } else {
            axios.post(`http://localhost:5000/api/email-validation`, { email: userEmail }).then(result => {

                if (!result.data.validity) {
                    Swal.fire({
                        icon: 'info',
                        title: "Account Doesn't Exist!"
                    });

                    return

                } else {
                    sendPasswordResetEmail(auth, userEmail).then(() => {
                        Swal.fire({
                            icon: 'success',
                            title: 'Reset email has send to your inbox',
                            text: 'A Password Reset email has been sent to you. If you do not see the email in your inbox, please check your folder'
                        });

                    }).catch(err => console.log(err))
                }

            }).catch(err => console.log(err))
        }
    }


    const handleLogin = (event) => {
        event.preventDefault();
        setShowPassResetText(false);

        const email = event.target.email.value;
        const password = event.target.password.value;

        const toastId = toast.loading('Working');

        logInWithEmailAndPassword(email, password).then((user) => {

            toast({ id: toastId });

            if (!user.user.emailVerified) {

                Swal.fire({
                    title: "Email is not verified!",
                    text: "Your account email has not been verified. If not verified now, you will not be able to login. Please verify your email.",
                    icon: "error",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Resend Email"

                }).then((result) => {

                    if (result.isConfirmed) {
                        sendEmailVerification(auth.currentUser).then(() => {

                            Swal.fire({
                                icon: 'success',
                                title: 'Verification email has been sent',
                                text: 'A verification email has been sent to you. If you do not see the email in your inbox, please check your folder'
                            });
                            
                            signOut(auth);
                        })
                    }
                });

            }

        }).catch(err => {

            if (err.code == 'auth/invalid-credential') {

                toast.error('Incorrect Password', { id: toastId });
                setShowPassResetText(true);

            } else {
                toast.error('Something went wrong', { id: toastId });
            }
        });

    }

    // Social media login functionality has been added to the login page where you can login with Google and Facebook.
    const handleSocialLogin = (media) => {

        media.then((user) => {
            const userData = {
                name: user.user.displayName,
                email: user.user.email,
                role: 'user'
            }

            axios.post('http://localhost:5000/api/users', userData).then(() => {

                navigate('/')

            }).catch(err => toast.error(err.code));

        }).catch(err => toast.error(err.code));

    }

    return (
        <div data-aos='zoom-out'>
            <Toaster />

            {/* Open the modal using document.getElementById('ID').showModal() method */}

            {showModal && <dialog id="my_modal_2" className="modal bg-blue-500 rounded">
                <div className="modal-box p-5 flex flex-col justify-center">


                    <input type="email" className="px-2 py-1 bg-gray-300" placeholder="Please Provide Your Email Address" onChange={(event) => setUserEmail(event.target.value)} /> <br />
                    <button className="bg-gray-300 px-3 py-1 hover:bg-gray-400 transition duration-300" onClick={() => {
                        handleResetEmail();
                        setShowModal(!showModal);
                    }}>Reset</button>


                </div>
                <form method="dialog" className="modal-backdrop">
                    <button className="bg-gray-300 px-3 py-1 hover:bg-gray-400 w-full transition duration-300">Close</button>
                </form>
            </dialog>}

            <div>
                <div className=" px-5 py-6 flex flex-col justify-center sm:py-12">
                    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                        </div>
                        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                            <div className="max-w-md mx-auto">
                                <div>
                                    <h1 className="text-2xl font-semibold mb-5">Welcome Back to RapidLink </h1>
                                </div>
                                <div className="flex items-center gap-4 mt-5 mb-5">
                                    <button type="button" className="py-2.5 px-4 text-sm font-semibold rounded text-blue-500 bg-blue-100 hover:bg-blue-200 focus:outline-none" onClick={() => handleSocialLogin(googleSignIn())}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" className="inline mr-4" viewBox="0 0 512 512">
                                            <path fill="#fbbd00"
                                                d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                                                data-original="#fbbd00" />
                                            <path fill="#0f9d58"
                                                d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                                                data-original="#0f9d58" />
                                            <path fill="#31aa52"
                                                d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                                                data-original="#31aa52" />
                                            <path fill="#3c79e6"
                                                d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                                                data-original="#3c79e6" />
                                            <path fill="#cf2d48"
                                                d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                                                data-original="#cf2d48" />
                                            <path fill="#eb4132"
                                                d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                                                data-original="#eb4132" />
                                        </svg>
                                        Sign in with Google
                                    </button>
                                    <button type="button" className="py-2.5 px-4 text-xl font-semibold rounded text-black bg-blue-100 hover:bg-blue-200 focus:outline-none" onClick={() => handleSocialLogin(facebookSignIn())}>
                                        <FaFacebook />
                                    </button>
                                </div>
                                <form onSubmit={handleLogin} className="divide-y divide-gray-200">
                                    <div className="relative mb-5">
                                        <input id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                                        <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                                    </div>
                                    <div className="relative">
                                        <input id="password" name="password" type={showPass ? 'text' : 'password'} className="peer relative placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                                        <div className="cursor-pointer" onClick={() => setShowPass(!showPass)}>
                                            {!showPass ? <IoIosEye className="absolute right-0 top-1" /> :
                                                <IoIosEyeOff className="absolute  right-0 top-1" />}
                                        </div>
                                        <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>

                                    </div>
                                    {showPassResetText && <p className="mt-2 font-semibold hover:underline cursor-pointer" onClick={() => {
                                        setShowModal(true)
                                        document.getElementById('my_modal_2').showModal();

                                    }}>Forgot Password</p>}
                                    <div className="relative flex gap-4 items-center">
                                        <button className="bg-[#FFE924] text-black mt-5 rounded-md px-2 py-1">Sign In</button>
                                        <div className="flex mt-4">
                                            <p className="text-sm ">Don&apos;t Have an account?</p>
                                            <Link to={'/register'} className="text-blue-600 text-sm ml-3 font-semibold">Register</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;