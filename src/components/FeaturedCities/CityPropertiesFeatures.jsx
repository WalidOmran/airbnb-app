import React from 'react'
import { WifiIcon , TvIcon , CogIcon , CheckCircleIcon , TruckIcon} from "@heroicons/react/24/outline";
const CityPropertiesFeatures = ({cityName}) => {
     const featuresList = [
          { title: "Free Wi-Fi", icon: WifiIcon },
          { title: "Parking Available", icon: TruckIcon },
          { title: "Swimming Pool", icon: CheckCircleIcon },
          { title: "Air Conditioning", icon: CogIcon },
          { title: "Cable TV", icon: TvIcon },
        ]
  return(
        
      <div className="pt-10 pb-5 bg-gray-100">
        <div className="container">
          <h2 className="mb-2 text-center text-lg">Common features in holiday rentals in the {cityName}  Governorate</h2>
          <p className="mb-5 text-center text-sm">When searching for holiday rentals in {cityName} , travelers often look for properties that offer specific features to enhance their stay. Common features include:</p>
          
          <ul className="features-list flex flex-wrap  gap-5 list-none justify-center mt-8 mb-8">
            {featuresList.map((feature) => (
                <li key={feature.title} className="min-w-full sm:min-w-auto my-3 px-8 py-3 bg-white rounded-lg shadow-lg md:text-lg">
                  {<feature.icon className="h-10 w-10 text-gray-500 mb-2" />}
                  <h3 className="text-xl">{feature.title}</h3>
                </li>
              )
            )}
            


          </ul>
        </div>

      </div>
      )
}

export default CityPropertiesFeatures
