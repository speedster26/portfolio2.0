import React from 'react'
import { motion } from "framer-motion"
import { PageInfo } from 'typing'
import { urlFor } from '../sanity'

type Props = {
  pageInfo: PageInfo
}

const About = ({pageInfo}: Props) => {
  return (
    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.5}} className='h-screen flex flex-col
     relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute flex top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            About
        </h3>
        <motion.img initial={{x:-200,opacity:0}} whileInView={{x:0,opacity:1}} viewport={{once:true}} transition={{duration:1.2}} className="-mb-20 md:mb-0 flex-shrink-0 w-36 h-36 rounded-full object-cover md:rounded-lg md:w-64 md:h-96" src={urlFor(pageInfo?.profilePic).url()} alt={"image"}/>
        <div className='md:space-y-10 space-y-5 px-0 md:px-10'>
            <h4 className='text-xl md:text-4xl font-semibold'>Here is a <span className='underline decoration-[#31e390]/50'>little</span> background</h4>
            <p className='text-xs md:text-base'>
                {pageInfo?.bgInfo}
            </p>
        </div>
    </motion.div>
  )
}

export default About