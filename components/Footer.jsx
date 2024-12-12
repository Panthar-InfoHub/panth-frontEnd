import Link from 'next/link'
import React from 'react'
import { Input } from './ui/input'
import { Facebook, Instagram, Linkedin, TreePine, Twitter } from 'lucide-react'
import CustomButton from './CustomUi/Button'
import InputComp from './InputComp'

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
            icon: <Linkedin className='size-4' />,
            link: "https://www.linkedin.com/company/panthar-infohub/",
        },
        {
            icon: <Twitter className='size-4' />,
            link: "https://x.com/pantharinfohub"
        },
        {
            icon: <Instagram className='size-4' />,
            link: "https://www.instagram.com/panthar.infohub/"
        },
        {
            icon: <Facebook className='size-4' />,
            link: "https://www.facebook.com/people/Panthar-Infohub/pfbid023kA4aV8DjyFwL9sgXUwtScaYCc2ue1RiL2L4H6enWCbejJ9MhFxogPSL2T54AZCgl/"
        },
    ]

    return (
        <footer className='px-10 pt-12 pb-8 bg-black-2 flex justify-center flex-col gap-8' >
            <div className='w-full flex justify-start' >

                <div className='flex sm:flex-row flex-col justify-between items-start flex-1 text-white gap-16 sm:gap-0' >
                    <div className='flex flex-col-reverse gap-10 sm:flex-col flex-[0.6]' >

                        <div className='flex flex-col' >
                            <h3 className='small-heading mb-8 !tracking-[0]' >Subscribe to our newsletter to stay in touch with the latest.</h3>
                            <InputComp />
                        </div>

                        <div>
                            <h3 className='small-heading text-white  !tracking-[0]' > Follow Us Here: </h3>

                            <div className='flex gap-6 mt-2' >
                                {SocialIcons.map((social, index) =>
                                    <Link href={social.link} key={index} className='rounded-full text-white border-2 border-white w-12 h-12 flex justify-center items-center hover:bg-white-1 hover:text-black-2 transition-all duration-200' >
                                        {social.icon}
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>

                    <div>
                        <ul className='flex flex-col gap-6' >
                            {Options.map((option, index) =>
                                <li className='font-medium text-[1rem] sm:text-[1.5rem]' key={index} >
                                    <Link href="#" className='text-left text-grey-2' > <CustomButton text={option.title} /> </Link>
                                </li>)}
                        </ul>
                    </div>

                    <div className='flex flex-col gap-14' >
                        <div>
                            <h3 className='small-heading uppercase mb-4 md:mb-6  !tracking-[0]' > Drop us a line </h3>
                            <Link href="mailto:connect@pantharinfohub.com" className='text-grey-3' > connect@pantharinfohub.com </Link>
                        </div>
                        <div>
                            <h3 className='small-heading uppercase mb-4 md:mb-6  !tracking-[0]' > Call Us </h3>
                            <Link href="tel:6393957916" className='text-grey-3' > +91 6393957916 </Link>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>

        </footer>
    )
}

export default Footer