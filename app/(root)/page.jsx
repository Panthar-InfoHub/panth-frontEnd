import Discuss from "@/components/Discuss";
import Footer from "@/components/Footer";
import OurBenefit from "@/components/Layout/OurBenefit";
import OurWorkLayout from "@/components/Layout/OurServiceLayout";
import ReviewLayout from "@/components/Layout/ReviewLayout";
import SecondLayout from "@/components/Layout/SecondLayout";
import ServicesLayout from "@/components/Layout/ServicesLayout";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <section className="home_container flex h-screen" >
        <div className="flex gap-5 flex-col md:flex-row w-full relative" >

          <div className="relative w-full min-h-[20rem] overflow-hidden" >
            <div className="bg_gradient mask_home_card absolute top-0 left-0 w-full h-full" />

            <div className="homediv relative gap-4" >

              <h1 className="heading" >
                <span> Enabling Secure  </span>
                <br />
                <span>Futures with smart tech </span>
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
          </div>

          {/* // HOME SECOND DIV */}
          <div className=" bg-grey-2 rounded-3xl min-h-[22rem] md:w-[40%] overflow-hidden " >

            <div>
              <h3 className="small-heading p-6 uppercase" > Product Development </h3>
            </div>

            <video autoPlay={true} muted loop className="" >
              <source src="/videos/suraksha.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

          </div>
        </div>
      </section>

      <SecondLayout />
      <ServicesLayout />
      {/* <SwiperComponent /> */}
      <ReviewLayout />
      <OurWorkLayout />
      <OurBenefit />
      <Discuss />
      <Footer />
    </>
  );
}
