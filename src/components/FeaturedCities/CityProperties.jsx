"use client";
import React from 'react'
import FeaturedPropertiesSlider from '../FeaturedProperties/FeaturedPropertiesSlider'

const CityProperties = ({propertiesList, title, desc }) => {
  
  return (
    <div className="mt-10 mb-10 py-3">
      <div className="container">
        <h2 className="text-center text-2xl md:text-3xl mt-5 mb-5">{title}</h2>
        {desc && <p className="text-sm md:text-lg color-gray-600 text-center mb-5">{desc}</p>}
        <FeaturedPropertiesSlider properties={propertiesList} />
      </div>
      {propertiesList && propertiesList.length === 0 && (
        <div className="text-center text-red-500 mt-10 mb-5">No rentals found in this city yet!</div>
      )}
    </div>
  );
};

export default CityProperties;
