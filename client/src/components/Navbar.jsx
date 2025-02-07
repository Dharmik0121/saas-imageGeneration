import { useContext, useState } from 'react';
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import { motion } from "motion/react";

const Navbar = () => {

    const navigate = useNavigate();
    const { user, setShowLogin, logout, credit } = useContext(AppContext);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='flex items-center justify-between py-4 '>
            <Link to={'/'}>
                <img src={assets.logo} alt="" className='w-40 sm:w-32 lg:w-40 max-sm:w-30' />
            </Link>
            <div className="">
                {user ?
                    <div className="flex items-center gap-2 sm:gap-3">
                        <button onClick={() => navigate('/buy')} className='flex items-center text-white gap-2 bg-gradient-to-br from-[#31b16f] via-[#17a75c] to-[#002110] px-4 sm:px-6 py-1.5 sm:py-2 rounded-full hover:scale-105 transition-all duration-700 '>
                            {/* <img className='w-5' src={assets.miniLogo} alt="" /> */}
                            {credit === 0 ?
                                <button className='max-sm:hidden cursor-pointer'>Buy Credits</button>
                                : <>
                                    <p className='max-sm:hidden'>Credits Left : </p>
                                    <span>{credit}</span>
                                </>
                            }
                        </button>
                        <p className='text-gray-600 max-sm:hidden'>Hi, {user.name}</p>
                        {/* <div className="relative group hover:">
                            <img src={assets.profile_icon} className='w-10 drop-shadow' alt="" />
                            <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12">
                                <ul className='bg-gray-200 px-6 py-1.5 rounded-lg hover:bg-gray-300'>
                                    <li onClick={logout} className=' px-2 cursor-pointer py-1 border-b'>
                                        Logout
                                    </li>
                                </ul>
                            </div>
                        </div> */}
                        <div
                            className="relative group"
                            onClick={() => setMenuOpen(!menuOpen)} // Toggle menu on click
                            onMouseLeave={() => setMenuOpen(false)} // Hide on mouse leave (desktop)
                        >
                            <img src={assets.profile_icon} className='w-10 drop-shadow cursor-pointer' alt="Profile" />

                            <div
                                className={`absolute ${menuOpen ? "block" : "hidden"} group-hover:block top-0 right-0 z-10 text-black rounded pt-12`}
                            >
                                <ul className='bg-gray-200 px-6 py-1.5 rounded-lg hover:bg-gray-300'>
                                    <li onClick={logout} className='px-2 cursor-pointer py-1 border-b'>
                                        Logout
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    :
                    // <div className="flex items-center gap-2 sm:gap-5 ">
                    //     <p onClick={() => navigate('/buy')} className='cursor-pointer border-2 rounded-full px-7 py-1.5 sm:px-10  text-sm'>Pricing</p>
                    //     <button onClick={() => setShowLogin(true)} className='bg-zinc-800 text-white px-7 py-2 sm:px-10 rounded-full text-sm cursor-pointer hover:bg-zinc-900'>Login</button>

                    // </div>
                    <div className="flex items-center gap-2 sm:gap-5">
                        <p
                            onClick={() => navigate('/buy')}
                            className="bg-white/80 cursor-pointer border-2 border-black rounded-full px-5 py-1 text-xs sm:px-10 sm:py-2 sm:text-sm"
                        >
                            Pricing
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            animate={{ opacity: 1 }}
                            transition={{ default: { duration: 0.5 }, }}
                            onClick={() => setShowLogin(true)}
                            className="bg-zinc-800 text-white px-5 border-2 border-[#000000] py-1 text-xs sm:px-10 sm:py-2 sm:text-sm rounded-full cursor-pointer hover:bg-zinc-900"
                        >
                            Login
                        </motion.button>
                    </div>

                }


            </div>
        </div>
    )
}

export default Navbar