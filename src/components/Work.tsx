import WorkImage from "./WorkImage";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles/Work.css";
import { projects } from "../projects";

const Work = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (swiperInstance) {
      // Update navigation buttons state when slide changes
      const updateNavState = () => {
        setIsBeginning(swiperInstance.isBeginning);
        setIsEnd(swiperInstance.isEnd);
      };

      swiperInstance.on("slideChange", updateNavState);
      updateNavState();

      return () => {
        swiperInstance.off("slideChange", updateNavState);
      };
    }
  }, [swiperInstance]);

  return (
    <div className="work-section" id="work">
      <div className="work-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="slider-controls">
          <button
            ref={prevRef}
            className={`slider-arrow prev ${isBeginning ? "swiper-button-disabled" : ""}`}
            aria-label="Previous project"
          >
            ←
          </button>
          <button
            ref={nextRef}
            className={`slider-arrow next ${isEnd ? "swiper-button-disabled" : ""}`}
            aria-label="Next project"
          >
            →
          </button>
        </div>

        <div className="slider-container">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={32} // 2rem in pixels
            slidesPerView="auto"
            centeredSlides={false}
            speed={600}
            onSwiper={setSwiperInstance}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            pagination={{
              clickable: true,
              el: ".slider-dots",
              bulletElement: "button",
              bulletClass: "dot",
              bulletActiveClass: "active",
            }}
            autoplay={false}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              600: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
              1400: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
            }}
            className="swiper-wrapper"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id} className="work-slide">
                <div className="work-box">
                  <div className="work-info">
                    <div className="work-title">
                      <h3>0{project.id}</h3>
                      <div>
                        <h4>{project.name}</h4>
                        <p>{project.category}</p>
                      </div>
                    </div>
                    <h4>Tools and features</h4>
                    <p>{project.tools}</p>
                  </div>
                  <WorkImage image={project.image} alt={project.name} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="slider-dots"></div>
      </div>
    </div>
  );
};

export default Work;
