import { users } from '@/lib/data'
import Image from 'next/image'
import React from 'react'

const SecondLayout = () => {
    return (
        <section className='section_container' >
            <div className='flex-center flex-col' >
                <div className='flex flex-col-reverse sm:flex-row mb-32' >
                    <div className='flex flex-col gap-4' >
                        <div className='flex w-[25rem]' >
                            {users.map((user, index) => (
                                <Image key={index} src={user.icon} alt='user' width={48} height={48} className='rounded-full ' />
                            ))}
                        </div>

                        <div>
                            Founders of
                            <br />
                            Panthar InfoHub
                        </div>
                    </div>

                    <div>
                        <p className='founder_text' >
                            Over the past 10 years, we’ve perfected our Design & Development game and are eager to help passionate Founders perfect theirs.
                            Success is a team play, right? Let’s aim for the top together!
                        </p>
                    </div>
                </div>

                {/* ACHIEVEMENT */}

                <div className='flex justify-between w-full' >
                    {[0, 1, 2, 3].map((achievement, index) => (
                        <div className='circle !w-[16rem] !h-[16rem] border-2 border-black-3 shadow-100 !bg-transparent' key={index} >

                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SecondLayout