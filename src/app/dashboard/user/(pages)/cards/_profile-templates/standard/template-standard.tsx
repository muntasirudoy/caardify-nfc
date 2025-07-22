import { ScrollArea } from "@/components/ui/scroll-area";
import { IconArrowBack, IconMenu, IconWorld } from "@tabler/icons-react";
import { Bookmark, Download, Mail, Map, Phone, User } from "lucide-react";
import { TemplateProps } from "../basic/template-basic";
import { SocialSlider } from "./components/social-slider";
import Image from "next/image";

const TemplateStandard = ({ formValues, userData }: TemplateProps) => {
  return (
    <div className=" bg-[#191E32] shadow-lg w-full  min-h-screen  relative overflow-hidden">
      {/* background gradient */}
      <div className=" absolute rounded-full w-[300px] h-[300px] bg-[#EA00FF]/20 blur-[120px] -top-[100px] right-[100px]  "></div>
      <div className=" absolute rounded-full w-[300px] h-[300px] bg-[#EA00FF]/20 blur-[100px] bottom-0 -right-[100px]  "></div>
      <div className=" absolute rounded-full w-[400px] h-[400px] bg-[#EA00FF]/20 blur-[140px] top-1/2 -left-[100px] -translate-y-1/4 "></div>
      <div className="flex flex-col w-full h-full">
        <div className="flex z-[40] backdrop:blur-xl sticky top-0 bg-[#191E32]/5 justify-between p-4 box-border border-b-[1px] border-gray-700">
          <span className=" hover:bg-white/20 cursor-pointer p-3 rounded-full bg-white/10 text-white">
            <IconArrowBack />
          </span>
          <span className=" hover:bg-white/20 cursor-pointer p-3 rounded-full bg-white/10 text-white">
            <IconMenu />
          </span>
        </div>

        <ScrollArea className="w-full overflow-auto overflow-x-hidden">
          {/* main content */}
          <div className="w-[340px] box-border">
            <div className=" flex gap-5 items-center p-4  box-border">
              <div className=" w-[138px] z-10 h-[138px] bg-gradient-to-t from-gray-700/80 via-slate-300 to-gray-700/80 p-1 rounded-xl">
                <Image
                  src={userData?.image || "/user/user-avatar.png"}
                  width={138}
                  height={138}
                  alt="user image"
                  className=" rounded-lg h-full object-cover"
                />
              </div>

              <div className="z-10">
                <h1 className=" font-secondary font-semibold text-[24px] text-gray-50 w-[160px] break-words">
                  {formValues.watch("name")}
                </h1>
                <p className="text-white text-[14px] w-[160px] break-words">
                  {formValues.watch("designation")}
                </p>
                <p className="text-white text-[14px] font-normal w-[160px] break-words">
                  {formValues.watch("company")}
                </p>
              </div>
            </div>

            {/* ============================================================================== */}
            {/* buttons */}
            <div className="flex gap-4 justify-between p-4 box-border ">
              <div className=" flex-1 shadow-xl rounded-md bg-gradient-to-r from-gray-800 via-gray-400 to-gray-800 p-[3px]">
                <div className="flex h-full cursor-pointer hover:bg-[#292e49]  w-full items-center justify-center bg-[#3b4269] back rounded-sm text-white py-1.5 font-semibold">
                  <Bookmark height={16} />
                  Save
                </div>
              </div>

              <div className=" flex-1  shadow-xl rounded-md bg-gradient-to-r from-gray-800 via-gray-400 to-gray-800 p-[3px]">
                <div className="flex h-full cursor-pointer hover:bg-[#292e49]  w-full items-center justify-center bg-[#3b4269] back rounded-sm text-white py-1.5 font-semibold">
                  <User height={16} />
                  Connect
                </div>
              </div>
              <div className=" rounded-md  shadow-xl cursor-pointer   ">
                <div className="flex h-full w-full items-center hover:bg-[#292e49] rounded-md justify-center bg-[#3b4269] text-white p-2 back">
                  <Download height={16} />
                </div>
              </div>
            </div>
            {/* ============================================================================== */}
            {/* about  */}
            <div className=" px-4 box-border rounded-xl border-2 m-4 border-gray-500 w-auto">
              <h2 className="text-gray-300 font-semibold break-words text-center py-1">About</h2>
              <div className="bg-gray-500 h-[1px]" />
              <p className=" text-gray-300 text-sm py-4 w-[280px]  break-words">
                {formValues.watch("about")}
              </p>
            </div>
            {/* =============================================================== */}
            {/* social slider */}
            <div className="w-full">
              <SocialSlider />
            </div>
            {/* ================================================================ */}

            <div className="p-4">
              {/* Emails  */}
              <div>
                <h3 className=" text-gray-300 font-semibold">Email</h3>
                <div className="bg-gray-500 h-[1px] mt-1" />
                {formValues.watch("emails")?.map((email, index) => (
                  <div
                    key={`email-${email}-${index}`}
                    className="mt-4 flex items-center gap-3"
                  >
                    <button className="hover:bg-[#292e49] items-center flex rounded-lg justify-center bg-[#3b4269] h-[30px] w-[30px]">
                      <Mail height={16} className="text-white" />
                    </button>
                    <div>
                      <p className=" text-gray-300">{email}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Phones */}
              <div className="mt-5">
                <h3 className=" text-gray-300 font-semibold">Phone</h3>
                <div className="bg-gray-500 h-[1px] mt-1" />
                {formValues.watch("phones")?.map((phone, index) => (
                  <div
                    key={`phone-${phone}-${index}`}
                    className="mt-4 flex items-center gap-3"
                  >
                    <button className="hover:bg-[#292e49] items-center flex rounded-lg justify-center bg-[#3b4269] h-[30px] w-[30px]">
                      <Phone height={16} className="text-white" />
                    </button>
                    <div>
                      <p className=" text-gray-300">{phone}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Websites */}
              <div className="mt-5">
                <h3 className=" text-gray-300 font-semibold">Website</h3>
                <div className="bg-gray-500 h-[1px] mt-1" />
                {formValues.watch("websites")?.map((website, index) => (
                  <div
                    key={`website-${website}-${index}`}
                    className="mt-4 flex items-center gap-3"
                  >
                    <button className="hover:bg-[#292e49] items-center flex rounded-lg justify-center bg-[#3b4269] h-[30px] w-[30px]">
                      <IconWorld height={16} className="text-white" />
                    </button>
                    <div>
                      <p className=" text-gray-300">{website}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Address */}
              <div className="mt-5">
                <h3 className=" text-gray-300 font-semibold">Address</h3>
                <div className="bg-gray-500 h-[1px] mt-1" />
                <div className="mt-4 flex items-center flex-wrap gap-3">
                  <button className="hover:bg-[#292e49] items-center flex rounded-lg justify-center bg-[#3b4269] h-[30px] w-[30px]">
                    <Map height={16} className="text-white" />
                  </button>
                  <div>
                    <p className=" text-gray-300 w-[260px] break-words">
                      {formValues.watch("address")}
                    </p>
                  </div>
                </div>
              </div>
              {/* Get Your Card */}
              <div className=" w-full text-center py-2 cursor-pointer mt-3">
                <a className="text-sm font-semibold text-gray-300">
                  Get Your Card Now
                </a>
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default TemplateStandard;
