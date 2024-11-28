'use client'
import { reviews } from '@/lib/data';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const ReviewLayout = () => {

    return (
        <section className='section_container' >
            <Swiper spaceBetween={30} slidesPerView={1.5} className='w-full h-full' loop={true}
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
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
            >
                {reviews.map((review, index) => (
                    <SwiperSlide key={index} className='relative'  >
                        <div className="review_card">

                            {/* Rating */}
                            <div>
                                <div className='flex gap-2 pb-4 md:pb-8 items-center border-b border-b-black-hover' >
                                    <div className='text-xl-medium' > {review.rating} </div>
                                    <div className='flex gap-1' >
                                        {Array(review.rating).fill(0).map((_, index) => (
                                            <span key={index} className='text-[1rem]' > ⭐ </span>
                                        ))}
                                    </div>
                                </div>
                                <p className='text-xl-medium mt-4' > {review.text} </p>
                            </div>

                            {/* AUTHOR */}
                            <div className='flex gap-3 md:gap-6 items-center' >
                                <img src="/user/user-1.jpeg" alt='author' className='author_pfp' />
                                <div>
                                    <h3 className='text-xl-medium' > {review.author.name} </h3>
                                    <p className='text-small-medium' > {review.author.designation} </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section >
    )
}

export default ReviewLayout
