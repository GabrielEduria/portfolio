import { Tag } from "../../components";
import { Link } from "react-router-dom"
import { projectCards } from "../../constants/projectData";
import React from 'react';

 // Swiper.js Carousel
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,  Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


const ProjectLists = React.memo(() => {
    return (
      
      <div className="p-3">
        
              <div className="flex justify-between items-center -z-5">
                 <h2 className="text-2xl  font-bold mb-3.5">Projects</h2>
                   <Link to="/projects"
                   className="transition transform duration-200 hover:scale-105 pb-3">
                          View All 
                    <i className="fa-solid fa-arrow-right  ml-2"/>
                   </Link>
               </div>

            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
          {projectCards.map((card, index) => (
            <SwiperSlide
              key={index}
              className="w-full min-h-[150px] max-h-[180px] p-3 border border-gray-300 
              rounded-xl shadow-sm transition flex flex-col justify-between "
              >
                <div className="flex justify-between items-center ">
                  <h3 className="font-bold text-base sm:text-lg truncate">{card.title}</h3>
                  <p className="font-semibold text-gray-500  dark:border-gray-600
      dark:text-gray-300">{card.year}</p>
                </div>
                <div className="flex flex-col mt-auto overflow-hidden">
                  <p className=" text-gray-700 text-wrap leading-relaxed text-sm md:text-base 
                   dark:border-gray-600 dark:text-gray-300"
                   >{card.shortDescription}</p>
                  <div className="flex flex-wrap gap-2 text-sm md:text-base">
                    {card.tags.map((tag, i) => (
                      <Tag key={i}>{tag}</Tag>
                    ))}
                  </div>
                </div>
            </SwiperSlide>
           ))}
        
            </Swiper>
        </div>
    )
});

export default ProjectLists;
