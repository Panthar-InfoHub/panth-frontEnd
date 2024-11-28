
const CustomButton = ({ text , test=false }) => {
    return (
        <div className={`w-full h-full flex justify-center flex-col ${test ? "group-hover:hover_parent_btn" : "group hover:hover_parent_btn"} parent_btn`} >
            <p className="transition-all ease-[cubic-bezier(0.76, 0, 0.24, 1)] duration-500 group-hover:hover_first_animate_btn uppercase" > {text} </p>
            <p className="animate_btn group-hover:hover_animate_btn transition-all ease-[cubic-bezier(0.76, 0, 0.24, 1)] duration-500 uppercase" >
                {text}
            </p>
        </div>
    )
}

export default CustomButton