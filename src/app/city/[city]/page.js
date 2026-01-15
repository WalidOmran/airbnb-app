import { notFound } from "next/navigation";
import Header from "@/components/header/Header";
import CityPropertiesFeatures from "@/components/FeaturedCities/CityPropertiesFeatures";
import CityProperties from "@/components/FeaturedCities/CityProperties";
import ErrorFallback from "@/components/FeaturedCities/ErrorFallback";
import { generateCityMetadata } from "@/utils/metadataHelpers";
import { fetchCityPageData } from "@/data/fetchCityPageData";
import { propertyService } from "@/services/propertyService";
import { cityService } from "@/services/cityService";
import { BASE_URL } from "@/utils/utils";



export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  return generateCityMetadata(resolvedParams);
}

const CityPage = async ({ params } = {}) => {
  
  const resolvedParams = await params;
  const cityId = resolvedParams?.city;
  if (!cityId) return notFound();
  
  const decodedCityId = decodeURIComponent(cityId);
  

  try {
   const [allProperties , cityProperties , cityData] = await fetchCityPageData(decodedCityId);

    if(!cityData ) return notFound();

    const cityName = cityData?.name ?? "Unknown City";

    return (
      <>
        <Header />
        {cityName && <h1 className="text-3xl font-semibold text-center my-8">Properties in {cityName}</h1>}
        <CityProperties
          propertiesList={cityProperties}
          title={`Vacation rentals according to their classification ${cityName}`}
          desc="Information confirmed by guests: These accommodations received high ratings for location, cleanliness, and other factors."
        />

    
        <CityPropertiesFeatures cityName={cityName} />
        <CityProperties propertiesList={allProperties} title="Explore properties in other cities" />
      </>
    );
  } catch (error) {
    return (
      <ErrorFallback error={error} />
    );
  }
};

export default CityPage;
