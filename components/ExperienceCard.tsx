import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

const ExperienceCard = (props: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:max-w-[600px] xl:max-w-[900px] snap-center bg-[#292929] p-5 md:p-5 overflow-hidden'>
        <motion.img initial={{y:-100,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{once:true}} transition={{duration:1.2}} className='w-32 h-32 rounded-full xl:w-40 xl:h-40 object-cover object-center' src={"https://portfolio-speedster26.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fnmm7b61b%2Fproduction%2F36349dfeb3a75f67c6ad21cddf9ded5a0d330f0d-3024x4032.jpg%3Fw%3D500&w=384&q=75"} alt={"image"}/>
        <motion.div initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{once:true}} transition={{duration:1.2}} className='px-0 md:px-10'>
            <h4 className='text-xl md:text-xl font-light'>CEO</h4>
            <p className='font-bold text-base md:text-xl mt-1'>Lorem</p>
            <div className='flex space-x-1 my-2'>
                <img className='w-5 h-5 md:h-10 md:w-10 rounded-full' src="" alt="tech" />
            </div>
            <p className='uppercase py-2 text-xs md:text-sm text-gray-300'>Started... - Ended...</p>
            <ul className='list-disc space-y-1 md:space-y-2 ml-5 text-sm md:text-base'>
                <li>Lorem ipsum dolor, sit amet</li>
                <li>Lorem ipsum dolor, sit amet</li>
                <li>Lorem ipsum dolor, sit amet</li>
                <li>Lorem ipsum dolor, sit amet</li>
                <li>Lorem ipsum dolor, sit amet</li>
            </ul>
        </motion.div>
    </article>
  )
}

export default ExperienceCard