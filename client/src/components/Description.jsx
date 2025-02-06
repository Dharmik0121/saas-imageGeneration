import { assets } from "../assets/assets"
import { motion } from 'motion/react'

const Description = () => {
    return (
        <motion.div
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col my-24 p-6 md:px-28 items-center justify-center">
            <h1 className="text-3xl sm:text-4xl font-semibold mb-2">Create AI Images</h1>
            <p className="text-gray-500 mb-8">Turn your imagination into visuals</p>
            <div className="flex flex-col gap-5 md:gap-14 md:flex-row items-center">
                <img src={assets.sample_img_1} alt="" className="w-80 xl:w-96 rounded-lg" />
                <div>
                    <h2 className="text-3xl font-medium max-w-lg mb-4">Introducing the AI-powered Text toImage Generator</h2>
                    <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio harum aperiam at alias perspiciatis rerum consequatur. Blanditiis neque est voluptate. Omnis eveniet error at dolor numquam tempora beatae rerum nam, maxime quibusdam! Cum unde pariatur odio ex iste, sunt minima! Ad id corporis dolorem sint fuga vel natus ab voluptatibus?</p>
                    <p className="text-gray-600 ">Optio harum aperiam at alias perspiciatis rerum consequatur. Blanditiis neque est voluptate. Omnis eveniet error at dolor numquam tempora beatae rerum nam, maxime quibusdam! Cum unde pariatur odio ex iste, sunt minima! Ad id corporis dolorem sint fuga vel natus ab voluptatibus?</p>
                </div>
            </div>
        </motion.div>
    )
}

export default Description