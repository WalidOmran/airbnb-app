import Header from "@/components/header/Header";
import { getData } from "@/data/getData";
import { propertiesApiUrl } from "@/utils/utils";
import PropertyGallary from "@/components/property/PropertyGallary";
import PropertyDescription from "@/components/property/PropertyDescription";
import PropertyLocation from "@/components/property/PropertyLocation";
import PropertyAmenities from "@/components/property/PropertyAmenities";
import FavoriteButton from "@/components/FavoriteButton";
import Reservation from "@/components/Reservation/Reservation";

const page = async ({params }) => {
    const {id } = params;
    const property = await getData(`${propertiesApiUrl}/${id}`);
     
  return (
    <>
    <Header /> 
      <main className="py-12">
        <div className="container">
            { 
            property ? 
                <section className="flex flex-col "> 
                  <div className="order-0 md:order-1">
                       <PropertyGallary property={property} />
                  </div>
                  <div className="flex justify-between items-center order-1 md:order-0 md:mb-3">
                      <h2 className=" text-lg md:text-3xl text-center md:text-left">{property.title}</h2>
                      <FavoriteButton item={property} />
                  </div>
                  <div className="md:grid md:grid-cols-2 gap-5 lg:gap-50 justify-between order-2">
                      
                      <div className="mt-6">
                          <PropertyDescription property={property} />
                          <PropertyAmenities property={property}  />
                          <div className="flex  items-center mt-3 justify-between md:justify-start gap-20">
                              <p className="text-lg">{ property?.price_per_night }$ Per of night </p>
                          </div>
                           <PropertyLocation property={property} />
                      </div>
                      <Reservation property={property}/>
                  </div>
                      
                </section>
                :
                "No property found"
        } 
        </div>
        
        
      </main>
    </>
  )
}

export default page
import Header from "@/components/header/Header";
import { getData } from "@/data/getData";
import { propertiesApiUrl } from "@/utils/utils";
import PropertyGallary from "@/components/property/PropertyGallary";
import PropertyDescription from "@/components/property/PropertyDescription";
import PropertyLocation from "@/components/property/PropertyLocation";
import PropertyAmenities from "@/components/property/PropertyAmenities";
import FavoriteButton from "@/components/FavoriteButton";
import Reservation from "@/components/Reservation/Reservation";

const page = async ({params }) => {
    const {id } = params;
    const property = await getData(`${propertiesApiUrl}/${id}`);
     
  return (
    <>
    <Header /> 
      <main className="py-12">
        <div className="container">
            { 
            property ? 
                <section className="flex flex-col "> 
                  <div className="order-0 md:order-1">
                       <PropertyGallary property={property} />
                  </div>
                  <div className="flex justify-between items-center order-1 md:order-0 md:mb-3">
                      <h2 className=" text-lg md:text-3xl text-center md:text-left">{property.title}</h2>
                      <FavoriteButton item={property} />
                  </div>
                  <div className="md:grid md:grid-cols-2 gap-5 lg:gap-50 justify-between order-2">
                      
                      <div className="mt-6">
                          <PropertyDescription property={property} />
                          <PropertyAmenities property={property}  />
                          <div className="flex  items-center mt-3 justify-between md:justify-start gap-20">
                              <p className="text-lg">{ property?.price_per_night }$ Per of night </p>
                          </div>
                           <PropertyLocation property={property} />
                      </div>
                      <Reservation property={property}/>
                  </div>
                      
                </section>
                :
                "No property found"
        } 
        </div>
        
        
      </main>
    </>
  )
}

export default page
