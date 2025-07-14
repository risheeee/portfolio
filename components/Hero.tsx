import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { cn } from "@/lib/utils"
import { TextHoverEffect } from './ui/TextHoverEffect'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { FlipWords } from './ui/FlipWords'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

const Hero = () => {
    return (
        <div className='pb-20 pt-36'>
            <div>
                <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
                <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
                <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
            </div>

            <div className="h-screen w-full bg-black-100 absolute top-0 left-0 flex items-center justify-center">
                <div
                    className={cn(
                        "absolute inset-0",
                        "[background-size:40px_40px]",
                        "[background-image:linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]"
                    )}
                />
                <div
                    className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100
                    [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]"
                />
            </div>

            <div className='flex justify-center relative my-20 z-10'>
                    <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                        <h2 className='uppercase tracking-widest text-s text-center text-blue-100 max-w-80'>
                            Come, look at my Journey!
                        </h2>
                        <div className='-mb-16'> {/* Negative margin to pull TextGenerateEffect up */}
                          <TextHoverEffect text='RISHEE' />
                        </div>
                        <div className='flex flex-wrap justify-center items-center gap-2 mt-3'>
                            <TextGenerateEffect 
                            className='text-center text-[20px] md:text-xl lg:text-2xl' 
                            words='Building Intelligence with'
                            />
                            <FlipWords words={['Artificial Intelligence', 'Deep Learning', 'Large Language Models', 'Web Development']} duration={3000} className='md:text-xl lg:text-2xl text-[20px] text-center text-purple dark:text-purple'/>
                        </div>
                        <a href='/RisheePanchal_3rdYear_AIML_60017230104 (1).pdf' download="Rishee_Panchal_3rdYear.pdf" className='mt-4 sm:mt-0'>
                            <MagicButton title='View Resume' icon={<FaLocationArrow />} position='right'/>
                        </a>
                    </div>
            </div>
        </div>
    )
}

export default Hero