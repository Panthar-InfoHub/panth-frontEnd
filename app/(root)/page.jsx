import Discuss from "@/components/Discuss";
import OurBenefit from "@/components/Layout/OurBenefit";
import OurWorkLayout from "@/components/Layout/OurServiceLayout";
import ReviewLayout from "@/components/Layout/ReviewLayout";
import SecondLayout from "@/components/Layout/SecondLayout";
import ServicesLayout from "@/components/Layout/ServicesLayout";
import { SwiperComponent } from "@/components/Swiper/Swiper";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="home_container flex h-screen" >
        <div className="flex gap-5 flex-col sm:flex-row w-full" >

          <div className="homediv relative gap-4" >
            <Image src={"/bg/bg-2.webp"} alt="background" fill={true} className=" !z-[-1]" quality={100} />

            <h1 className="heading" >
              <span> LETS BUILD </span>
              <br />
              <span> THE NEXT SMART THING </span>
            </h1>

            <div className="home_subdiv" >
              <div className=" text-24 sm:text-30-bold uppercase" >
                10Y Experience
              </div>

              <div className="flex items-center gap-3" >
                <div className="circle" />
                <Button className="bg-black-3 rounded-full text-white-1" > Let's Talk </Button>
              </div>
            </div>
          </div>

          {/* // HOME SECOND DIV */}
          <div className="w-1/3 bg-grey-1 rounded-xl " >
            <h1> TEST </h1>

          </div>

        </div>
      </section>

      <SecondLayout />
      <ServicesLayout />
      <SwiperComponent />
      <ReviewLayout />
      <OurWorkLayout />
      <OurBenefit />
      <Discuss />

    </>
  );
}
