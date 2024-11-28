import CustomButton from './CustomUi/Button'

const Discuss = () => {
    return (
        <section className=' p-5 md:p-10 bg-grey-3 rounded-2xl flex-center' >

            <div className='discuss_card min-h-[15rem] text-center px-8 py-16 flex-center' >
                <div className='flex flex-col gap-12 max-w-[46rem] items-center' >
                    <h3 className="sub-heading"> Ready to discuss your project with us</h3>

                    <div className='max-w-[90%]' >
                        <p> Lets  talk about how we can craft a user experience that not only looks great but drives real growth for your product </p>
                    </div>
                </div>

                <div className='min-w-[14rem]' >
                    <button className="book_btn text-white" >
                        <CustomButton text="BOOK A CALL" />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Discuss
