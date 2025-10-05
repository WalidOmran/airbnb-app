import { getData } from "@/data/getData";
import SectionHeader from "../SectionHeader";
import FeaturedPropertiesSlider from "./FeaturedPropertiesSlider";

const FeaturedProperties = async () => {
  const properties = await getData('http://localhost:9000/properties');
  

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
