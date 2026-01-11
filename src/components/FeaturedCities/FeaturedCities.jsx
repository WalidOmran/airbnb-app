'use client';
import { useState, useEffect } from 'react';
import { getData } from '@/data/getData';
import SectionHeader from '../SectionHeader'
import CityItem from './CityItem'
import { apiUrl } from '@/utils/utils';

export default function FeaturedCities() {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData(`${apiUrl}/cities`).then(data => {
      const citiesData = process.env.NODE_ENV === 'production'
        ? data?.cities ?? []
        : data ?? [];
      setCities(citiesData);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Loading cities...</div>;

  return (
    <section className='w-full'>
      <div className="container">
        <SectionHeader title="Explore Featured Cities" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 my-8">
          {cities.map((item) => 
            <CityItem key={item.id} item={item}/>
          )}
        </div>
      </div>
    </section>
  )
}
