import { assets } from "../assets/assets";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { motion } from 'motion/react'
import axios from 'axios'
import toast from 'react-hot-toast';

const Login = () => {
    const [type, setType] = useState("password");
    const [icon, setIcon] = useState(eyeOff);
    const [state, setState] = useState("Login");
    const { setShowLogin, backendUrl, setToken, setUser } = useContext(AppContext);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, []);


    const handleToggle = () => {
        if (type === "password") {
            setIcon(eye);
            setType("text");
        } else {
            setIcon(eyeOff);
            setType("password");
        }
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            if (state === 'Login') {
                const { data } = await axios.post(`${backendUrl}/api/users/login`, { email, password })
                if (data.success) {
                    setToken(data.token)
                    setUser(data.user)
                    localStorage.setItem('token', data.token)
                    setShowLogin(false)
                    toast.success(data.message)
                } else {
                    toast.error(data.message)
                }
            } else {
                const { data } = await axios.post(`${backendUrl}/api/users/register`, {
                    name, email, password
                })
                if (data.success) {
                    setToken(data.token)
                    setUser(data.user)
                    localStorage.setItem('token', data.token)
                    setShowLogin(false)
                    toast.success(data.message)
                } else {
                    toast.error(data.message)
                }
            }
        } catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong");
        }
    }

    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">

            <motion.form
                initial={{ opacity: 0.2, y: 50 }}
                transition={{ duration: 0.3 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative bg-white p-10  rounded-xl text-slate-500 "
                onSubmit={onSubmitHandler}
            >
                <img src={assets.logo} alt="" width={100} />
                <h1 className=" text-center text-2xl text-neutral-700 font-medium">
                    {state}
                </h1>
                <p className="text-sm">Wlecome back! Plase sign in to continue</p>
                {state !== "Login" && (
                    <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-5">
                        <img src={assets.user_icon} width={20} alt="" />
                        <input
                            type="text"
                            className="outline-none text-sm "
                            required
                            placeholder="Full Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                )}
                <div className="border px-4 py-2 flex items-center gap-2 rounded-full mt-3">
                    <img src={assets.email_icon} width={20} alt="" />
                    <input
                        type="email"
                        className="outline-none text-sm "
                        required
                        placeholder="Email Id"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="relative border px-4 py-2 flex items-center gap-2 rounded-full mt-3">
                    <img src={assets.lock_icon} width={15} alt="" />
                    <input
                        type={type}
                        className="outline-none max-w-[80%] flex-grow text-sm pr-6"
                        required
                        width={50}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Icon
                        className="absolute right-5 cursor-pointer text-black"
                        icon={icon}
                        size={15}
                        onClick={handleToggle}
                    />
                </div>
                <p className="my-4">
                </p>
                <button className="w-full text-white py-2 rounded-full cursor-pointer bg-gradient-to-br from-[#31b16f] via-[#17a75c] to-[#002110]">
                    {state === "Login" ? "Login" : "Create Account"}
                </button>
                {state === "Login" ? (
                    <p className="mt-5 text-center">
                        Don&apos;t have an Account?{" "}
                        <span className="text-[#002110] cursor-pointer" onClick={() => setState('Sign Up')}>Sign Up</span>
                    </p>
                ) : (
                    <p className="mt-5 text-center">
                        Don&apos;t have an Account?{" "}
                        <span className="text-[#002110] cursor-pointer" onClick={() => setState('Login')}>Login</span>
                    </p>
                )}
                <img
                    src={assets.cross_icon}
                    alt=""
                    onClick={() => setShowLogin(false)}
                    className="absolute top-5 right-5 hover:bg-gray-300 p-2 rounded-md cursor-pointer"
                />
            </motion.form>
        </div>
    );
};

export default Login;
