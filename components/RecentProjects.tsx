import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'

const RecentProjects = () => {
  return (
    <div className='py-10 px-4 sm:px-6 lg:px-8 md:px-7' id="projects"> {/* Changed from py-25 */}
      <h1 className='heading mb-8 sm:text-sm'>
        A Small selection of {' '}
        <span className='text-purple'>Recent Projects</span>
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-4 gap-x-8 md:gap-x-16 lg:gap-x-24 gap-y-18 mb-25'>
        {projects.map(({id, title, des, img, iconLists, link}) => (
            <div key={id} className='sm:h-[20rem] md:h-[25rem] lg:min-h-[30rem] h-[28rem] flex items-center justify-center w-full'>
                <PinContainer title={link} href={link}>
                    <div className='relative flex items-start justify-center sm:w-[470px] sm:h-[20vh] overflow-hidden md:h-[20vh] lg:h-[30vh] lg:w-[70vh] md:w-[40vh] mb-10'>
                        <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                            <img src = "/bg.png" alt = "bg-img"/>
                        </div>
                        <img 
                            src={img}
                            alt={title}
                            className='z-10 absolute bottom-0'
                        />
                    </div>
                    <h1 className='font-bold lg:text-xl md:text-xl text-base'>
                        {title}
                    </h1>
                    <p className='lg:text-xl lg:font-light font-light text-sm line-clamp-2'>
                        {des}
                    </p>
                    <div className='flex items-center justify-between mt-7 mb-3'>
                        <div className='flex items-center'>
                            {iconLists.map((icon, index) => (
                                <div key={icon} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 sm:w-8 sm:h-8 w-6 h-6 flex justify-center items-center' style={{transform: `translateX(-${6*index*2}px)`}}>
                                    <img src={icon} alt={icon} className='p-2'/>
                                </div>
                            ))}
                        </div>
                        <div className='flex justify-center items-center p-3'>
                            <p className='flex lg:text-xl md:text-xs text-sm text-[#CBACF9]'>See Project</p>
                            <FaLocationArrow className='ms-3' color='#CBACF9' />
                        </div>
                    </div>
                </PinContainer>
            </div>
        ))}
      </div>
    </div>
  )
}

export default RecentProjects