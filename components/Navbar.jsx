import { navItem } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import CustomButton from "./CustomUi/Button"
import MobileNavigation from "./MobileNavigation"

const Navbar = () => {

  return (
    <header className="header relative" >
      <nav className="flex justify-between items-center" >
        <Link href="/" className="flex gap-1" >
          <Image src="/logo.svg" alt="Logo" width={35} height={20} quality={100} />
          <Image src="/logo_text.svg" alt="Logo" width={155} height={100} quality={100} />
        </Link>

        <div className="md:flex flex-1 hidden" >
          <div className="flex items-center justify-evenly text-black-1 flex-1">
            {navItem.map((item, index) => (

              <Link href={item.link || "#workSection"} key={index} >
                <CustomButton text={item.name} />
              </Link>
            ))}
          </div>

          <div>
            <Button className="contact-btn text-14-medium text-white-1" >
              <CustomButton text="CONTACT US" />
            </Button>
          </div>
        </div>


        {/* MOBILE NAVBAR */}
        <MobileNavigation />
      </nav>
    </header >
  )
}

export default Navbar
