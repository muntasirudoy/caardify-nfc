"use client";
import { useAuth } from "@/components/providers/auth.provider";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/navigation";
interface ProductCardProps {
  imageUrlFront: string;
  price: number;
  name: string;
  sku: string;
}
export default function ProductCard({
  details,
}: {
  details: ProductCardProps;
}) {
  const { user } = useAuth();
  // const navigate = useRouter();
  console.log(user);
  // const handleNavigateConfirm = (productDetails: any) => {
  //   if (!user) {
  //     navigate.push(
  //       `/auth/login?redirect=confirm-order&productId=${productDetails.id}`,
  //     );
  //   } else {
  //     navigate.push(`/confirm-order?productId=${productDetails.id}`);
  //   }
  // };
  return (
    <CardContainer className="inter-var w-full">
      <CardBody className="bg-white  relative group/card md:max-w-[20em] lg:max-w-[28em]   dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1]  h-auto rounded-xl p-6 border  ">
        <CardItem translateZ="100" className="w-full">
          <Image
            src={details.imageUrlFront}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          translateZ="50"
          className="text-[22px] mt-5 font-secondary font-bold text-neutral-600 dark:text-white"
        >
          {details.name}
        </CardItem>
        <CardItem
          translateZ="50"
          className="text-[18px] mt-2 font-secondary  text-neutral-500 dark:text-white"
        >
          Price: {details.price} TK.
        </CardItem>
        <div className="flex justify-between items-center mt-6">
          <CardItem translateZ={20} as="div" className="btn-primary group ">
            <Link href={`/products/${details.sku}`}>
              <button
                // onClick={() => handleNavigateConfirm(details)}
                className="flex gap-1 items-center"
              >
                <svg
                  width="22px"
                  height="22px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:stroke-black"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.04047 2.29242C2.6497 2.15503 2.22155 2.36044 2.08416 2.7512C1.94678 3.14197 2.15218 3.57012 2.54295 3.7075L2.80416 3.79934C3.47177 4.03406 3.91052 4.18961 4.23336 4.34802C4.53659 4.4968 4.67026 4.61723 4.75832 4.74609C4.84858 4.87818 4.91828 5.0596 4.95761 5.42295C4.99877 5.80316 4.99979 6.29837 4.99979 7.03832L4.99979 9.64C4.99979 12.5816 5.06302 13.5523 5.92943 14.4662C6.79583 15.38 8.19028 15.38 10.9792 15.38H16.2821C17.8431 15.38 18.6236 15.38 19.1753 14.9304C19.727 14.4808 19.8846 13.7164 20.1997 12.1875L20.6995 9.76275C21.0466 8.02369 21.2202 7.15417 20.7762 6.57708C20.3323 6 18.8155 6 17.1305 6H6.49233C6.48564 5.72967 6.47295 5.48373 6.4489 5.26153C6.39517 4.76515 6.27875 4.31243 5.99677 3.89979C5.71259 3.48393 5.33474 3.21759 4.89411 3.00139C4.48203 2.79919 3.95839 2.61511 3.34187 2.39838L3.04047 2.29242ZM15.5172 8.4569C15.8172 8.74256 15.8288 9.21729 15.5431 9.51724L12.686 12.5172C12.5444 12.6659 12.3481 12.75 12.1429 12.75C11.9376 12.75 11.7413 12.6659 11.5998 12.5172L10.4569 11.3172C10.1712 11.0173 10.1828 10.5426 10.4828 10.2569C10.7827 9.97123 11.2574 9.98281 11.5431 10.2828L12.1429 10.9125L14.4569 8.48276C14.7426 8.18281 15.2173 8.17123 15.5172 8.4569Z"
                      fill="#ffffff"
                    ></path>{" "}
                    <path
                      d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z"
                      fill="#ffffff"
                    ></path>{" "}
                    <path
                      d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z"
                      fill="#ffffff"
                    ></path>{" "}
                  </g>
                </svg>
                View Details
              </button>
            </Link>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

// <button onClick={() => handleNavigateConfirm(details)} className="flex gap-1 items-center">
