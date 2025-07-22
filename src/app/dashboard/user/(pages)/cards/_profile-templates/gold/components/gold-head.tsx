import Image from "next/image";

type GoldHeadProps = {
  name?: string;
  designation?: string;
  company?: string;
  image?: string;
};

export const GoldHead = ({
  company,
  designation,
  name,
  image,
}: GoldHeadProps) => {
  return (
    <div className="relative h-[200px] z-[30]">
      <div className=" flex gap-5 p-4  box-border z-[30] relative bg-[#1A1B1E] h-[150px]">
        <div className=" w-[138px] z-10 h-[138px] bg-gradient-to-t from-gray-700/80 via-slate-300 to-gray-700/80 p-1 rounded-xl">
          <Image
            src={image || "/user/user-avatar.png"}
            width={138}
            height={138}
            alt="image"
            className=" rounded-lg h-full object-cover"
          />
        </div>
        <div className="z-10 mt-2">
          <h1 className=" font-secondary font-semibold text-[24px] text-gray-50 w-[160px] break-words">
            {name}
          </h1>
          <p className="text-white text-[14px] w-[160px] break-words">
            {designation}
          </p>
          <p className="text-white text-[14px] w-[160px] break-words font-normal">
            {company}
          </p>
        </div>
        <div className=" z-10  absolute -bottom-[20px]  flex justify-center items-center -right-[20px] w-[120px] h-[90px] bg-white rounded-tl-[40px]">
          <div className=" w-[75px] h-[75px] rounded-full mr-5 mt-2 flex justify-center items-center bg-[#1A1B1E]">
            <Image src="/logos/brand.png" width={50} height={50} alt="brand"  className="h-auto w-auto"/>
          </div>
        </div>
      </div>
      <div className=" absolute bottom-8 h-[40px] bg-[#1A1B1E] rounded-r-[20px] w-[calc(100%-100px)]"></div>
    </div>
  );
};
