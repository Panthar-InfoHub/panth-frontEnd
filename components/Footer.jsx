import Link from 'next/link'
import React from 'react'
import { Input } from './ui/input'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import CustomButton from './CustomUi/Button'

const Footer = () => {

    const Options = [
        {
            title: "Our Services",
        },
        {
            title: "Projects",
        },
        {
            title: "Our Process",
        },
        {
            title: "Our Source",
        },
        {
            title: "Referral Program",
        },
        {
            title: "Contacts",
        },
        {
            title: "Blog",
        },
    ]

    const SocialIcons = [
        {
            icon: <Linkedin className='size-6' />,
        },
        {
            icon: <Twitter className='size-6' />,
        },
        {
            icon: <Instagram className='size-6' />,
        },
        {
            icon: <Facebook className='size-6' />,
        },
    ]

    return (
        <footer className='px-10 py-28 bg-black-3 flex justify-center flex-col' >
            <div className='w-full flex justify-start' >

                <div className='flex sm:flex-row flex-col justify-between items-start flex-1 text-white gap-8 sm:gap-0' >
                    <div className='flex flex-col flex-[0.6]' >
                        <h3 className='small-heading mb-8' >Subscribe to our newsletter to stay in touch with the latest.</h3>

                        <Input className="footer_input" placeholder="Your email address" type="text" />
                    </div>

                    <div>
                        <ul className='flex flex-col gap-6' >
                            {Options.map((option , index) =>
                                <li className='small-heading'key={index} >
                                    <Link href="#" className='text-left' > <CustomButton text={option.title}/> </Link>
                                </li>)}
                        </ul>
                    </div>

                    <div className='flex flex-col gap-14' >
                        <div>
                            <h3 className='small-heading uppercase mb-6' > Drop us a line </h3>
                            <p className='text-grey-3' > Inquiry@halo-lab.com </p>
                        </div>
                        <div>
                            <h3 className='small-heading uppercase mb-6' > Call Us </h3>
                            <p className='text-grey-3' > XXXXXXXXXX </p>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>

            <div>
                <h3 className='small-heading text-white' > Follow Us Here: </h3>

                <div className='flex gap-6 mt-2' >
                    {SocialIcons.map((social,index) =>
                        <Link href="#" key={index} className='rounded-full text-white border-2 border-white p-4 hover:bg-white-1 hover:text-black-2 transition-all duration-200' >
                            {social.icon}
                        </Link>
                    )}
                </div>
            </div>
        </footer>
    )
}

export default Footer