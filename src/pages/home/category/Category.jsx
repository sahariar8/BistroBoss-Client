import { Swiper, SwiperSlide } from 'swiper/react';
import Slide1 from '../../../assets/home/slide1.jpg'
import Slide2 from '../../../assets/home/slide2.jpg'
import Slide3 from '../../../assets/home/slide3.jpg'
import Slide4 from '../../../assets/home/slide4.jpg'
import Slide5 from '../../../assets/home/slide5.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import SectionTitle from '../../shared/SectionTitle';

const Category = () => {
    return (
     
       <div>
         <SectionTitle subHeading={"From 11:00am to 10:00pm"} heading={"ORDER ONLINE"} ></SectionTitle>
         <div className='mx-auto py-10'>
       <section>
          
       <Swiper
         
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={false}
          loop={true}
          autoplay={{
              delay: 50,
              // disableOnInteraction: false
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={Slide1} alt="" className='relative' />
            <h3 className='uppercase  md:text-3xl font-rancho absolute bottom-8 md:ml-16 ml-4'>Salad</h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Slide2} alt="" className='relative' />
            <h3 className='uppercase md:text-3xl font-rancho absolute bottom-8 md:ml-16 ml-4'>Soup</h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Slide3} alt="" className='relative' />
            <h3 className='uppercase  md:text-3xl font-rancho absolute bottom-8 md:ml-16 ml-4'>Pizza</h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Slide4} alt="" className='relative' />
            <h3 className='uppercase  md:text-3xl font-rancho absolute bottom-8 md:ml-14 ml-3'>Dessert</h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={Slide5} alt="" className='relative' />
            <h3 className='uppercase md:text-3xl font-rancho absolute bottom-8 md:ml-16 ml-4'>Salad</h3>
          </SwiperSlide>
         
          
        </Swiper>
       </section>
      </div>
       </div>
    );
};

export default Category;