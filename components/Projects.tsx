import React from 'react'
import { motion } from "framer-motion"
import { Project } from 'typing'
import { urlFor } from '../sanity'
import { useRouter } from 'next/router'

type Props = {
    projects: Project[]
}

const Projects = ({projects}: Props) => {
    const router = useRouter()
  return (
    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.5}} className='flex relative overflow-hidden flex-col text-left md:flex-row w-full h-screen justify-evenly mx-auto items-center z-0'>
    <h3 className='absolute flex top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Projects
    </h3>
    <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
        {/* ProjectsCard */}
        {projects.map((project,i) => (
            <div key={project._id} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                <motion.img initial={{y:-200,opacity:0}} transition={{duration:1.2}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className='max-w-xs' onClick={()=>router.push(project.projectLink)} src={urlFor(project.projectImg).url()} alt="" />
                <motion.div initial={{y:300,opacity:0}} transition={{duration:1.2}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className='space-y-5 md:space-y-10 px-0 md:p-10 max-w-6xl'>
                    <h4 className='text-2xl md:text-4xl font-semibold text-center'>
                        <span className='underline decoration-[#F7AB0A]/50'>
                            Case Study {i+1} of {projects.length}: 
                        </span>
                         {" "}{project.title}
                    </h4>
                    <div className='flex items-center justify-center space-x-2'>
                        {project.technologies.map((tech)=>(
                            <img key={tech._id} className='h-10 h-10' src={urlFor(tech.icon).url()} alt={""}/>
                        ))}
                    </div>
                    <p className='text-lg md:text-left'>
                        {project.description}
                    </p>
                </motion.div>
            </div>
        ))}
    </div>
    <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'/>    
    </motion.div>
  )
}

export default Projects