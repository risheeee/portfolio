import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className='w-full pt-10 mb-[50px] md:mb-5' id='contact'>
      <div className='flex flex-col items-center'>
        <h1 className='heading lg:max-w-[45vh]'>
            Let's <span className='text-purple'> Connect</span>
        </h1>
        <p className='text-whte-200 md:mt-10 my-5 text-center'>
            I'm always excited to discuss, research or collaborate on projects or explore new opportunities in Artificial Intelligence & Machine Learning.
        </p>
        <a href='mailto:rishrash2712@gmail.com'>
            <MagicButton title="Let's get in touch" icon={<FaLocationArrow />} position='right'/>
        </a>
      </div>
      <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
        <p className='md:text-base text-sm md:font-normal font-light'>Copyright © Rishee Panchal 2025</p>
        <div className='flex items-center md:gap-3 gap-6 mt-4 sm:mt-0'>
            {socialMedia.map((profile) => (
                <a 
                    key={profile.id} 
                    href={profile.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:bg-opacity-90 transition-all duration-200'
                >
                    <img src={profile.img} alt={profile.img} width={20} height={20}/>
                </a>
            ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer