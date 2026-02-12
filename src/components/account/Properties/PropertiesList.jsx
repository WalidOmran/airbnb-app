import ConfirmationModal from "@/components/modals/ConfirmationModal";
import PropertyCard from "./PropertyCard"
import { useProperties } from "@/context/PropertyContext";

const PropertiesList = () => {
     const {properties ,isLoading , selectedId , setSelectedId , handleDeleteProperty} = useProperties();
  return (
       <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {properties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                ))}
            </div>

                 <ConfirmationModal
                    isOpen={!!selectedId}
                    onClose={()=> setSelectedId(null)} 
                    onConfirm={() => handleDeleteProperty(selectedId)}
                    loading={isLoading}
                    headerText="Delete Property"
                    descText="Are you sure you want to delete this property?"
                />
       </>
  )
}

export default PropertiesList
