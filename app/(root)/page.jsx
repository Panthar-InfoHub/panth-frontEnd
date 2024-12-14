import Discuss from "@/components/Discuss";
import OurBenefit from "@/components/Layout/OurBenefit";
import OurWorkLayout from "@/components/Layout/OurServiceLayout";
import ReviewLayout from "@/components/Layout/ReviewLayout";
import SecondLayout from "@/components/Layout/SecondLayout";
import ServicesLayout from "@/components/Layout/ServicesLayout";
import { Button } from "@/components/ui/button";
import { Vortex } from "@/components/ui/vortex";
import { PhoneCall } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="home_container flex h-screen" >
        <div className="flex gap-5 flex-col md:flex-row w-full relative" >

          <div className="relative w-full min-h-[20rem] overflow-hidden" >
            <Vortex
              backgroundColor="black"
              className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
            >
              {/* <div className="bg_gradient mask_home_card absolute top-0 left-0 w-full h-full" /> */}

              <div className="homediv relative gap-4" >

                <h1 className="heading " >
                  <span> Shaping the Future With </span>
                  <br />
                  <span className="mt-6" > smart tech </span>
                </h1>

                <div className="home_subdiv" >
                  <div className=" text-24 sm:text-30-bold uppercase text-black-3" >
                    5 Year Experience
                  </div>

                  <Link href="tel:6393957916" className="flex items-center gap-3" >
                    <div className="circle flex justify-center items-center " >
                      <PhoneCall className="text-white size-4 sm:size-5" />
                    </div>
                    <Button className="bg-black-3 rounded-full text-white-1" > Let's Talk </Button>
                  </Link>
                </div>
              </div>
            </Vortex>
          </div>

          {/* // HOME SECOND DIV */}
          <div className=" bg-grey-2 rounded-3xl min-h-[22rem] md:w-[40%] overflow-hidden " >

            <div>
              <h3 className="small-heading p-6 uppercase " > Product Development </h3>
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
      <ReviewLayout />
      <OurWorkLayout />
      <OurBenefit />
      <Discuss />

    </>
  );
}
