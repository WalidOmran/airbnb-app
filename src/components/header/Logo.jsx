import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  return (
    <Link  href='/'>
      <Image 
            src="/Airbnb_Logo.svg"
            alt="Airbnb Logo"
            width={100}
            height={50}
            className='object-contain object-left'
            priority
            />
    </Link>
  )
}

export default Logo
