import { users } from '@/lib/data'
import Image from 'next/image'
import React from 'react'
import Paragraph from '../Paragraph'
import Link from 'next/link'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"

const SecondLayout = () => {
    const text = "To establish a robust foundation for innovation and creativity, we commence our journey with a comprehensive discovery phase, setting the stage for unparalleled excellence."
    return (
        <section className='section_container mt-8' >
            <div className='flex-center flex-col w-full' >
                <div className='flex flex-col-reverse sm:flex-row mb-32 w-full' >
                    <div className='flex flex-col gap-4 mt-7 md:mt-0' >
                        <div className='flex w-[25rem]' >
                            {users.map((user, index) => (
                                <Dialog key={index} >
                                    <DialogTrigger className='' >
                                        <div>
                                            <Image src={user.icon} alt='user' width={64} height={64} className='rounded-full ' />
                                        </div>
                                    </DialogTrigger>

                                    <DialogContent className=" min-w-[90%] sm:min-w-[40%] outline-none" >
                                        <DialogHeader className="flex justify-between" >
                                            <div>
                                                <Image src={user.icon} alt='user' width={76} height={76} className='rounded-full ' />
                                            </div>
                                            <div>
                                                <DialogTitle className="text-white-1" >{user.name}</DialogTitle>
                                                <DialogDescription className="text-grey-2 mt-4" > {user.role} </DialogDescription>
                                            </div>
                                        </DialogHeader>

                                        <div className='' >
                                            <div>
                                                <p className='text-sm text-grey-1' > {user.description} </p>
                                            </div>
                                        </div>
                                    </DialogContent>
                                </Dialog>))}
                        </div>

                        <div className='text-xl-medium uppercase' >
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
                            <Image src="/icons/news18.png" fill alt='icons' />
                        </Link>
                        <Link href="#" className='achievement_circle relative'  >
                            <Image src="/icons/rise.png" fill alt='icons' />
                        </Link>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default SecondLayout