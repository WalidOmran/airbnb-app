import SectionHeader from '../SectionHeader'
import CityItem from './CityItem'
const FeaturedCities  = async () => {
  const res = await fetch('http://localhost:9000/cities', { cache: 'no-store' });
  const cities = await res.json();
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
