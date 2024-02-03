import { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaFacebook } from "react-icons/fa";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { sendEmailVerification, updateProfile } from "firebase/auth";
import { auth } from "../../firebase.config";
import axios from "axios";
import Swal from "sweetalert2";


const Register = () => {
    const { signUpUserWithEmailAndPassword, googleSignIn, facebookSignIn, } = useContext(AuthContext);
    const navigate = useNavigate()

    // P23233444##12s

    const [showPass, setShowPass] = useState(false)
    const [showPass2, setShowPass2] = useState(false);

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const conPassword = form.conPassword.value;

        const toastId = toast.loading('Working');

        const passRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

        if (!passRegex.test(password)) {

            toast.error('Password Must be minimum eight characters, at least one letter, one number and one special character', { id: toastId });
            return

        } else if (password !== conPassword) {

            toast.error('Password did not match', { id: toastId });
            return

        } else {

            signUpUserWithEmailAndPassword(email, password).then(() => {


                updateProfile(auth.currentUser, {
                    displayName: name

                }).then(() => {

                    sendEmailVerification(auth.currentUser).then(() => {

                        const userData = {
                            name, email, role: 'user'
                        }

                        axios.post(`http://localhost:5000/api/users`, userData).then((data) => {

                            if (data.data.success) {
                                toast({ id: toastId });

                                Swal.fire({
                                    icon: 'success',
                                    title: 'verification email has been sent',
                                    text: ''
                                })

                                setTimeout(() => {
                                    navigate('/')
                                }, 300)
                            }

                        }).catch(err => toast.error(err.code, { id: toastId }))


                    }).catch(err => toast.error(err.code, { id: toastId }));

                }).catch(err => toast.error(err.code, { id: toastId }));

            }).catch(err => {
                if (err.code == 'auth/email-already-in-use') {

                    toast.error('User Already Exist', { id: toastId });
                }
            });
        }

    }

    // Social media login functionality has been added to the registration page where you can login with Google and Facebook.
    const handleSocialRegister = (media) => {

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
            <div className=" px-5 py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                    </div>
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="max-w-md mx-auto">
                            <div>
                                <h1 className="text-2xl font-semibold">Register RapidLink Account</h1>
                            </div>
                            <div className="flex items-center gap-4 mt-5">
                                <button type="button" className="py-2.5 px-4 text-sm font-semibold rounded text-blue-500 bg-blue-100 hover:bg-blue-200 focus:outline-none" onClick={() => handleSocialRegister(googleSignIn())}>
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
                                <button type="button" className="py-2.5 px-4 text-xl font-semibold rounded text-black bg-blue-100 hover:bg-blue-200 focus:outline-none" onClick={() => handleSocialRegister(facebookSignIn())}>
                                    <FaFacebook />
                                </button>
                            </div>
                            <div className="divide-y divide-gray-200">
                                <form onSubmit={handleRegister} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    <div className="relative">
                                        <input id="name" name="name" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" required />
                                        <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Full Name</label>
                                    </div>
                                    <div className="relative">
                                        <input id="email" name="email" type="email" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" required />
                                        <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                                    </div>
                                    <div className="relative">
                                        <input id="password" name="password" type={showPass ? 'text' : 'password'} className="peer relative placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" required />
                                        <div className="cursor-pointer" onClick={() => setShowPass(!showPass)}>
                                            {!showPass ? <IoIosEye className="absolute right-0 top-1" /> :
                                                <IoIosEyeOff className="absolute  right-0 top-1" />}
                                        </div>
                                        <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>


                                    </div>

                                    <div className="relative">
                                        <input id="password2" name="conPassword" type={showPass2 ? 'text' : 'password'} className="peer relative placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" required />
                                        <div className="cursor-pointer" onClick={() => setShowPass2(!showPass2)}>
                                            {!showPass2 ? <IoIosEye className="absolute right-0 top-1" /> :
                                                <IoIosEyeOff className="absolute  right-0 top-1" />}
                                        </div>
                                        <label htmlFor="password2" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Confirm Password</label>

                                    </div>
                                    <div className="relative flex gap-4 items-center">
                                        <button className="bg-[#FFE924] text-black rounded-md px-2 py-1">Register</button>
                                        <div className="flex">
                                            <p className="text-sm">Have an account?</p>
                                            <Link to={'/login'} className="text-blue-600 text-sm ml-3 font-semibold">Login</Link>
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

export default Register;