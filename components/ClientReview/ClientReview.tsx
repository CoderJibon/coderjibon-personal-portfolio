"use client";
import { Reviews } from "@/data/Reviews";
import { IoIosStar } from "react-icons/io";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
function ClientReview() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div className="">
      {/* Custom navigation buttons */}
      <div className="swiper-button-prev-custom text-xl bg-success dark:bg-success text-white hover:text-darkyellow dark:hover:text-primary  p-2  rounded-full absolute right-16 top-4 z-10 cursor-pointer">
        <FaArrowLeft />
      </div>
      <div className="swiper-button-next-custom text-xl top-4 bg-success dark:bg-success hover:text-darkyellow dark:hover:text-primary text-white p-2 rounded-full absolute right-6 z-10 cursor-pointer">
        <FaArrowRight />
      </div>

      <Swiper
        navigation={{
          prevEl: ".swiper-button-prev-custom",
          nextEl: ".swiper-button-next-custom",
        }}
        loop={true} // Infinite loop
        autoplay={{
          delay: 3000, // Slide delay (3 seconds)
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
            <div className="bg-success dark:bg-gray-100 py-6 px-4 sm:px-10 min-h-[300px] rounded-lg flex items-center">
              <div className="text-justify">
                <div className="flex gap-1 text-lg text-darkyellow items-center justify-left mb-5">
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                </div>
                <div className="text-base mb-3">{r.review}</div>
                <div className="flex gap-2 items-center justify-left">
                  <h6 className="text-base capitalize dark:text-success text-gray-300 font-semibold">
                    {r.user} -
                  </h6>
                  <span className="text-base font-semibold capitalize dark:text-primary text-darkyellow">
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
