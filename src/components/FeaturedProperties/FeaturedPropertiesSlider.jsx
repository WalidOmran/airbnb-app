"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay , Keyboard , Navigation} from 'swiper/modules';
import 'swiper/css';
import FeaturedPropertiesCard from './FeaturedPropertiesCard';
import { useState } from 'react';
import './FeaturedPropertiesSlider.css';

const FeaturedPropertiesSlider = ({properties }) => {

    const breakpoints= {
                        640: {
                            slidesPerView: (properties.length >= 2 ) ? 2 : properties.length,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: (properties.length >= 3 ) ? 3 : properties.length,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: (properties.length >= 5 ) ? 5 : properties.length,
                            spaceBetween: 20,
                        },
                    }
    const totalSlides = properties.length;
    const [announcement, setAnnouncement] = useState("");
    return (
        <div className='relative px-3 ' role="region" aria-label="Featured properties carousel" >
          
            <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    }}
                breakpoints={breakpoints}
                modules={[Autoplay,Keyboard,Navigation]}
                 keyboard={{ enabled: true }}
                 navigation={{ clickable: true }}
                 onSlideChange={(swiper) => {
                        setAnnouncement(`Showing slide ${swiper.activeIndex + 1} of ${swiper.slides.length}`);
                    }}
                >
                {
                 
                properties?.map((item) => (
                    <SwiperSlide key={item.id}>
                         <FeaturedPropertiesCard item={item} totalSlides={totalSlides} />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="sr-only" aria-live="polite" aria-atomic="true">
                {announcement}
            </div>
        </div>
        
       
        
    )
}

export default FeaturedPropertiesSlider
