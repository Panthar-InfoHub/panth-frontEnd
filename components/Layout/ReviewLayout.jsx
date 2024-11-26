'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { reviews } from '@/lib/data'
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';

const ReviewLayout = () => {

    return (
        <section className='section_container' >
            <Swiper spaceBetween={50} slidesPerView={3} className='w-full h-full' loop={true} >
                {reviews.map((review, index) => (
                    <SwiperSlide key={index} className='relative'  >
                        <div className="review_card">

                            {/* Rating */}
                            <div>
                                <div className='flex gap-4 pb-8' >
                                    <div className='text-xl-medium' > {review.rating} </div>
                                    <div>
                                        {Array(review.rating).fill(0).map((_, index) => (
                                            <span key={index} > ⭐ </span>
                                        ))}
                                    </div>
                                </div>
                                <p className='text-xl-medium' > {review.text} </p>
                            </div>

                            {/* AUTHOR */}
                            <div className='flex gap-6' >
                                <Image src={review.author.image} alt='author' width={48} height={48} className='rounded-full' />
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
