'use client'

import { Tooltip } from "./tooltip";

function Banner() {
  return (
    <div className=" w-full h-[calc(100vh-300px)] lg:h-[calc(100vh-70px)] bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.03] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="container ">
        <div className="flex">
          <div className=" px-4 flex flex-col lg:w-1/2 w-full ">
            <h1 className=" font-secondary font-[400] tracking-tight bg-clip-text text-gray-800 text-[42px] sm:text-[48px] lg:text-[54px] lg:leading-[64px] xl:text-[64px] xl:leading-[74px] 2xl:text-[80px] 2xl:leading-[90px] text-left mt-6 relative z-10 lg:py-6">
              <span
                style={{
                  display: "inline-block",
                  verticalAlign: "top",
                  textDecoration: "inherit",
                  textWrap: "balance",
                }}
              >
                Share Your Profile with{" "}
                <span className=" font-primary font-bold">Caardify</span>
              </span>
            </h1>

            <h2
              className="my-4 font-secondary max-w-[90%]  text-left mt-2  text-gray-600 text-[16px] md:text-[22px]  dark:text-muted-dark
         relative z-10"
            >
              <span style={{}}>
                Create, share, and host your profile publicly with our NFC
                cards. Simply tap and connect!
              </span>
            </h2>
            <Tooltip />
          </div>

          <div className=" clip-custom-shape absolute right-0 top-0 w-1/2  pl-4 h-screen hidden md:block">
            {/* <Image
              src={"/banner/b-1.webp"}
              width={500}
              height={500}
              alt=""
              className=" w-full h-full object-cover mr-auto "
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
