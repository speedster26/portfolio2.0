import React from 'react'
import { motion } from "framer-motion"

type Props = {}

const About = (props: Props) => {
  return (
    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.5}} className='h-screen flex flex-col
     relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute flex top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            About
        </h3>
        <motion.img initial={{x:-200,opacity:0}} whileInView={{x:0,opacity:1}} viewport={{once:true}} transition={{duration:1.2}} className="-mb-20 md:mb-0 flex-shrink-0 w-36 h-36 rounded-full object-cover md:rounded-lg md:w-64 md:h-96" src={"https://portfolio-speedster26.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fnmm7b61b%2Fproduction%2F36349dfeb3a75f67c6ad21cddf9ded5a0d330f0d-3024x4032.jpg%3Fw%3D500&w=384&q=75"} alt={"image"}/>
        <div className='md:space-y-10 space-y-5 px-0 md:px-10'>
            <h4 className='text-xl md:text-4xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0B]/50'>little</span> background</h4>
            <p className='text-xs md:text-base'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia magnam consequuntur optio, similique laudantium, nemo incidunt recusandae repudiandae, voluptatum labore accusamus ullam est. Veritatis minima repellat non corrupti culpa sapiente nisi suscipit, hic rerum vitae quasi ipsam dolor exercitationem optio dicta ullam, Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur molestiae aliquam illum, ipsum at in! Alias ducimus rem ipsa, corporis doloribus est impedit iste deleniti deserunt debitis esse expedita assumenda. Rerum labore eveniet sed ea magni, minima, modi eligendi, unde omnis expedita laborum porro consectetur ipsa nesciunt? Aliquam, omnis sed?
            </p>
        </div>
    </motion.div>
  )
}

export default About