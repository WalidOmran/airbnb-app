
// import GoogleMapReact from 'google-map-react';


// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// const PropertyLocation = ({property}) => {
//    const defaultProps = {
//     center: {
//       lat: 10.99835602,
//       lng: 77.01502627
//     },
//     zoom: 11
//   };

//   return (
//     <div className="my-2 "> 
//         <p className="text-xl">The location where you will stay </p>
//         <p>{ property.address } </p>
//         <dvi className="w-[100vw] h-100 bg-gray-200 mt-2">
//            <div style={{ height: '100vh', width: '100%' }}>
//               <GoogleMapReact
//                   bootstrapURLKeys={{ key: 'YOUR_GOOGLE_MAPS_API_KEY' }}
//                   defaultCenter={defaultProps.center}
//                   defaultZoom={defaultProps.zoom}
//                 >
//                   <AnyReactComponent
//                     lat={10.99835602}
//                     lng={77.01502627}
//                     text="علامتي"
//                   />
//                 </GoogleMapReact>
//             </div>

//         </dvi> 
//     </div>
//   )
// }

// export default PropertyLocation


'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const PropertyLocation = ({ property }) => {
  const center = {
    lat: property.location.latitude,
    lng: property.location.longitude
  };

  const position2 =  {
    lat: property.location.latitude,
    lng: property.location.longitude
  };

  const position = [51.505, -0.09]



  return  (

     <div className="my-2 w-full"> 
        <p className="text-xl">The location where you will stay </p>
         <p>{ property.address } </p>
         <div className="w-full h-100 bg-gray-200 mt-6">



          <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
            {/* <MapContainer center={position} zoom={13} >
             
              <TileLayer
                  url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                  attribution="© OpenStreetMap contributors"
                  detectRetina={true}
                  maxZoom={18}
                  minZoom={5}

                />

              <Marker position={position}>
                <Popup>  { property.address }</Popup>
              </Marker>
            </MapContainer> */}

         </div> 
     </div>

       




    
  ) 
};

export default PropertyLocation;

