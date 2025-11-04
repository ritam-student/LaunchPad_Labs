import Button2 from "./ui/Button2";
import Work from "./ui/Work";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// @ts-expect-error - swiper styles module has no TypeScript types
import "swiper/css";
// @ts-expect-error - swiper styles module has no TypeScript types
import "swiper/css/navigation";

// import required modules
import { Navigation } from 'swiper/modules';

function OurWork() {
    return <div className="px-4 md:px-8 lg:px-14 py-24 bg-[#F3F7F8] ">
        <div className="h-auto w-full pt-4 md:pt-6 lg:pt-8 flex items-center justify-center">
            <Button2 text="Our Work" />
        </div>
        <div className="h-auto w-full pt-6 flex items-center justify-center">
            <h2 className="text-[#202020] text-[28px] font-semibold leading-[31px] text-center px-6 ">Every product here went from idea to live in 2 weeks</h2>
        </div>
        <div className="h-auto w-full pt-4 pb-16 flex items-center justify-center px-14 text-center">
            <p className="text-[16px] leading-[24px] md:leading-[31px] ">Built, launched, and loved by real users</p>
        </div>
        <div className="w-full h-auto flex items-center justify-center  overflow-x-hidden">
            <Swiper
                slidesPerView={3.5}
                spaceBetween={20}
                loop={true}
                pagination={{
                clickable: true,
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    },
                    780: {
                        slidesPerView: 2.5,
                        spaceBetween: 10
                    },
                    1240: {
                        slidesPerView: 3.5,
                        spaceBetween: 20
                    },
                }}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
                
            >
                <SwiperSlide><Work /></SwiperSlide>
                <SwiperSlide><Work /></SwiperSlide>
                <SwiperSlide><Work /></SwiperSlide>
                <SwiperSlide><Work /></SwiperSlide>
                <SwiperSlide><Work /></SwiperSlide>
            </Swiper>
        </div>
    </div> 
}

export default OurWork;