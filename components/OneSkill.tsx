import React from 'react'
import { motion } from "framer-motion"
import { Skill } from 'typing';
import { urlFor } from '../sanity';

type Props = {
    directionLeft?: boolean;
    skill: Skill
}

const OneSkill = ({ directionLeft , skill }: Props) => {
  return (
    <motion.div initial={{x:directionLeft?-75:75,opacity:0}} transition={{duration:1.5}} whileInView={{opacity:1,x:0}} className='group relative flex cursor-pointer'>
        <img className="rounded-full border border-gray-500 object-contain p-2 object-center w-16 h-16 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-outs " src={urlFor(skill?.icon).url()} alt={skill.title} />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white/50 w-16 h-16 xl:w-32 xl:h-32 rounded-full'>
            <div className='flex items-center justify-center h-full'>
                <p className='md:text-3xl font-bold text-black opacity-100'>{skill.progress}%</p>
            </div>
        </div>
    </motion.div>
  )
}

export default OneSkill