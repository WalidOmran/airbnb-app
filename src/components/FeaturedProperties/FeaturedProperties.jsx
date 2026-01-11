// 'use client';
// import { getData } from "@/data/getData";
// import SectionHeader from "../SectionHeader";
// import FeaturedPropertiesSlider from "./FeaturedPropertiesSlider";
// import { propertiesApiUrl } from "@/utils/utils";

// const FeaturedProperties = async () => {


// const data = await getData(propertiesApiUrl);

 
// // const properties = process.env.NODE_ENV === 'production'
// //   ? data.properties
// //   : data;
//   return (
//     <section className='w-full'>
     
//       <div className="container"> 
//         <SectionHeader title='Live Anywhere' />
//         <FeaturedPropertiesSlider properties={properties} />
//       </div> 
//     </section>
//   )
// }

// export default FeaturedProperties



'use client';
import { useState, useEffect } from 'react';
import { getData } from "@/data/getData";
import SectionHeader from "../SectionHeader";
import FeaturedPropertiesSlider from "./FeaturedPropertiesSlider";
import { propertiesApiUrl } from "@/utils/utils";

export default function FeaturedProperties() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData(propertiesApiUrl).then(data => {
      console.log('PROPS DATA:', data);
      setProperties(data.properties || data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Loading properties...</div>;

  return (
    <section className='w-full'>
      <div className="container"> 
        <SectionHeader title='Live Anywhere' />
        <FeaturedPropertiesSlider properties={properties} />
      </div> 
    </section>
  );
}
