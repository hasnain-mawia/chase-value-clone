// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Keyboard, Pagination, Navigation, EffectCreative} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

export const Slider = () => {
  return (
    <Swiper
        slidesPerView={1}
        centeredSlides={true}
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        navigation={true}
        modules={[Autoplay, Keyboard, Pagination, Navigation, EffectCreative]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={require('../assets/images/Slider-1.jpg')} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require('../assets/images/Slider-2.jpg')} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require('../assets/images/Slider-3.jpg')} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={require('../assets/images/Slider-4.jpg')} />
        </SwiperSlide>
      
    </Swiper>
  );
};