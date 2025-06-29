import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import { ImageSpinner } from '../../components';

const instaImages = [
    '/ig-posts/post5.png',
    '/ig-posts/Post1.png',
    '/ig-posts/post7.3.png',
    '/ig-posts/post12.png',
    '/ig-posts/post4.1.png',
    '/ig-posts/post10.png',   
    '/ig-posts/post11.png',
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
      <div className="p-3 sm:min-h-2 overflow-visible"> 
        <h2 className="text-2xl font-bold pb-3 overflow-visible">Designs</h2>
        <Swiper
          spaceBetween={5}
          slidesPerView={2}
          breakpoints={{
            430: { slidesPerView: 3 },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          modules={[Autoplay]}
          className="w-full h-full " 
        >
          {instaImages.map((src, index) => (
            <SwiperSlide
              key={index}
              className="relative z-0 " 
            >
              <div> 
                <a
                  href="https://www.instagram.com/cliqueave"
                  target="_blank"
                  rel="noreferrer"
                  className="block"
                >
                  <ImageSpinner
                    src={src}
                    alt={`Instagram design ${index + 1}`}
                    className="w-full max-h-[180px]"
                    imgClassName="w-full max-h-[180px] object-contain rounded-xl
                      cursor-pointer transition-transform duration-400 ease-in-out
                      hover:scale-95 hover:z-20"
                  />
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
});

export default Designs;