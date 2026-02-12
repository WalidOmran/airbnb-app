'use client'
import { CitiesContextProvider } from "@/context/CitiesContext"
import { FavoritesContextProvider } from "@/context/FavoritesContext";
import { ReservationContextProvider } from "@/context/ReservationContext";
import { SearchProvider } from "@/context/SearchContext";
import { SessionProvider } from "next-auth/react";
import { Toaster } from 'sonner';
import ReactQueryProvider from "@/customHooks/ReactQueryProvider"; 

const Providers = ({ children }) => {
  return (
    <SessionProvider>
      <ReactQueryProvider> 
        <SearchProvider>
          <CitiesContextProvider>
            <FavoritesContextProvider>
              <ReservationContextProvider>
                {children}
                <Toaster position="bottom-center" />
              </ReservationContextProvider>
            </FavoritesContextProvider>
          </CitiesContextProvider>
        </SearchProvider>
      </ReactQueryProvider>
    </SessionProvider>
  )
}

export default Providers