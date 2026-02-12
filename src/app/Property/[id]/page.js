import Header from "@/components/header/Header";
import PropertyGallary from "@/components/property/PropertyGallary";
import PropertyDescription from "@/components/property/PropertyDescription";
import PropertyLocation from "@/components/property/PropertyLocation";
import PropertyAmenities from "@/components/property/PropertyAmenities";
import FavoriteButton from "@/components/property/card/FavoriteButton";
import Reservation from "@/components/Reservation/Reservation";
import { propertyService } from "@/services/propertyService";
import { notFound } from "next/navigation";



const page = async ({params }) => {

    const {id} = await params;
    const property = await propertyService.getById(id);
    if (!property ) notFound();
     
  return (
    <>
    <Header /> 

    <main className="py-12">

      <div className="container mx-auto px-4 md:px-8">
        <section className="flex flex-col">
          
          <div className="order-0 md:order-1">
                <PropertyGallary property={property} />
          </div>
          <div className="flex justify-between items-center order-1 md:order-0 md:mb-3">
              <h2 className=" text-lg md:text-3xl text-center md:text-left">{property.title}</h2>
              <FavoriteButton item={property} />
          </div>

          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 order-2">
            <div className="lg:col-span-2">
              <PropertyDescription property={property} />
              <PropertyAmenities property={property} />
              
              <div className="py-6 border-t border-gray-100 mt-4">
                <p className="text-2xl font-semibold">
                  ${property?.price_per_night} <span className="text-base font-normal text-gray-500">per night</span>
                </p>
              </div>
            </div>

          
            <div className="relative z-[10000] md:z-[10]">
              <div className="sticky top-28 right-0">
                <Reservation property={property} />
              </div>
            </div>
          </div>
        </section>
      </div>

    
      <div className="mt-16 bg-gray-50 border-t border-gray-100">
        <PropertyLocation property={property} />
      </div>
    </main>
    
    </>
  )
}

export default page

