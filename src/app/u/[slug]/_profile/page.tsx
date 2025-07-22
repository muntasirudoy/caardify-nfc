import Image from "next/image";
import React from "react";

function page() {
  return (
    <div className=" h-screen relative bg-gray-950">
      <div className=" bg-blue-950 relative ">
        <div className=" absolute top-0 left-0 w-full h-full bg-black/60 backdrop-blur-sm flex  justify-center">
          <div className="mt-[60px]">
            <h1 className=" text-gray-100 text-[46px] drop-shadow-xl font-secondary font-semibold text-center  mt-3">
              Md. Abdur Rahman
            </h1>
            <p className=" text-gray-200 text-[22px] font-secondary font-[400] text-center ">
              Software Developer
            </p>
          </div>
        </div>
        <Image
          src="/profile/bg.jpg"
          width={1100}
          height={350}
          alt=""
          className=" w-full max-h-[350px] object-cover"
        />
      </div>
      <div className=" w-[1000px] grid grid-cols-3 p-6 shadow-2xl   mx-auto rounded-lg absolute top-[250px] left-1/2 -translate-x-1/2">
        <div className=" col-span-1  border-[1px] h-full rounded-lg overflow-hidden">
          <Image
            src="/user/user.jpg"
            width={200}
            height={300}
            alt=""
            className=" w-full h-[300px] object-cover"
          />
        </div>
        <div className=" col-span-2"></div>
      </div>
    </div>
  );
}

export default page;
