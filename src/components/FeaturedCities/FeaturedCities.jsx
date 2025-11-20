import { getData } from '@/data/getData';
import SectionHeader from '../SectionHeader'
import CityItem from './CityItem'
import { apiUrl } from '@/utils/utils';
const FeaturedCities  = async () => {
  const data = await getData(`${apiUrl}/cities`);  
  const cities = process.env.NODE_ENV === 'production'
    ? data?.cities ?? []
    : data ?? [];


  return (
    <section className='w-full'>
      <div className="container">
        <SectionHeader title="Explore Featured Cities" />
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-8 my-8">
            {
                cities.map((item)=> 
                    <CityItem key={item.id} item={item}/>
                )
            }
        </div>
      </div>
    </section>
  )
}

export default FeaturedCities 
