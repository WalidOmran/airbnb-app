"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay , Keyboard , Navigation} from 'swiper/modules';
import 'swiper/css';
import FeaturedPropertiesCard from './FeaturedPropertiesCard';
import { useState } from 'react';
import './FeaturedPropertiesSlider.css';

const FeaturedPropertiesSlider = ({properties }) => {

    const totalSlides = properties.length;
    const [announcement, setAnnouncement] = useState("");
    return (
        <div className='relative px-3 ' role="region" aria-label="Featured properties carousel" >
          
            <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    }}
                breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                        },
                    }}
                modules={[Autoplay,Keyboard,Navigation]}
                 keyboard={{ enabled: true }}
                 navigation={{ clickable: true }}
                 onSlideChange={(swiper) => {
                        setAnnouncement(`Showing slide ${swiper.activeIndex + 1} of ${swiper.slides.length}`);
                    }}
                >
                {properties.map((item) => (
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
