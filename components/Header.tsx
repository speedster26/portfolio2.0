import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Social } from 'typing';

type Props = {
  socials: Social[]
}

const Header = ({socials}: Props) => {
  const router = useRouter();
  
  return (
    <header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-5'>
      <motion.div initial={{ x: -500, opacity: 0, scale: 0.5 }} animate={{ x: 0, opacity: 1, scale: 1 }} transition={{ duration: 1.5 }} className='flex items-center'>
        {/*Social Icons  */}
        {socials.map((social) => (
          <SocialIcon key={social._id} url={social.url} fgColor='gray' bgColor='transparent' className='hover:scale-105 transition-all ease-in-out'/>
        ))}

      </motion.div>
      <motion.div initial={{ x: 500, opacity: 0, scale: 0.5 }} animate={{ x: 0, opacity: 1, scale: 1 }} transition={{ duration: 1.5 }} className='flex items-center text-gray-300 cursor-pointer hover:scale-110 z-30'>
        {/* <Link href={"#contact"}> */}
        <div className=' hover:scale-105 ease-in-out transition-all'>

        <SocialIcon onClick={()=>router.push("#contact")} className='cursor-pointer' network='email' fgColor='gray' bgColor='transparent' />
        <p className='uppercase hidden md:inline-flex text-sm text-gray-400'><Link href={"#contact"}>Get in Touch</Link></p>
        </div>
        {/* </Link> */}
      </motion.div>
    </header>
  )
}

export default Header