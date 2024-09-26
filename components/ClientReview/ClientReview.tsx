"use client";
import { Reviews } from "@/data/Reviews";
import { IoIosStar } from "react-icons/io";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
function ClientReview() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div>
      <Swiper
        navigation={true}
        loop={true} // Infinite loop
        autoplay={{
          delay: 1000, // Slide delay (3 seconds)
          disableOnInteraction: false, // Autoplay continues even after user interaction
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
        grabCursor={true}
        speed={2000}
        slidesPerView={2}
        spaceBetween={20}
        modules={[Navigation]}
        className="mySwiper"
      >
        {Reviews.map((r, i) => (
          <SwiperSlide key={i}>
            <div className="bg-success dark:bg-gray-100 py-6 px-4 sm:px-10 min-h-[300px] rounded-lg flex items-center ">
              <div className="text-center">
                <div className="flex gap-1 text-lg text-darkyellow items-center justify-center mb-5">
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                </div>
                <div className="text-base mb-3">{r.review}</div>
                <div className="flex gap-2 items-center justify-center ">
                  <h6 className="text-base capitalize dark:text-success text-gray-300">
                    {r.user} -
                  </h6>
                  <span className="text-xs capitalize dark:text-primary text-darkyellow">
                    {r.country}
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ClientReview;
