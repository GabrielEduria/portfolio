import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';

const instaImages = [
    '/ig-posts/post5.png',
    '/ig-posts/Post1.png',
    '/ig-posts/post7.3.png',
    '/ig-posts/post4.1.png',
    '/ig-posts/post10.png',   
    '/ig-posts/Post1.1.png',
    '/ig-posts/post7.png',
    '/ig-posts/post4.png',
    '/ig-posts/post7.2.png',
    '/ig-posts/post8.png',
    '/ig-posts/post9.2.png',   
    '/ig-posts/post10.1.png',   
    '/ig-posts/Post2.1.png',
    '/ig-posts/post7.1.png',
    '/ig-posts/post9.png',
];

const Designs = React.memo(() => {
  return (
    <div className="p-3">
      <h2 className="text-2xl font-bold pb-4">Designs</h2>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 3 }
        }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        modules={[Autoplay]}
        className="w-full h-full"
      >
        {instaImages.map((src, index) => (
          <SwiperSlide key={index} className="drop-shadow-lg  overflow-hidden ">
            <img
              src={src}
              alt={`Instagram design ${index + 1}`}
              className="w-full h-full object-cover rounded-xs"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
});

export default Designs;