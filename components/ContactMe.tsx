import React from 'react'
import { EnvelopeIcon, PhoneIcon, } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from 'typing';

type Props = {
    pageInfo: PageInfo
}
type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};


const ContactMe = ({pageInfo}: Props) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        window.location.href = `mailto:${pageInfo.email}?subject=${data.subject}&body=Hi, my name is ${data.name}. ${data.message} (${data.email}))`
    }

    return (
        <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Contact
            </h3>
            <div className='flex flex-col space-y-10 px-16 mx-8'>
                <h4 className='md:text-4xl text-2xl font-semibold text-left md:text-center'>
                    I have got just what you need.{" "}
                    <span className='decoration-[#F7AB0A] underline'>
                        Lets Talk.
                    </span>
                </h4>
                <div className='space-y-5 flex flex-col'>
                    <div className='flex items-center space-x-4'>
                        <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='md:text-2xl text-lg'>{pageInfo.email}</p>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='md:text-2xl text-lg'>{pageInfo.phoneNumber}</p>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-full mx-auto '>
                    <div className='flex md:flex-row flex-col space-y-2 md:pace-x-2'>
                        <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
                        <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
                    </div>
                    <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />
                    <textarea {...register('message')} placeholder='Message' className='contactInput scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80' />
                    <button type='submit' className='bg-[#F7AB0A] md:py-5 md:px-10 rounded-md text-black font-bold text-lg'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ContactMe