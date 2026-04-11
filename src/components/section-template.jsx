import { Indie_Flower } from 'next/font/google'
import React from 'react'
import ThemeBasedImage from './theme-based-image'

const indieFlower = Indie_Flower({
    subsets: ["latin"],
    weight: ["400"]

})

const SectionTemplate = ({ children, title, subtitle }) => {
    return (
        <section className='mt-18 '>

            {/* heading */}
            <div>
                <div className='flex gap-2 items-center'>
                    <div className='h-5 w-5 lg:h-8 lg:w-8'>
                        <ThemeBasedImage dark={"/star-dark.svg"} light={"/star-light.svg"} classes={"h-5 w-5 lg:h-8 lg:w-8"} />
                    </div>
                    <h2 className='font-semibold'>{title}</h2>
                </div>
                {subtitle && <span className={`small border-b ml-2 ${indieFlower.className}`}> {subtitle}</span>}
            </div>
            <div className='mt-6'>
                {children}
            </div>
        </section>
    )
}

export default SectionTemplate