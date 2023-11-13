import React from 'react';
import FoodCards from '../FoodCards/FoodCards';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const OrderCard = ({item}) => {
    return (
      <div className="grid md:grid-cols-3 gap-10 mx-auto py-10">
        {item.map((item) => (
          <FoodCards item={item} key={item._id}></FoodCards>
        ))}
      </div>
    );
};

export default OrderCard;