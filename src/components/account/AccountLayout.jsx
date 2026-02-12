"use client";
import { useEffect, useState } from "react"
import MyProperties from "./Properties/MyProperties"
import MyTrips from "./bookings/Bookings"
import ProfileSettings from "./ProfileSettings"
import SidebarAccount from "./SidebarAccount"
import {PropertyProvider} from "@/context/PropertyContext";
import { useSearchParams } from "next/navigation";
import Favorite from "./favorite/Favorites";
import Favorites from "./favorite/Favorites";
import Bookings from "./bookings/Bookings";

const AccountLayout = () => {
    const searchParams = useSearchParams();
    const tabFromUrl = searchParams.get("tab");

    const [activeTab, setActiveTab] = useState('trips');


    useEffect(() => {
    if (tabFromUrl) {
      setActiveTab(tabFromUrl);
    }
  }, [tabFromUrl]);
  
  return (
    <div className='flex flex-col md:flex-row gap-8 '>
        <SidebarAccount activeTab={activeTab} setActiveTab={setActiveTab} />

        <main className='flex-1'>
          <div className='min-h-[400px] bg-white border border-gray-100 rounded-3xl p-6 shadow-sm'>
           <PropertyProvider >
            {activeTab === 'bookings' && <Bookings />}
            
            { activeTab === 'properties' &&  <MyProperties />}
            
            { activeTab === 'favorites' && <Favorites />}

            { activeTab === 'settings'  && <ProfileSettings />}

            { activeTab === 'profile' && <ProfileSettings />}

            </PropertyProvider>

          </div>
        </main>
       </div>
  )
}

export default AccountLayout
