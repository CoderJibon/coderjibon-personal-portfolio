"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectCard from "../ProjectCard/ProjectCard";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
function Coverflow() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        loop={true} // Infinite loop
        autoplay={{
          delay: 1000, // Slide delay (3 seconds)
          disableOnInteraction: false, // Autoplay continues even after user interaction
        }}
        speed={2000} // Slow down the speed to make the transition smoother
        centeredSlides={true}
        slidesPerView={3} // Show 3 slides at a time
        spaceBetween={30} // Optional: Adjust space between slides
        breakpoints={{
          320: {
            slidesPerView: 1, // 2 slides on screens >= 768px
          },
          480: {
            slidesPerView: 2, // 2 slides on screens >= 768px
          },
          1024: {
            slidesPerView: 3, // 3 slides on screens >= 1024px
          },
        }}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 200,
          modifier: 1, // Emphasize the center slide by increasing modifier
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ProjectCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Coverflow;
