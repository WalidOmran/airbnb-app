"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay , Keyboard , Navigation} from 'swiper/modules';
import 'swiper/css';
import FeaturedPropertiesCard from './FeaturedPropertiesCard';
import { useState } from 'react';
import './FeaturedPropertiesSlider.css';

const FeaturedPropertiesSlider = ({properties }) => {
    const safeProps = properties || [];
    const breakpoints= {
                        640: {
                            slidesPerView: (safeProps.length >= 2 ) ? 2 : safeProps.length,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: (safeProps.length >= 3 ) ? 3 : safeProps.length,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: (safeProps.length >= 5 ) ? 5 : safeProps.length,
                            spaceBetween: 20,
                        },
                    }
    const totalSlides = safeProps.length;
    const [announcement, setAnnouncement] = useState("");
    return (
        <div className='relative px-3 ' role="region" aria-label="Featured properties carousel" >
          {
            
          }
            <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    }}
                breakpoints={breakpoints}
                modules={[Autoplay,Keyboard,Navigation]}
                 keyboard={{ enabled: true }}
                 navigation={true}
                //  navigation={{ clickable: true }}
                 onSlideChange={(swiper) => {
                        setAnnouncement(`Showing slide ${swiper.activeIndex + 1} of ${swiper.slides.length}`);
                    }}
                >
                {

                    safeProps ?
                 
                            safeProps.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <FeaturedPropertiesCard item={item} totalSlides={totalSlides} />
                                </SwiperSlide> 
                            ))
                            :
                            <p className='text-xl'>Properties Loading ....</p>
            
            }
            </Swiper>
            {/* Accessibility announcement */}
            <div className="sr-only" aria-live="polite" aria-atomic="true">
                {announcement}
            </div>
        </div>
        
       
        
    )
}

export default FeaturedPropertiesSlider
