import Logo from "./Logo"
import Navbar from "./Navbar"
import SearchBar from "./SearchBar/SearchBar"


const Header = ({ placeholder }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300 py-4 md:py-5"> 
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4"> 
          <div className="flex-shrink-0">
            <Logo />
          </div>

         
         
            <div className="hidden md:flex flex-grow justify-center max-w-lg">
              <SearchBar placeholder={placeholder}/>
            </div>

            <div className="flex items-center justify-end">
              <Navbar placeholder={placeholder} />
            </div>
       

        </div>
      </div>
    </header>
  )
}

export default Header