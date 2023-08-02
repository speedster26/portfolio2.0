import { motion } from 'framer-motion'
import React from 'react'
import { urlFor } from '../sanity'
import { Experience } from 'typing'
import Image from 'next/image'

type Props = {
  experience: Experience
}

const ExperienceCard = ({experience}: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:max-w-[600px] xl:max-w-[900px] snap-center bg-[#292929] p-5 md:p-5 overflow-hidden'>
        <motion.img initial={{y:-100,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{once:true}} transition={{duration:1.2}} className='w-20 h-20 sm:w-24 sm:h-24 rounded-full xl:w-40 xl:h-40 object-cover object-center' src={urlFor(experience?.companyImg).url()} alt={"image"}/>
        <motion.div initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{once:true}} transition={{duration:1.2}} className='px-0 md:px-10'>
            <h4 className='text-xl md:text-xl font-light'>{experience.jobtitle}</h4>
            <p className='font-bold text-base md:text-xl mt-1'>{experience.company}</p>
            <div className='flex space-x-1 my-2'>
              {experience.technologies.map((tech,i) => (

                <Image key={i} width={20} height={20} className='w-5 h-5 md:h-10 md:w-10 rounded-full' src={urlFor(tech?.icon).url()} alt={experience.company} />

              ))}
            </div>
            <p className='uppercase py-2 text-xs md:text-sm text-gray-300'>{new Date(experience.dateStarted).toDateString()} - {experience.isCurrentlyWorking
            ?"Present":new Date(experience.dateEnded).toDateString()}</p>
            <ul className='list-disc space-y-1 md:space-y-2 ml-5 text-sm md:text-base'>
                {experience.description.map((desc,i) => (
                  <li key={i}>{desc}</li>
                ))}
            </ul>
        </motion.div>
    </article>
  )
}

export default ExperienceCard