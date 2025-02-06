import Header from "../components/Header"
import Steps from "../components/Steps"
import Description from "../components/Description"
import Testimonials from "../components/Testimonials"
import GenerateButton from "../components/GenerateButton"
import { motion, useScroll } from 'motion/react'

const Home = () => {
    const { scrollYProgress } = useScroll()
    return (
        <div className=''>
            <motion.div
                id="scroll-indicator"
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 5,
                    originX: 0,
                    backgroundColor: "#002110",
                }}
            />
            <Header />
            <Steps />
            <Description />
            <Testimonials />
            <GenerateButton />
        </div>
    )
}

export default Home