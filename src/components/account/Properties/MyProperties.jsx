import SkeletonCard from "../SkeletonCard";
import PropertiesEmpty from "./PropertiesEmpty";
import PropertiesList from "./PropertiesList";
import { useSession } from "next-auth/react";
import AddProperty from "./AddProperty";
import { useProperties } from "@/context/PropertyContext";
import { useState } from "react";
import EmptyState from "../EmptyState";



const MyProperties = () => {
  const { data: session , status} = useSession(); 
  
   const [isModalOpen, setIsModalOpen] = useState(false);
  const { properties, isLoading } = useProperties();
  
  
  if (status === "loading") return <SkeletonCard count={3} />;
  return (   
    
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">My Listings</h2>
          <AddProperty isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
        </div>


        {isLoading &&  <SkeletonCard count={3} />  }

        {!isLoading && properties.length === 0 && (
          <EmptyState
            type="properties"
            title="Ready to become a host?"
            description="You haven't listed any properties yet. Start sharing your space and join our community of successful hosts."
            buttonText="List Your Property" 
            onAction={() => {setIsModalOpen(true)}}
          />
        )}

        {!isLoading && properties.length > 0 && (
          <PropertiesList />
            )}
        
      </div>
 
  )
}

export default MyProperties
