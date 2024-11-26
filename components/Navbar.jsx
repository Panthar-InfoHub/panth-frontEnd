import { navItem } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import CustomButton from "./CustomUi/Button"

const Navbar = () => {

  return (
    <header className="header" >
      <nav className="flex justify-between items-center" >
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width={144} height={35} />
        </Link>

        <div className="flex items-center justify-evenly text-black-1 flex-1">
          {navItem.map((item, index) => (

            <Link href="#" key={index} >
              <CustomButton text={item.name} />
            </Link>
          ))}
        </div>

        <div>
          <Button className="contact-btn text-14-medium text-white-1" >
            CONTACT US
          </Button>
        </div>
      </nav>
    </header >
  )
}

export default Navbar
