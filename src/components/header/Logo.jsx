import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  return (
    <Link href='/' className="relative inline-block transition-opacity hover:opacity-80 active:scale-95 duration-200">
      <Image 
        src="/Airbnb_Logo.svg"
        alt="Airbnb Logo"
        
        width={102} 
        height={32}
        priority 
        className='object-contain w-auto h-8 md:h-9' 
      />
    </Link>
  )
}

export default Logo