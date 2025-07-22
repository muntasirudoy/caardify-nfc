'use client'
import React from "react";

export default function SectionTitle({
  title,
  subTitle,
  children,
}: {
  title: string;
  subTitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className=" mx-auto w-fit text-center ">
      {children}
      <h1 className="font-secondary text-[26px] md:text-[32px] lg:text-[42px] font-semibold mt-2">
        {title}
      </h1>
      <p>{subTitle}</p>
    </div>
  );
}
