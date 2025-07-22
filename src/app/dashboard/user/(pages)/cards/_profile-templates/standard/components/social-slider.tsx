'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import Image from 'next/image';

export const SocialSlider = () => {
    return <>
        <Swiper
            slidesPerView={3}
            spaceBetween={15}
            freeMode={true}
            pagination={{
                clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper flex w-full "
        >
            <SwiperSlide className='h-[60px]  w-[75px]'>
                <div className="  border-[2px] border-gray-500 flex justify-center items-center rounded-lg h-[60px]  w-[75px]  ">
                    <button className="hover:bg-[#292e49] rounded-md justify-center bg-[#3b4269] flex items-center h-[40px] w-[55px]">
                        <Image src={'/icons/Facebook.svg'} width={28} height={28} alt="fb" />
                    </button>
                </div>
            </SwiperSlide>
            <SwiperSlide><div className="  border-[2px] border-gray-500 flex justify-center items-center h-[60px] rounded-lg w-[75px]  ">
                <button className="hover:bg-[#292e49] rounded-md justify-center bg-[#3b4269] flex items-center h-[40px] w-[55px]">
                    <Image src={'/icons/Instagram.svg'} width={28} height={28} alt="fb" />
                </button>
            </div></SwiperSlide>
            <SwiperSlide><div className="  border-[2px] border-gray-500 flex justify-center items-center h-[60px] rounded-lg w-[75px]  ">
                <button className="hover:bg-[#292e49] rounded-md justify-center bg-[#3b4269] flex items-center h-[40px] w-[55px]">
                    <Image src={'/icons/LinkedIn.svg'} width={28} height={28} alt="fb" />
                </button>
            </div></SwiperSlide>
            <SwiperSlide><div className="  border-[2px] border-gray-500 flex justify-center items-center h-[60px] rounded-lg w-[75px] ">
                <button className="hover:bg-[#292e49] rounded-md justify-center bg-[#3b4269] flex items-center h-[40px] w-[55px]">
                    <Image src={'/icons/Twitter.svg'} width={28} height={28} alt="fb" />
                </button>
            </div></SwiperSlide>
            <SwiperSlide><div className="  border-[2px] border-gray-500 flex justify-center items-center h-[60px] rounded-lg w-[75px]  ">
                <button className="hover:bg-[#292e49] rounded-md justify-center bg-[#3b4269] flex items-center h-[40px] w-[55px]">
                    <Image src={'/icons/YouTube.svg'} width={28} height={28} alt="fb" />
                </button>
            </div></SwiperSlide>

        </Swiper>
    </>
}


{/* <div className="p-4 flex gap-4 ">





</div> */}