import { users } from '@/lib/data'
import Image from 'next/image'
import React from 'react'
import Paragraph from '../Paragraph'
import Link from 'next/link'

const SecondLayout = () => {
    const text = "To establish a robust foundation for innovation and creativity, we commence our journey with a comprehensive discovery phase, setting the stage for unparalleled excellence."
    return (
        <section className='section_container' >
            <div className='flex-center flex-col w-full' >
                <div className='flex flex-col-reverse sm:flex-row mb-32 w-full' >
                    <div className='flex flex-col gap-4 mt-7 md:mt-0' >
                        <div className='flex w-[25rem]' >
                            {users.map((user, index) => (
                                <Image key={index} src={user.icon} alt='user' width={48} height={48} className='rounded-full ' />
                            ))}
                        </div>

                        <div className='text-xl-medium' >
                            Founders of
                            <br />
                            Panthar InfoHub
                        </div>
                    </div>

                    <div>
                        <Paragraph text={text} />
                    </div>
                </div>

                {/* ACHIEVEMENT */}

                <div className='w-full flex-between' >
                    <div className='flex justify-between  flex-wrap gap-6 w-full' >
                        <Link href="#" className='achievement_circle relative'  >
                            <Image src="/icons/international.png" fill alt='icons' />
                        </Link>
                        <Link href="#" className='achievement_circle relative'  >
                            <Image src="/icons/google.png" fill alt='icons' />
                        </Link>
                        <Link href="#" className='achievement_circle relative'  >
                            <Image src="/icons/international.png" fill alt='icons' />
                        </Link>
                        <Link href="#" className='achievement_circle relative'  >
                            <Image src="/icons/international.png" fill alt='icons' />
                        </Link>
                        
                    </div>

                </div>
            </div>
        </section>
    )
}

export default SecondLayout