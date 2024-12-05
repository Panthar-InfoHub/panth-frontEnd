'use client'

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from "react";

const Paragraph = ({ text }) => {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start 0.9", "start 0.25"]
    })

    const words = text.split(" ")

    return (
        <p ref={container} style={{ opacity: scrollYProgress }} className='founder_text'>
            {
                words.map((word, i) => {
                    const start = i / words.length
                    const end = start + (1 / words.length)
                    return <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word>
                })
            }
        </p>
    )
}

const Word = ({ children, progress, range }) => {

    const opacity = useTransform(progress, range, [0, 1])

    return (
        <span className="relative mr-[12px] mt-[12px]  font-medium">

            <span className="absolute opacity-20">{children}</span>
            <motion.span style={{ opacity: opacity }}>{children}</motion.span>

        </span>
    )

}


export default Paragraph
