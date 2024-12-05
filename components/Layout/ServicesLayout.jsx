import { services } from "@/lib/data"
import CustomButton from "../CustomUi/Button"
import { LayoutDashboard, MoveUpRight } from "lucide-react"

const ServicesLayout = () => {
  return (
    <section className='section_container h-auto relative w-full' >
      <div className="relative w-full min-h-[20rem] overflow-hidden" >
        <div className="bg_gradient mask_service_card absolute top-0 left-0 w-full h-full" />
        <div className="service_div p-4 pt-8 md:p-10 flex-col h-full" >

          <div className="" >
            <h1 className="main_heading"> Our <br />Service </h1>
          </div>

          <ul className="card_grid-sm mt-10" >
            {services.map((service, index) => (
              <li className="card_li group" key={index} >
                <div className="flex gap-1" >
                  <div className="service_circle" > <LayoutDashboard className="size-4 md:size-5" /> </div>
                  <div className="service_circle_arrow flex-center group-hover:bg-black-hover" > <MoveUpRight className="size-4 md:size-5 group-hover:text-white " /> </div>
                </div>

                <div className="flex flex-col gap-6" >
                  <div className="" >
                    <h3 className="text-24 text-black-2" > <CustomButton test={true} text={service.title} /> </h3>
                  </div>

                  <p className="hidden sm:flex" > {service.descriptiom} </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ServicesLayout
