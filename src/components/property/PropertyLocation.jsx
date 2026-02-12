'use client';
import { useEffect, useState } from 'react';
import Map, { Marker, NavigationControl } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';

import { MapPin } from 'lucide-react';

const PropertyLocation = ({ property }) => {
  const [mounted, setMounted] = useState(false);

 
  const longitude = property?.location?.longitude || -0.09;
  const latitude = property?.location?.latitude || 51.505;

  const formatAddress = (fullAddress)=> {
    if(!fullAddress) return "";

    const parts = fullAddress.split(", ");

    if(parts.length > 5) {
      return `${parts[parts.length - 4]}, ${parts[parts.length - 3]}`;
    }


    return parts.slice(0,2).join(", ");

  } 


  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted) {
    return <div className="h-[400px] w-full bg-gray-100 animate-pulse rounded-xl mt-8"></div>;
  }

  return (
    <div className="my-2 w-full"> 
      

      <div className="container mx-auto px-4 md:px-8"> 
          <p className="text-2xl font-semibold text-gray-800">Where you'll be staying</p>
          
         
          <div className="flex items-center gap-2 mt-2 text-gray-600">
            <MapPin size={16} />
            <p className="text-lg">{formatAddress(property.address)}</p>
          </div>
        </div>

        
        <div className="w-full h-[450px] bg-gray-200 mt-8 relative overflow-hidden shadow-inner">
           <Map
              initialViewState={{
                longitude: longitude,
                latitude: latitude,
                zoom: 15 
              }}
              style={{ width: '100%', height: '100%' }}
              mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
              scrollZoom={false} 
            >
              <Marker longitude={longitude} latitude={latitude}>        
                <div className="relative flex items-center justify-center">
                  <div className="h-10 w-10 bg-[#FF385C] rounded-full shadow-xl border-2 border-white flex items-center justify-center animate-bounce-short">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>          
                  <div className="absolute -bottom-1 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#FF385C]"></div>
                </div>
              </Marker>
              
              <NavigationControl position="bottom-right" /> 
          </Map>
        </div>
      
      
    </div>
  );
};

export default PropertyLocation;