import { getData } from "@/data/getData";
import SectionHeader from "../SectionHeader";
import FeaturedPropertiesSlider from "./FeaturedPropertiesSlider";
import { propertiesApiUrl } from "@/utils/utils";

const FeaturedProperties = async () => {


const data = await getData(propertiesApiUrl);

 
const properties = process.env.NODE_ENV === 'production'
  ? data.properties
  : data;
  return (
    <section className='w-full'>
     
      <div className="container"> 
        <SectionHeader title='Live Anywhere' />
        <FeaturedPropertiesSlider properties={properties} />
      </div> 
    </section>
  )
}

export default FeaturedProperties
