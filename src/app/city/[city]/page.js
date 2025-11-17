import { notFound } from "next/navigation";
import Header from "@/components/header/Header";
import CityPropertiesFeatures from "@/components/FeaturedCities/CityPropertiesFeatures";
import CityProperties from "@/components/FeaturedCities/CityProperties";
import ErrorFallback from "@/components/FeaturedCities/ErrorFallback";
import { generateCityMetadata } from "@/utils/metadataHelpers";
import { fetchCityPageData } from "@/data/fetchCityPageData";


export async function generateMetadata({ params }) {
  return generateCityMetadata(params);
}

const CityPage = async ({ params } = {}) => {
  
  const cityParam = params?.city;
  if (!cityParam) return notFound();
  const city = parseInt(decodeURIComponent(cityParam), 10);
  if (Number.isNaN(city)) return notFound();

  try {
    const [allProperties , cityProperties , cityItem] = await fetchCityPageData(city);
    const cityName = cityItem?.name ?? "Unknown City";

    return (
      <>
        <Header />
        <CityProperties
          propertiesList={cityProperties}
          title={`Vacation rentals according to their classification ${cityName}`}
          desc="Information confirmed by guests: These accommodations received high ratings for location, cleanliness, and other factors."
        />
        <CityPropertiesFeatures cityName={cityName} />
        <CityProperties propertiesList={allProperties} title="Explore Other Cities" />
      </>
    );
  } catch (error) {
    return (
      <ErrorFallback error={error} />
    );
  }
};

export default CityPage;
