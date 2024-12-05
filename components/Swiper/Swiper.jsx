'use client'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export const SwiperComponent = () => {
    return (
        <section className='section_container h-auto relative w-full' >
            <Swiper spaceBetween={50} slidesPerView={2} className='w-full h-full' loop={true}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }} >
                {[0, 1, 2, 3, 4, 5, 6].map((slide, index) => (
                    <SwiperSlide key={index} className='relative'  >
                        <div className="collab_circle"></div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};