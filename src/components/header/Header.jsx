import Logo from "./Logo"
import Navbar from "./Navbar"
import SearchBar from "./SearchBar"
import ReactQueryProvider from "@/customHooks/ReactQueryProvider";
const Header = ({placeholder}) => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md py-6"> 
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-3"> 
            <Logo />
            <ReactQueryProvider>
              <div className="hidden md:inline-block">
                <SearchBar placeholder={placeholder}/>
              </div>
              <Navbar placeholder={placeholder} />
            </ReactQueryProvider>
        </div>
        
      </div>
    </header>
  )
}

export default Header
