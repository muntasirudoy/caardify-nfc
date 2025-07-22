"use client";

import { ProfileInfo } from "./profile-info";
import { CardProvider } from "../../../card-provider";
import { useQuery } from "react-query";
import { useFetch } from "@/hooks/use-fetch";
import { CardResponse } from "../../../_components/card.schema";
import { useState } from "react";
import { useParams } from "next/navigation";
// import { TemplateWrapper } from "@/app/u/[slug]/_profile-templates/template-wrapper";
// import { TemplateGold } from "@/app/u/[slug]/_profile-templates/gold/template-gold";
// import { getUserBySlug } from "@/app/u/[slug]/page";
export type CardData = {
  cards: Card;
  profiles: Profile;
};
export type Card = {
  id: string;
  cardImage: string | null;
  createdAt: string;
  updatedAt: string;
  customerId: string;
  orderId: string;
  status: "active" | "inactive" | "pending" | "paid" | "expire";
};
export type ProfileAttributes = {
  cardImage?: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  designation: string;
  name: string;
  school?: string;
  company?: string;
  about?: string;
  emails: string[];
  phones: string[];
  address: string;
};

export type Profile = {
  id: string;
  cardId: string;
  createdAt: string;
  updatedAt: string;
  customerId: string;
  username: string;
  attributes: string; // JSON string, needs to be parsed
};
const EditProfileItem = () => {
  const params = useParams();

  const { fetchData } = useFetch();
  const [singleCard, setSingleCard] = useState<any | null>(null);
  const getCardById = async (id: string) => {
    const data = await fetchData(`/profile/cards/${id}`);
    console.log('porifile-edit:', data)
    return data as CardResponse;
  };
  const { isLoading: isSingleCardLoading, isError: isSingleCardError } =
    useQuery<CardResponse, unknown>(
      ["card"],
      () => getCardById(String(params.edit)),
      {
        onSuccess: (response) => {
          console.log(response.data[0]);

          // Ensure correct type mapping
          setSingleCard(response.data[0]);
        },
      }
    );

  // const user = await getUserBySlug(slug);

  // const parsedUser = UserSchema.safeParse(user.data);

  // if (!parsedUser.success) {
  //   return <p>Something went wrong!</p>;
  // }

  if (isSingleCardError) {
    return "Something went wrong";
  }


  
  if (isSingleCardLoading) {
    return (
      <div className="flex items-center justify-center h-[500px]">
        <div className="flex flex-col items-center gap-3">
          {/* Spinner */}
          <div className="w-8 h-8 border-4 border-t-transparent border-gray-600 rounded-full animate-spin" />
          
          {/* Loading Text */}
          <span className="text-base font-secondary font-semibold text-gray-700">Loading...</span>
        </div>
      </div>
    );
  }



  if (singleCard && !isSingleCardLoading) {
    return (
      <div className="p-6 bg-slate-100 ">
        <ProfileInfo card={singleCard} />
        {/* <TemplateWrapper>
        <TemplateGold user={parsedUser.data} />
      </TemplateWrapper> */}
      </div>
    );
  }
};

export const ProfileEdit = () => {
  return (
    <CardProvider>
      <EditProfileItem />
    </CardProvider>
  );
};
