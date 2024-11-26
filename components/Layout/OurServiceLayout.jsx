'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef } from 'react'
import { WorkSwiper } from '../Swiper/WorkSwiper'

const OurWorkLayout = () => {
    const swiperRef = useRef(null);

    return (
        <section className='section_container h-auto relative w-full' >
            <div className="service_bg p-10" >

                <div className="card_container" >
                    <h1 className="heading"> Our <br />Works </h1>
                </div>

                <div className='flex flex-col-reverse sm:flex-row mt-10 min-h-[32rem] h-full rounded-3xl bg-grey-3 justify-between' >
                    <div className=' p-10 flex flex-col items-start gap-5 max-w-[25rem]' >
                        <h3 className='text-xl-medium' > Lorem ipsum dolor sit amet. </h3>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, totam? </p>
                    </div>

                    <WorkSwiper swiperRef={swiperRef} />
                </div>

                <div className='sm:flex gap-1 mt-8 hidden ' >
                    <div className='swiper_btn group' onClick={() => { swiperRef.current.slidePrev() }} >
                        <span className='group-hover:text-white' > <ChevronLeft /> </span>
                    </div>
                    <div className='swiper_btn group' onClick={() => { swiperRef.current.slideNext() }} >
                        <span className='group-hover:text-white' > <ChevronRight /> </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurWorkLayout