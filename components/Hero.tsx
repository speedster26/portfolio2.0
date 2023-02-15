import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import BackgroudCircles from './BackgroudCircles'

type Props = {}

const Hero = (props: Props) => {
    const [text, count] = useTypewriter({
        words: ["Hi, The Name's Harshit Verma", 'Guy-who-loves-Coffee.tsx', '<ButLovesToCodeMore />'],
        loop: true,
        delaySpeed: 2000,
    })
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroudCircles />
            <Image className='relative rounded-full h-32 w-32 mx-auto object-cover' alt='image' src={"https://portfolio-speedster26.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fnmm7b61b%2Fproduction%2F36349dfeb3a75f67c6ad21cddf9ded5a0d330f0d-3024x4032.jpg%3Fw%3D500&w=384&q=75"} width={'500'} height={"500"} />

            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Engineer</h2>
                <h1 className='text-3xl lg:text-6xl font-semibold px-10'>
                    <span className='mr-3 '>{text}</span>
                    <Cursor cursorColor='#F7AB0A' />
                </h1>
                <div className='pt-5'>
                  <Link href={"#about"}><button className='heroButton'>About</button></Link>
                  <Link href={"#experience"}><button className='heroButton'>Experience</button></Link>
                  <Link href={"#skills"}><button className='heroButton'>Skills</button></Link>
                  <Link href={"#projects"}><button className='heroButton'>Projects</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Hero