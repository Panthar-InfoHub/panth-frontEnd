'use client'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export const WorkSwiper = ({ swiperRef }) => {
    return (
        <Swiper onSwiper={(swiper) => {
            swiperRef.current = swiper;
        }} slidesPerView={1} className='w-full h-full' loop={true} >
            {[0, 1, 2, 3].map((slide, index) => (
                <SwiperSlide key={index} className='relative !mr-0 flex'  >
                    <div className='work_card' >

                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};