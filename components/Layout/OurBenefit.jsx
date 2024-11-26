'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

const OurBenefit = () => {

    const benefits = [
        {
            title: "$520M",
            description: " To Lay a solid foundation for the creative process that follows, we begin our journey with the discovery phase. To Lay a solid foundation for the creative process that follows, we begin our journey with the discovery phase. To Lay a solid foundation for the creative process that follows, we begin our journey with the discovery phase."
        },
        {
            title: "$520M",
            description: " To Lay a solid foundation for the creative process that follows, we begin our journey with the discovery phase. To Lay a solid foundation for the creative process that follows, we begin our journey with the discovery phase. To Lay a solid foundation for the creative process that follows, we begin our journey with the discovery phase."
        },
        {
            title: "$520M",
            description: " To Lay a solid foundation for the creative process that follows, we begin our journey with the discovery phase. To Lay a solid foundation for the creative process that follows, we begin our journey with the discovery phase. To Lay a solid foundation for the creative process that follows, we begin our journey with the discovery phase."
        },
        {
            title: "$520M",
            description: " To Lay a solid foundation for the creative process that follows, we begin our journey with the discovery phase. To Lay a solid foundation for the creative process that follows, we begin our journey with the discovery phase. To Lay a solid foundation for the creative process that follows, we begin our journey with the discovery phase."
        },
        {
            title: "$520M",
            description: " To Lay a solid foundation for the creative process that follows, we begin our journey with the discovery phase. To Lay a solid foundation for the creative process that follows, we begin our journey with the discovery phase. To Lay a solid foundation for the creative process that follows, we begin our journey with the discovery phase."
        },
    ]

    return (
        <section className='section_container h-auto relative w-full' >

            <div className='flex flex-col gap-20' >
                <div>
                    <h3 className="heading"> OUR <br /> BENEFITS </h3>
                </div>

                <div className='gap-3 hidden sm:flex ' >
                    <div className="review_card flex-[0.25] ">
                        <div>
                            <div className='flex gap-4 pb-5' >
                                <div className='benefit_heading' >
                                    <Image src="/user/user-1.jpeg" alt='profile' width={48} height={48} className='rounded-full'  />
                                </div>
                            </div>
                            <p className='text-xl-medium' >
                                To Lay a solid foundation for the creative process that follows, we begin our journey with the discovery phase. To Lay a solid foundation for the creative process that follows, we begin our journey with the discovery phase. To Lay a solid foundation for the creative process that follows, we begin our journey with the discovery phase.
                            </p>
                        </div>
                    </div>

                    {/* SWIPER */}
                    <Swiper spaceBetween={30} slidesPerView={2} className='w-full h-auto flex-[0.7] !mx-0 ' loop={true} >
                        {benefits.map((benefit, index) => (
                            <SwiperSlide key={index} className='relative'  >
                                <div className="benefit_card">
                                    <div>
                                        <div className='flex gap-4 pb-6 border-b-2 border-b-grey-1 mb-8' >
                                            <div className='benefit_heading' > {benefit.title} </div>
                                        </div>
                                        <p className='text-small-medium' > {benefit.description} </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

            </div>
        </section >
    )
}

export default OurBenefit
