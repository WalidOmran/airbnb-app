import Link from "next/link";
import Card from "../Card"
import ManagePropertyCard from "../ManagePropertyCard";

const PropertyCard = ({property}) => {
  
  return (
   
    <div className="group bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden">
      <Link href={`/property/${property.id}`}>
          <Card data={property} />
      </Link>
      
      <ManagePropertyCard property={property}  />
      
    </div>
    
  )
}

export default PropertyCard
