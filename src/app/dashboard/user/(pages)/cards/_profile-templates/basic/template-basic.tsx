"use client";

import { UseEditProfileReturn } from "@/app/dashboard/user/(pages)/cards/[edit]/components/profile/useEditProfile.hook";
import {
  IconBrandFacebookFilled,
  IconBrandGithubFilled,
  IconBrandInstagramFilled,
  IconBrandTwitterFilled,
  IconBrandWhatsappFilled,
  IconBrandYoutubeFilled,
  IconPlugConnected,
  IconWorld,
} from "@tabler/icons-react";
import {
  MailCheckIcon,
  MapPin,
  MoveRight,
  PhoneCallIcon,
  SaveIcon,
} from "lucide-react";
import Image from "next/image";
import { ProfileFormValues } from "../../[edit]/components/profile/profile-schema";

export interface TemplateProps {
  userData: ProfileFormValues;
  formValues: UseEditProfileReturn["formValues"];
}

export default function TemplateBasic({ userData, formValues }: TemplateProps) {
  if (!userData) {
    return null;
  }

  return (
    <div className="relative bg-white w-full min-h-screen ">
      {/* Top Section */}
      <div className="flex justify-between items-center bg-black h-[170px] rounded-3xl w-full relative">
        <div className="flex items-center justify-center h-[140px] w-[140px] border-white bg-black absolute -bottom-14 left-4 border-[8px] rounded-full">
          <Image
            width={140}
            height={140}
            src={"/user/user-avatar.png"}
            alt="avatar"
            className="rounded-full"
          />
        </div>
      </div>

      {/* Social Sidebar (vertical on right) */}
      <div className="flex items-center overflow-y-scroll gap-6 flex-col justify-center no-scrollbar py-8 w-[60px] border-white bg-black h-[300px] absolute top-10 right-2 border-[8px] rounded-full">
        <IconBrandYoutubeFilled className="text-white w-6 h-6" />
        <IconBrandFacebookFilled className="text-white w-6 h-6" />
        <IconBrandInstagramFilled className="text-white w-6 h-6" />
        <IconBrandTwitterFilled className="text-white w-6 h-6" />
        <IconBrandWhatsappFilled className="text-white w-6 h-6" />
        <IconBrandGithubFilled className="text-white w-6 h-6" />
      </div>

      {/* Main Content */}
      <div className="py-10 mt-6 px-4 max-w-sm mx-auto">
        <h1 className="text-[24px] font-bold font-secondary">
          {formValues.watch("fullName")}
        </h1>
        <p className="text-sm text-gray-600 font-secondar font-semibold">
          {formValues.watch("designation")}
        </p>
        <p className="text-sm text-gray-600 font-secondar font-semibold">
          {formValues.watch("company")}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-5">
          <button className="flex items-center justify-center bg-black rounded-[25px] text-white px-4 py-2 text-sm w-full sm:w-[120px]">
            <SaveIcon className="text-white mr-1 w-4 h-4" /> Save
          </button>
          <button className="flex items-center justify-center bg-black rounded-[25px] text-white px-4 py-2 text-sm w-full sm:w-[120px]">
            <IconPlugConnected className="text-white mr-1 w-4 h-4" /> Connect
          </button>
        </div>

        <div className="mt-8 w-[280px]">
          <p className="font-secondary font-medium text-gray-600 w-[280px] inline-block break-words">
            {formValues.watch("about")}
          </p>
        </div>

        {/* Emails */}
        <div className="space-y-2">
          <div className="overflow-x-auto no-scrollbar max-w-full">
            <div className="flex gap-3 py-2 whitespace-nowrap">
              {formValues.watch("emails")?.map((email, index) => (
                <div
                  key={`email-${email}-${index}`}
                  className="flex items-center bg-white shadow-blue-100/50 shadow-xl gap-4 p-3 rounded-2xl border border-gray-200 min-w-[270px]"
                >
                  <div className="p-3 flex justify-center items-center rounded-full bg-blue-100">
                    <MailCheckIcon className="w-5 h-5" />
                  </div>
                  <div className="flex font-semibold  font-secondary justify-between items-center w-full text-[18px]">
                    <a className="truncate ">{email || "email@mail.com"}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Phone Numbers Horizontal Scroll */}
          <div className="overflow-x-auto no-scrollbar max-w-full">
            <div className="flex gap-3 py-2 whitespace-nowrap">
              {formValues.watch("phones")?.map((phone, index) => (
                <div
                  key={`phone-${phone}-${index}`}
                  className="flex items-center bg-white shadow-blue-100/50 shadow-xl gap-4 p-3 rounded-2xl border border-gray-200 min-w-[270px]"
                >
                  <div className="p-3 flex justify-center items-center rounded-full bg-blue-100">
                    <PhoneCallIcon className="w-5 h-5" />
                  </div>
                  <div className="flex font-semibold  font-secondary justify-between items-center w-full text-[18px]">
                    <a href={`tel:+ ${phone}`} className="truncate">
                      +88 {phone || ""}
                    </a>
                    <MoveRight className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            {formValues.watch("websites")?.map((website, index) => (
              <div
                key={`website-${website}-${index}`}
                className="flex items-center bg-white shadow-blue-100/50 shadow-xl gap-4 p-3 rounded-2xl border border-gray-200 min-w-[270px]"
              >
                <div className="w-[44px] h-[44px] flex justify-center items-center rounded-full bg-blue-100">
                  <IconWorld className="w-5 h-5" />
                </div>
                <p className="text-[18px] font-secondary font-semibold truncate">
                  {website || "example.com"}
                </p>
              </div>
            ))}
          </div>
          <div className="w-full p-3 flex items-center gap-4 shadow-xl shadow-blue-100 rounded-2xl border border-gray-200">
            <div className="w-[44px] h-[44px] flex justify-center items-center rounded-full bg-blue-100">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-[18px] font-semibold  font-secondary truncate">
              {formValues.watch("address")}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
