import { Button } from "@/components/ui/button";
import { EarthIcon, Mail, PhoneCall } from "lucide-react";
import Image from "next/image";

function page() {
  return (
    <div className="max-w-[485px] bg-white shadow-2xl mx-auto h-screen min-w-[320px] w-full relative">
      <div className=" absolute gap-10 top-0 left-0 bg-cyan-700 w-full h-[250px] rounded-br-[320px] flex justify-end items-center flex-col">
        <div>
          <h1 className=" font-primary font-bold text-[24px] text-center text-white">
            MD. ABDULLAH MAHMUD
          </h1>
          <h1 className=" font-primary text-gray-200 text-center">
            Software Developer
          </h1>
        </div>
        <div className=" w-[150px] h-[150px] bg-gray-100 overflow-hidden border-cyan-600 shadow-lg border-[6px] rounded-full -mb-[70px]">
          <Image
            width={150}
            height={150}
            alt="im"
            src="/user/user.jpg"
            className=" w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="pt-[350px] px-8 box-border">
        <div className=" flex justify-center mb-8 gap-5">
          <Button className=" w-full py-6 rounded-full bg-cyan-600 hover:bg-white hover:text-cyan-700 hover:border-[1px] hover:border-cyan-800">
            {" "}
            View Profile{" "}
          </Button>
          <Button className=" w-full py-6 rounded-full bg-white hover:text-white border-[1px] border-cyan-700 text-cyan-700 hover:bg-cyan-600">
            {" "}
            Dashboard
          </Button>
        </div>
        <div className=" flex gap-6 justify-evenly ">
          <div className=" border-[1px] border-cyan-600 p-1 rounded-lg group cursor-pointer">
            <div className=" w-[60px] flex  justify-center items-center duration-300 hover:scale-125 h-[50px] hover:bg-white hover:text-cyan-600 bg-cyan-600  rounded-md shadow-xl">
              <PhoneCall
                className="text-white group-hover:text-cyan-600 duration-300 cursor-pointer"
                size={26}
              />
            </div>
          </div>
          <div className=" border-[1px] border-cyan-600 p-1 rounded-lg group cursor-pointer">
            <div className=" w-[60px] flex  justify-center items-center duration-300 hover:scale-125 h-[50px] hover:bg-white hover:text-cyan-600 bg-cyan-600  rounded-md shadow-xl">
              <Mail
                className="text-white group-hover:text-cyan-600 duration-300 cursor-pointer"
                size={26}
              />
            </div>
          </div>
          <div className=" border-[1px] border-cyan-600 p-1 rounded-lg group cursor-pointer">
            <div className=" w-[60px] flex  justify-center items-center duration-300 hover:scale-125 h-[50px] hover:bg-white hover:text-cyan-600 bg-cyan-600  rounded-md shadow-xl">
              <EarthIcon
                className="text-white group-hover:text-cyan-600 duration-300 cursor-pointer"
                size={26}
              />
            </div>
          </div>
        </div>
        <div className=" mt-5">
          <h2 className=" text-[16px] font-primary font-semibold text-cyan-800">
            {" "}
            Social Links
          </h2>
          <div className=" flex justify-between mt-3">
            <div className="w-[60px] flex justify-center items-center h-[60px] rounded-md shadow-md">
              <svg
                width="38px"
                height="38px"
                viewBox="0 0 48 48"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>Facebook-color</title>{" "}
                  <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                  <g
                    id="Icons"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    {" "}
                    <g
                      id="Color-"
                      transform="translate(-200.000000, -160.000000)"
                      fill="#4460A0"
                    >
                      {" "}
                      <path
                        d="M225.638355,208 L202.649232,208 C201.185673,208 200,206.813592 200,205.350603 L200,162.649211 C200,161.18585 201.185859,160 202.649232,160 L245.350955,160 C246.813955,160 248,161.18585 248,162.649211 L248,205.350603 C248,206.813778 246.813769,208 245.350955,208 L233.119305,208 L233.119305,189.411755 L239.358521,189.411755 L240.292755,182.167586 L233.119305,182.167586 L233.119305,177.542641 C233.119305,175.445287 233.701712,174.01601 236.70929,174.01601 L240.545311,174.014333 L240.545311,167.535091 C239.881886,167.446808 237.604784,167.24957 234.955552,167.24957 C229.424834,167.24957 225.638355,170.625526 225.638355,176.825209 L225.638355,182.167586 L219.383122,182.167586 L219.383122,189.411755 L225.638355,189.411755 L225.638355,208 L225.638355,208 Z"
                        id="Facebook"
                      >
                        {" "}
                      </path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
            </div>
            <div className="w-[60px] flex justify-center items-center h-[60px] rounded-md shadow-md">
              <svg
                width="38px"
                height="38px"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <rect
                    x="2"
                    y="2"
                    width="28"
                    height="28"
                    rx="6"
                    fill="url(#paint0_radial_87_7153)"
                  ></rect>{" "}
                  <rect
                    x="2"
                    y="2"
                    width="28"
                    height="28"
                    rx="6"
                    fill="url(#paint1_radial_87_7153)"
                  ></rect>{" "}
                  <rect
                    x="2"
                    y="2"
                    width="28"
                    height="28"
                    rx="6"
                    fill="url(#paint2_radial_87_7153)"
                  ></rect>{" "}
                  <path
                    d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z"
                    fill="white"
                  ></path>{" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z"
                    fill="white"
                  ></path>{" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z"
                    fill="white"
                  ></path>{" "}
                  <defs>
                    {" "}
                    <radialGradient
                      id="paint0_radial_87_7153"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)"
                    >
                      {" "}
                      <stop stop-color="#B13589"></stop>{" "}
                      <stop offset="0.79309" stopColor="#C62F94"></stop>{" "}
                      <stop offset="1" stopColor="#8A3AC8"></stop>{" "}
                    </radialGradient>{" "}
                    <radialGradient
                      id="paint1_radial_87_7153"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)"
                    >
                      {" "}
                      <stop stop-color="#E0E8B7"></stop>{" "}
                      <stop offset="0.444662" stopColor="#FB8A2E"></stop>{" "}
                      <stop offset="0.71474" stopColor="#E2425C"></stop>{" "}
                      <stop
                        offset="1"
                        stopColor="#E2425C"
                        stopOpacity="0"
                      ></stop>{" "}
                    </radialGradient>{" "}
                    <radialGradient
                      id="paint2_radial_87_7153"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)"
                    >
                      {" "}
                      <stop offset="0.156701" stopColor="#406ADC"></stop>{" "}
                      <stop offset="0.467799" stopColor="#6A45BE"></stop>{" "}
                      <stop
                        offset="1"
                        stopColor="#6A45BE"
                        stopOpacity="0"
                      ></stop>{" "}
                    </radialGradient>{" "}
                  </defs>{" "}
                </g>
              </svg>
            </div>
            <div className="w-[60px] flex justify-center items-center h-[60px] rounded-md shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-label="WhatsApp"
                role="img"
                viewBox="0 0 512 512"
                width="38px"
                height="38px"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <rect width="512" height="512" rx="15%" fill="#25d366"></rect>
                  <path
                    fill="#25d366"
                    stroke="#ffffff"
                    strokeWidth="26"
                    d="M123 393l14-65a138 138 0 1150 47z"
                  ></path>
                  <path
                    fill="#ffffff"
                    d="M308 273c-3-2-6-3-9 1l-12 16c-3 2-5 3-9 1-15-8-36-17-54-47-1-4 1-6 3-8l9-14c2-2 1-4 0-6l-12-29c-3-8-6-7-9-7h-8c-2 0-6 1-10 5-22 22-13 53 3 73 3 4 23 40 66 59 32 14 39 12 48 10 11-1 22-10 27-19 1-3 6-16 2-18"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="w-[60px] flex justify-center items-center h-[60px] rounded-md shadow-md">
              <svg
                width="42px"
                height="42px"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill="#0A66C2"
                    d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className=" mt-5">
          <h2 className=" text-[16px] font-primary font-semibold text-cyan-800">
            {" "}
            About
          </h2>
          <p className=" text-[14px] text-gray-500 mt-1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
            nemo beatae quaerat quas deserunt quam ratione vero modi voluptatem!
            Dicta?
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
