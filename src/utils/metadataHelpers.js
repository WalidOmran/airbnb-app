import { getData } from "@/data/getData";
import { apiUrl } from "@/utils/utils";

export async function generateCityMetadata(params = {}) {
  const cityParam = params?.city;
  if (!cityParam) {
    return {
      title: "City Not Found - Airbnb-clone",
      description: "The requested city could not be found. Please check the URL.",
    };
  }

  const city = parseInt(decodeURIComponent(cityParam), 10);
  if (Number.isNaN(city)) {
    return {
      title: "Invalid City - Airbnb-clone",
      description: "Invalid city identifier.",
    };
  }

  try {
    const cityItem = await getData(`${apiUrl}/cities/${city}`);
    const cityName = cityItem?.name ?? "Unknown City";
    return {
      title: `Vacation Rentals in ${cityName} - Airbnb-clone`,
      description: `Find vacation rentals and holiday homes in ${cityName}.`,
      keywords: `vacation rentals, ${cityName}, holiday homes, ${cityName}`,
      robots: "index, follow",
    };
  } catch {
    return {
      title: "City Not Found - Airbnb-clone",
      description: "The requested city could not be found.",
    };
  }
}
