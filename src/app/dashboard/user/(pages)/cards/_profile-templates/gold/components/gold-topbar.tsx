import { IconArrowBack, IconMenu } from "@tabler/icons-react";
import Link from "next/link";

export const GoldTopbar = () => {
  return (
    <div className="flex z-[40] backdrop:blur-xl sticky top-0 bg-[#1A1B1E] justify-between p-4 box-border  border-gray-700">
      <span className=" hover:bg-black/70 cursor-pointer p-3 rounded-full bg-black/90 text-white">
        <Link href="/">
          <IconArrowBack />
        </Link>
      </span>
      <span className=" hover:bg-black/70 cursor-pointer p-3 rounded-full bg-black/90 text-white">
        <IconMenu />
      </span>
    </div>
  );
};
