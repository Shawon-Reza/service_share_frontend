import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

export default function CategorySwiper() {
    const categories = [
        {
            name: 'Cleaner',
            img: 'https://i.ibb.co/8LMyNLhH/t600x362.webp',
        },
        {
            name: 'Plumber',
            img: 'https://i.ibb.co/FkRrYDzs/i-Stock-1341381755.jpg',
        },
        {
            name: 'Electrician',
            img: 'https://i.ibb.co/FL8znKTf/BCL-1149-scaled.jpg',
        },
        {
            name: 'Mechanic',
            img: 'https://i.ibb.co/qLddTSBY/Can-an-Auto-Mechanic-Be-Held-Liable-for-Negligence.jpg',
        },
        {
            name: 'Painter',
            img: 'https://i.ibb.co/VWTnJ80f/360-F-351575117-ZLrld-Rfiwv-RER2xqjj-SLBq-Q2-JRb-Glim-A.jpg',
        },
        {
            name: 'Gardener',
            img: 'https://i.ibb.co/Rpx8nqJq/how-to-become-a-gardener.jpg',
        },
        {
            name: 'Tutor',
            img: 'https://i.ibb.co/p6j7KMgm/What-is-tutoring-Different-types-of-tutoring-explained.jpg',
        },
    ];

    return (
        <div className="relative pb-14"> {/* Add bottom padding to push pagination down */}
        <h3 className='text-3xl font-bold text-center p-2 md:pt-4'>CATEGORIES</h3>
            <Swiper
                effect="coverflow"
                grabCursor={true}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                loop={true}
                coverflowEffect={{
                    rotate: 50,
                    stretch: -20,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={{ clickable: true }}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper"
            >
                {categories.map((item, index) => (
                    <SwiperSlide key={index} className="w-[250px]">
                        <div className="flex justify-center h-[300px] relative">
                            <img
                                src={item.img}
                                alt={item.name}
                                className="object-cover"
                            />
                            <div className="absolute font-bold text-white text-2xl shadow-2xl bottom-10">
                                {item.name}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
