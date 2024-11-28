'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

const OurBenefit = () => {

    const benefits = [
        {
            title: "SURAKSHA KAWACH",
            description: [
                { text: "SURAKSHA KAWACH is a unique security system that provides real-time protection with quick warnings and location tracking. It smoothly integrates technology with safety, establishing a new standard for personal and societal security." }
            ]
        },
        {
            title: "KEY FEATURES",
            description: [
                { text: "Real-Time Alerts" },
                { text: "Panic Button" },
                { text: "AI Threat Detection" },
                { text: "Geo-Fencing" },
                { text: "Secure Communication" },
                { text: "Law Enforcement Integration" },
            ],
        },
    ]

    return (
        <section className='section_container h-auto relative w-full' >

            <div className='flex flex-col gap-20' >
                <div>
                    <h3 className="main_heading"> OUR <br /> BENEFITS </h3>
                </div>

                <div className='gap-5 flex' >
                    <div className="review_card flex-[0.3] !hidden md:!flex">
                        <div>
                            <div className='flex gap-4 pb-5' >
                                <div className='benefit_heading' >
                                    <Image src="/user/abhay.jpg" alt='profile' width={48} height={48} className='rounded-full' />
                                </div>
                            </div>
                            <p className='text-xl-medium !font-normal ' >
                                <span className='font-semibold' > Panthar Infohub Pvt. Ltd. </span> redefines security with innovative solutions like <span className='font-semibold' > SURAKSHA KAWACH </span>, which improves family and community safety. By combining cutting-edge technology and a commitment to social impact, the company helps the government increase public safety. It is led by the world's youngest CEO and encourages creativity and change, winning global recognition for its pioneering contributions to a safer, smarter future.
                            </p>
                        </div>
                    </div>

                    {/* SWIPER */}
                    <Swiper spaceBetween={30} slidesPerView={1.5} className='w-full h-auto flex-1 md:flex-[0.7] !mx-0 ' >
                        {benefits.map((benefit, index) => (
                            <SwiperSlide key={index} className='relative max-w-[22rem] min-w-[15rem]'  >
                                <div className="benefit_card">
                                    <div className='flex gap-4 pb-6 border-b-2 border-b-grey-1 mb-8' >
                                        <div className='benefit_heading' > {benefit.title} </div>
                                    </div>

                                    <div className='flex flex-col gap-4' >
                                        {benefit.description.map((item, index) => (
                                            <p className='text-xl-medium' key={index} > {item.text} </p>
                                        ))}
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
