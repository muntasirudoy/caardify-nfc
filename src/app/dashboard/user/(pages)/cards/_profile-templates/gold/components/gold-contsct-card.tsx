// "use client";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { FreeMode, Pagination } from "swiper/modules";
// export const GoldContactCard = ({
//   title,
//   icon,
//   text,
// }: {
//   title: string;
//   icon: React.ReactNode;
//   text: string[];
//   link: string;
// }) => {
//   return (
//     <Swiper
//       slidesPerView={1}
//       spaceBetween={20}
//       freeMode={true}
//       centeredSlides={true}
//       pagination={{
//         clickable: true,
//       }}
//       modules={[FreeMode, Pagination]}
//       className="mySwiper flex w-full "
//     >
//       {text?.map((t, i) => (
//         <SwiperSlide
//           key={i}
//           className={`min-w-[310px] ${text.length < 2 ? "!mr-0" : ""}`}
//         >
//           {
//             <h2 className={`font-secondary ${i > 0 && "mt-6"}`}>
//               {" "}
//               {i < 1 && title}
//             </h2>
//           }
//           <div className=" bg-white font-secondary shadow-xl rounded-lg flex items-center py-3 gap-2 px-3 border-[1px]">
//             <span className=" w-[40px] flex justify-center items-center h-[40px] bg-slate-100 rounded-full">
//               {icon}
//             </span>

//             <p>{t}</p>
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };





"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

export const GoldContactCard = ({
  title,
  icon,
  text,
}: {
  title: string;
  icon: React.ReactNode;
  text: string[];
  link: string;
}) => {
  return (
    <div className="w-full">
      {/* Static Title - stays outside the slider */}
      <h2 className="font-secondary mb-2 ml-4">{title}</h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        freeMode={true}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper w-full"
      >
        {text?.map((t, i) => (
          <SwiperSlide
            key={i}
            className={`min-w-[310px] ${text.length < 2 ? "!mr-0" : ""}`}
          >
            <div className="bg-white font-secondary shadow-xl rounded-lg flex items-center py-3 gap-2 px-3 border-[1px]">
              <span className="w-[40px] flex justify-center items-center h-[40px] bg-slate-100 rounded-full">
                {icon}
              </span>
              <p>{t}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
