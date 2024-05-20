import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import SectionTitle from '../../Components/SectionTitle';
const Category = () => {
    return (
        <section className=' max-w-[1280px] mx-auto'>
            <SectionTitle
                subHeading={'---From 11:00am to 10:00pm---'}
                heading={'ORDER ONLINE'}
            />
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <img className='h-[410px]' src="https://i.ibb.co/YBsqr1d/burger-with-melted-cheese.jpg" alt="" />
                    <h2 className='uppercase text-center text-4xl -mt-16 text-white font-bold'>Bugger</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[410px]' src="https://i.ibb.co/yV1XQz9/mediterraneansaladdressing-s.jpg" alt="" />
                    <h2 className='uppercase text-center text-4xl -mt-16 text-white font-bold'>Salad</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[410px]' src="https://i.ibb.co/Bgsv3xv/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg" alt="" />
                    <h2 className='uppercase text-center text-4xl -mt-16 text-white font-bold'>Curry</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[410px]' src="https://i.ibb.co/jkYrv8k/lovepik-tomato-soup-picture-480019859.jpg" alt="" />
                    <h2 className='uppercase text-center text-4xl -mt-16 text-white font-bold'>Soup</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[410px]' src="https://i.ibb.co/ZhzFvc6/linguine-tomatoes-1522254777.jpg" alt="" />
                    <h2 className='uppercase text-center text-4xl -mt-16 text-white font-bold'>Pasta</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='h-[410px]' src="https://i.ibb.co/vdTC00f/pngtree-breakfast-with-eggs-fruit-and-veggies-on-white-plate-image-13159708.jpg" alt="" />
                    <h2 className='uppercase text-center text-4xl -mt-16 text-white font-bold'>Brackfast</h2>
                </SwiperSlide>

            </Swiper>
        </section>
    );
};  

export default Category;