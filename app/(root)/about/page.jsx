import CustomButton from '@/components/CustomUi/Button'
import Team from '@/components/Team'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
    return (
        <section className="home_container flex min-h-screen" >
            <div className='h-full flex flex-col gap-[10rem] w-[80%] mx-auto' >

                {/* FIRST DIV */}
                <div className='flex justify-between flex-col-reverse sm:flex-row' >
                    <div className='flex flex-[0.8] flex-col' >
                        <div className='flex flex-col gap-4 items-start sm:pr-12' >
                            <h3 className='div-heading !font-normal' > We are <span className='!font-medium tracking-[-0.05em]' > PANTHAR INFO </span></h3>
                            <em className='opacity-70' >  Where Ideas Forge the Innovations </em>
                            <p> <span className='font-semibold' >Panthar InfoHub Pvt. Ltd. </span> is a pioneering consultancy in Jhansi, Uttar Pradesh, renowned for its innovative solutions. Its flagship app, Suraksha Kawach, offers Guardian Protection, Police SOS, and AI-driven health tracking, ensuring seamless reliability even offline.
                            </p>

                            <p>Led by visionary CEO Abhay Namdev, the company specializes in advanced mobile development, AI/ML integration, and scalable cloud solutions, delivering transformative, user-centric technologies that improve lives.
                            </p>
                        </div>
                        <div className='mt-6' >
                            <Link href="tel:6393957916" className='h-9 px-4 py-2 contact-btn text-14-medium text-white-1 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium' >
                                <CustomButton text="Let's Talk" />
                            </Link>
                        </div>
                    </div>
                    <div className='flex-center relative flex-[0.2] min-h-[25vh] ' >
                        <Image src="/logo.svg" fill alt='logo' />
                    </div>
                </div>

                {/* SECOND DIV */}
                <div className='flex flex-col gap-18' >
                    <div className='text-center' >
                        <h3 className='small-heading !tracking-[0] text-[3rem] ' > The Brains Behind The Breakthroughs </h3>
                        <em className='opacity-75 mt-8' > With Dedication, Mastery, and a Dash of Brilliance, We’ve Got You Covered</em>
                    </div>

                    <div className='w-full' >
                        <Team />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page