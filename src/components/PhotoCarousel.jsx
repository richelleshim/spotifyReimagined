import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import gsap from "gsap";
import {
  Keyboard,
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/modules";
import { hightlightsSlides } from "../constants";
import "swiper/css";
import "swiper/css/effect-coverflow";
const PhotoCarousel = () => {
  const [restart, setRestart] = useState(false);
  useEffect(() => {
    // GSAP animation for page transition
    gsap.to("#slide", { opacity: 1, delay: 1 });
  });
  return (
    <div className="container opacity-0" id="slide">
      <Swiper
        id="slide"
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={false}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        keyboard={{ enabled: true }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Keyboard]}
        className="swiper-container h-[25vh]"
      >
        {hightlightsSlides.map((currentPage, index) => (
          <div key={currentPage.id}>
            <SwiperSlide className=" h-[25vh]">
              <img
                // alt={`Slide ${slide.id}`}
                onLoadedMetadata={(e) => handleLoadedMetaData(i, e)}
                src={currentPage.page}
              />
            </SwiperSlide>
            <div
              className="progress-bar absolute bottom-0 left-0"
              ref={(el) => (progressRef.current[index] = el)}
              style={{
                width: "0%",
                height: "4px",
                backgroundColor: "white",
                position: "absolute",
                bottom: 0,
                left: 0,
              }}
            />
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default PhotoCarousel;
