// import { Calendar, Heart, Home, Plane, Settings, User} from 'lucide-react';
    
// const SidebarAccount = ({ activeTab, setActiveTab }) => {
//     const tabs = [
//                 { id: 'bookings', label: 'My Bookings', icon: <Calendar size={20} /> },
//                 { id: 'properties', label: 'My Properties', icon: <Home size={20} /> },
//                 { id: 'favorites', label: 'Favorites', icon: <Heart size={20} /> },
//                 { id: 'settings', label: 'Settings', icon: <Settings size={20} /> },
//                 { id: 'profile', label: 'Profile', icon: <User size={20} /> },
  
//                 { id: 'trips', label: 'My Trips', icon: <Plane size={20} /> },
    
//             ];
//     const activeClassName = 'flex items-center gap-3 px-4 py-3 rounded-xl transition-all whitespace-nowrap bg-red-500 text-white shadow-md cursor-pointer';
//     const unactiveClassName = 'flex items-center gap-3 px-4 py-3 rounded-xl transition-all whitespace-nowrap bg-gray-100 text-gray-600   cursor-pointer';

//   return (
//      <sidebar className='w-full md:w-64 flex flex-row md:flex-col gap-2 overflow-x-auto pb-4 md:pb-0'>
//           {
//             tabs.map((tab) => (
//               <button key={tab.id}
//                onClick={() => {setActiveTab(tab.id)}}
//                className={activeTab === tab.id ? activeClassName : unactiveClassName}
//                >
//                 {tab.icon}
//                 <span className='font-medium' >{tab.label}</span>
//               </button>
//             ))
//           }
          
//         </sidebar>
//   )
// }

// export default SidebarAccount
import { Calendar, Heart, Home, Plane, Settings, User } from 'lucide-react';

const SidebarAccount = ({ activeTab, setActiveTab }) => {
    const tabs = [
        { id: 'profile', label: 'Personal Info', icon: <User size={18} /> },
        { id: 'bookings', label: 'My Bookings', icon: <Calendar size={18} /> },
        { id: 'trips', label: 'My Trips', icon: <Plane size={18} /> },
        { id: 'favorites', label: 'Saved Homes', icon: <Heart size={18} /> },
        { id: 'properties', label: 'Manage Listings', icon: <Home size={18} /> },
        { id: 'settings', label: 'Account Settings', icon: <Settings size={18} /> },
    ];

    const activeClassName = 'flex items-center gap-3 px-5 py-3.5 rounded-2xl transition-all duration-300 whitespace-nowrap bg-gray-900 text-white shadow-[0_10px_20px_rgba(0,0,0,0.1)] cursor-pointer scale-[1.02]';
    const unactiveClassName = 'flex items-center gap-3 px-5 py-3.5 rounded-2xl transition-all duration-300 whitespace-nowrap bg-transparent text-gray-500 hover:bg-gray-100 hover:text-gray-900 cursor-pointer active:scale-95';

    return (
        <nav className='w-full md:w-72 flex flex-row md:flex-col gap-1.5 overflow-x-auto md:overflow-x-hidden px-2 pb-4 md:pb-0 scrollbar-hide'>
            {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                    <button 
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={isActive ? activeClassName : unactiveClassName}
                    >
                        <span className={`${isActive ? 'text-white' : 'text-gray-400'}`}>
                            {tab.icon}
                        </span>
                        <span className={`text-sm tracking-tight ${isActive ? 'font-bold' : 'font-medium'}`}>
                            {tab.label}
                        </span>
                    </button>
                );
            })}
        </nav>
    );
};

export default SidebarAccount;