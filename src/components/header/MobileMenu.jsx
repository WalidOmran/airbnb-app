import { UserCircleIcon } from "@heroicons/react/24/solid"
import Link from "next/link"

const MobileMenu = ({ onClose })=> {
    return(
        <div className="bg-white absolute top-20 lg:top-24  right-0 lg:w-1/3 w-screen  h-screen shadow-lg transition-all ease-in-out duration-500 z-50">
                
            <ul className="md:hidden bg-white  py-4  space-y-4 font-semibold text-gray-600" role="menu" aria-label="Mobile menu">
                <li role="none">
                    <Link href="/Becomeahost" onClick={onClose} className="px-6 py-1 hover:bg-gray-100" role="menuitem">Become a host</Link>
                </li>
                 <li role="none">
                    <Link href="/profile" onClick={onClose}  className="px-6 py-1 hover:bg-gray-100 flex items-center space-x-2" role="menuitem">
                        <UserCircleIcon className="h-6 w-6" />
                        <span>Profile</span>
                    </Link>
                </li>
                <li role="none">
                    <Link  href="/Settings" onClick={onClose} className="px-6 py-1 hover:bg-gray-100" role="menuitem">Settings</Link>
                </li>
                <li role="none">
                    <Link  href="/Help" onClick={onClose} className="px-6 py-1 hover:bg-gray-100" role="menuitem">Help</Link>
                </li>
                 <li role="none">
                    <button type="button" className="px-6 py-1 text-left hover:bg-gray-100" onClick={onClose} aria-label="Logout">Logout</button>
                </li>
            </ul>
        </div>
    )
}

export default MobileMenu