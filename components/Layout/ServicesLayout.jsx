import { services } from "@/lib/data"
import Image from "next/image"

const ServicesLayout = () => {
  return (
    <section className='section_container h-auto relative w-full' >
      <div className="service_bg p-10" >

        <div className="card_container" >
          <h1 className="heading"> Our <br />Service </h1>
        </div>

        <ul className="card_grid-sm mt-10" >
          {services.map((service, index) => (
            <li className="card_li" key={index} >
              <div className="flex gap-1" >
                <div className="circle !w-12 !h-12" />
                <div className="circle !w-12 !h-12" />
              </div>

              <div className="flex flex-col gap-6" >
                <div>
                  <h3 className="text-24" > {service.title} </h3>
                </div>

                <p> {service.descriptiom} </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default ServicesLayout
