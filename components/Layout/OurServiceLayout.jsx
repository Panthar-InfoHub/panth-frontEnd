'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRef } from 'react'
import { WorkSwiper } from '../Swiper/WorkSwiper'
import ProgressBar from '../ProgressBar'

const OurWorkLayout = () => {
    const swiperRef = useRef(null);

    return (
        <section className='section_container h-auto relative w-full' id='workSection' >
            <div className="service_bg p-4 pt-8 md:p-10" >

                <div >
                    <h1 className="main_heading"> Our <br />Works </h1>
                </div>

                <div className='' >
                    <WorkSwiper swiperRef={swiperRef} />
                </div>

                <div className='sm:flex mt-8 hidden gap-7 items-center' >
                    <div className='flex gap-4' >
                        <div className='swiper_btn group' onClick={() => { swiperRef.current?.slidePrev() }} >
                            <span className='group-hover:text-white' > <ChevronLeft /> </span>
                        </div>
                        <div className='swiper_btn group' onClick={() => { swiperRef.current?.slideNext() }} >
                            <span className='group-hover:text-white' > <ChevronRight /> </span>
                        </div>
                    </div>

                    {/* LINE PROGRESSION */}
                    <div className='w-full' >
                        {swiperRef.current && <ProgressBar swiper={swiperRef.current} />}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurWorkLayout