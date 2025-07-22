"use client";

import TemplateBasic from "@/app/dashboard/user/(pages)/cards/_profile-templates/basic/template-basic";
import TemplateGold from "@/app/dashboard/user/(pages)/cards/_profile-templates/gold/template-gold";
import TemplateStandard from "@/app/dashboard/user/(pages)/cards/_profile-templates/standard/template-standard";
import { TemplateWrapper } from "@/app/dashboard/user/(pages)/cards/_profile-templates/template-wrapper";
import { useFetch } from "@/hooks/use-fetch";
import { useMutation } from "react-query";
import { toast } from "sonner";
import { CardData } from "./profile-edit";
import { ProfileForm } from "./profile-form";
import { ProfileFormValues } from "./profile-schema";
import { useEditProfile } from "./useEditProfile.hook";

export const ProfileInfo = ({ card }: { card: CardData }) => {


  const attributes = JSON.parse(card.profiles.attributes);
  const { putData } = useFetch();

  const updatePofile = useMutation<
    any,
    unknown,
    any
  >("profile", (data) => putData("/profile/update", data));

  const handleSubmitUserProfile = (data: ProfileFormValues) => {
    if (card.cards.status == 'active') {
      updatePofile.mutate({
        cardId: card.profiles.cardId,
        username: data.username,
        fullName: data.fullName,
        email: data.emails,
        phone: data.phones,
        title: data.designation,
        about: data.about,
        website: data.websites,
        template: data.template,
        companyName: 'na',
        companyUrl: 'na.com',
        address: data.address,
      });
    }

    toast.error('Please pay first')
  };
  const { formValues } = useEditProfile()

  const renderTemplate = () => {
    switch (formValues.watch("template")) {
      case "basic":
        return <TemplateBasic formValues={formValues} userData={attributes} />;
      case "gold":
        return <TemplateGold formValues={formValues} userData={attributes} />;
      case "standard":
        return <TemplateStandard formValues={formValues} userData={attributes} />;
      default:
        return null;
    }
  }



  return (
    <div className="flex  flex-col lg:flex-row  md:justify-between gap-5 w-full">
      <div className="w-full lg:w-[45%] flex justify-center items-start">
        <TemplateWrapper>
          {renderTemplate()}
        </TemplateWrapper>
      </div>
      <div className="h-full lg:w-[50%] xl:w-[60%]">
        <ProfileForm
          onSubmit={handleSubmitUserProfile}
          submitPofileLoading={updatePofile.isLoading}
          formValues={formValues}
        />
      </div>

    </div>
  );
};
