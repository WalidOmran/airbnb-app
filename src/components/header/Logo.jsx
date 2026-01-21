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
            style={{ width: '50', height: '100' }} 
            />


    </Link>
  )
}

export default Logo
