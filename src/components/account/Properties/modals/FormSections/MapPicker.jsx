'use client';
import { useEffect, useRef, useState } from 'react';
import Map, { GeolocateControl, Marker, NavigationControl } from 'react-map-gl/maplibre';

import useMapLogic from '@/customHooks/useMapLogic';

const MapPicker = () => {
  const mapRef = useRef();
  const [mounted, setMounted] = useState(false);
  const { location, updateLocation } = useMapLogic();
 
  const longitude = location?.longitude;
  const latitude = location?.latitude;


  const handleFlyTo = () => {
  
  if (mapRef.current) {
    const map = mapRef.current.getMap(); 
    if(map && typeof map.flyTo === 'function'){
        map.flyTo({
            center: [longitude, latitude],
            zoom: 14,
            speed: 1.2, 
            curve: 1.42,
            essential: true,
            duration: 1500
        });
    }
    
  }
};

  useEffect(() => {
    setMounted(true);
  }, []);


  useEffect(()=> {
    handleFlyTo();
    
  },[latitude, longitude]);


 
  const onMarkerDragEnd = async (e)=> {
    const {lng , lat} = e.lngLat; //lngLat
    
    await updateLocation(lng, lat);
  }

  if (!mounted) {
    return <div className="h-[400px] w-full bg-gray-100 animate-pulse rounded-xl mt-8"></div>;
  }

  return (
   


      
      <div className="w-full h-[350px] mt-4 rounded-xl overflow-hidden border border-gray-200 relative group">
        <div className="absolute bottom-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm border border-gray-100 text-[12px] font-medium text-gray-700">
            📍 {latitude.toFixed(4)}, {longitude.toFixed(4)}
        </div>
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 bg-black/60 text-white px-4 py-1 rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Drag the pin to set exact location
        </div>
        <Map
        
          ref={mapRef}
          initialViewState={{
          longitude: longitude,
          latitude: latitude,
          zoom: 14
        }}
          style={{ width: '100%', height: '100%' }}
        
        mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
       
        >
          <GeolocateControl position="top-right" />
          <NavigationControl position="top-right" />
          <Marker 
            longitude={longitude}
            latitude={latitude}
            draggable={true}
            onDragEnd={onMarkerDragEnd}
            anchor="bottom"
            color="#FF385C" 
            />
            
         
          
        </Map>
        
      </div> 
  
  );
};

export default MapPicker;


