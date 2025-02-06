import { assets } from "../assets/assets"


const Footer = () => {
    return (
        <div className="flex items-center justify-between gap-4 py-3 mt-20">
            <img src={assets.logo} alt="" width={150} />
            <p className="flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden">Copyright @Dharmik.dev | All right reserved</p>
            <div className="flex gap-2.5">
                <img src={assets.facebook_icon} alt="" className="w-[25px] sm:w-[35px]" />
                <img src={assets.twitter_icon} alt="" className="w-[25px] sm:w-[35px]" />
                <img src={assets.instagram_icon} alt="" className="w-[25px] sm:w-[35px]" />
            </div>
        </div>
    )
}

export default Footer