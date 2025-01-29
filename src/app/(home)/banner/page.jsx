"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const BannerPage = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://img.freepik.com/free-vector/cartoon-blood-donation-background_52683-70799.jpg" className='w-full h-[500px] bg-cover' alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://img.freepik.com/free-vector/happy-world-blood-donor-day-red-grey-yellow-background-social-media-design-banner-free-vector_1340-21612.jpg" className='w-full h-[500px] bg-cover' alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://media.istockphoto.com/id/1224861391/vector/abstract-giving-hand-low-poly-style-design.jpg?s=612x612&w=0&k=20&c=ZNvmPJ0VF06xa0XpBjqkIKlcblZDOXIBYrTRyzzPvAg=" className='w-full h-[500px] bg-cover' alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default BannerPage;