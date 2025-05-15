import { Tag } from "../../components";
import { Link } from "react-router-dom"
import { projectCards } from "../../constants/projectData";

 // Swiper.js Carousel
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,  Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


const Projects = () => {
    return (
      
      <div className="p-3">
        
              <div className="flex justify-between items-center">
                 <h2 className="text-xl font-bold pb-4">Projects</h2>
                   <Link to="/ProjectHome">
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
              navigation={true}
              modules={[Autoplay, Navigation]}
              className="mySwiper"
            >
          {projectCards.map((card, index) => (
            <SwiperSlide
              key={index}
              className="w-full min-h-[170px] p-3 border border-gray-300 rounded-xl shadow-sm transition flex flex-col justify-between space-y-3">
  
                <div className="flex justify-between items-center ">
                  <h3 className="font-bold lg:text-lg  md:text-base overflow-ellipsis">{card.title}</h3>
                  <p className="font-semibold text-gray-500">{card.year}</p>
                </div>
                <div className="flex flex-col mt-auto">
                  <p className=" text-gray-700 pb-2 text-sm md:text-base">{card.description}</p>
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
}

export default Projects;
