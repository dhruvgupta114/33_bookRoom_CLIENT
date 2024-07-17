/* eslint-disable no-unused-vars */
import "./FeaturedProperties.css";
import useFetch from "../hooks/useFetch";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch(
    `${import.meta.env.VITE_BACKENED_URL + "/api/hotels?featured=true"}`
  );
  // console.log("FeaturedPropertie 's data",data)

  return (
    <div className="fp">
      {loading ? (
        "Loading Please Wait"
      ) : (
        <Swiper 
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={5}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
        >
          {data.map((item) => (
            <SwiperSlide className="fppad" key={item._id}>
              <div className="fpItem " >
                <img src={item.photos[0]} alt="" className="fpImg" />
                <span className="fpName">{item.name}</span>
                <span className="fpCity">{item.type}</span>
                <span className="fpCity">{item.city}</span>
                <span className="fpPrice">
                  Starting from ${item.cheapestPrice}
                </span>
                {item.rating && (
                  <div className="fpRating">
                    <button>{item.rating}</button>
                    <span>Excellent</span>
                  </div>
                )}
              </div>
              
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default FeaturedProperties;
