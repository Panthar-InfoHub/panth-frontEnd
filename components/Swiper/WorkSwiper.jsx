'use client'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export const WorkSwiper = ({ swiperRef }) => {

    const works = [
        {
            title: "SURAKSHA KAWACH",
            text: "SURAKSHA KAWACH is a unique security system that provides real-time protection with quick warnings and location tracking. It smoothly integrates technology with safety, establishing a new standard for personal and societal security.",
            video: {
                src: "/videos/suraksha.mp4"
            }
        },
        {
            title: "COMMING SOON",
            text: "COMMING SOON.........."
        },
    ]
    return (
        <Swiper onSwiper={(swiper) => { swiperRef.current = swiper }} slidesPerView={1} className='w-full h-full' >
            {works.map((work, index) => (
                <SwiperSlide key={index} className='relative !mr-0 flex'  >
                    <div className='flex flex-col-reverse sm:flex-row mt-10 min-h-[32rem] h-full rounded-3xl bg-[#D9D9D9] justify-between' >
                        <div className=' p-10 flex flex-col items-start gap-5 max-w-[25rem]' >
                            <h3 className='benefit_heading' > {work.title} </h3>
                            <p className='text-xl-medium' > {work.text} </p>
                        </div>
                        <div className='work_card flex-center overflow-hidden' >
                            <video autoPlay={true} muted loop className="" >
                                <source src={work?.video?.src} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};