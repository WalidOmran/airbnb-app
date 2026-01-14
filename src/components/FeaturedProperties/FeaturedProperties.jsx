import SectionHeader from "../SectionHeader";
import FeaturedPropertiesSlider from "./FeaturedPropertiesSlider";
import { propertyService } from '@/services/propertyService';

const FeaturedProperties = async () => {
  const data = await propertyService.getAll();
  const properties = data?.properties || data || [];
  if (!properties || properties.length === 0) return null;

  return (
    <section className='w-full'>
      <div className="container"> 
        <SectionHeader title='Live Anywhere' />
        <FeaturedPropertiesSlider properties={properties} />
      </div> 
    </section>
  );
}

export default FeaturedProperties