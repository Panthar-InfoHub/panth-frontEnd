'use client'
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const CustomButton = ({ text, test = false, className, variants }) => {
    return (
        <motion.div variants={variants} initial="initial" animate="open" className={cn(`w-full h-full flex justify-center flex-col ${test ? "group-hover:hover_parent_btn" : "group hover:hover_parent_btn"} parent_btn`, className)} >
            <p className="transition-all ease-[cubic-bezier(0.76, 0, 0.24, 1)] duration-500 group-hover:hover_first_animate_btn uppercase" > {text} </p>
            <p className="animate_btn group-hover:hover_animate_btn transition-all ease-[cubic-bezier(0.76, 0, 0.24, 1)] duration-500 uppercase" >{text}</p>
        </motion.div>
    )
}

export default CustomButton