import React, { useEffect, useState } from "react";
import SectionTitle from "../../shared/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Rating } from '@smastrom/react-rating'
import { BiSolidQuoteLeft } from 'react-icons/bi'

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://bistro-boss-server-gold-pi.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <div className="py-20">
      <SectionTitle
        heading={"TESTIMONIALS"}
        subHeading={"What Our Clients Say"}
      ></SectionTitle>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id} review={review}>
            <div className="text-center">
              <h1 className="flex justify-center pt-10">
                <Rating style={{ maxWidth: 180 }} value={review?.rating} readOnly />
              </h1>
            
             <div className="flex justify-center py-3">
                    <BiSolidQuoteLeft className="text-6xl"/>
             </div>
           
              <h2 className="text-slate-500 mx-20 pt-2 md:font-semibold text-sm md:text-base">
                {review?.details}
              </h2>
              <h3 className="text-yellow-500 text-3xl py-5 font-semibold">
                {review?.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
