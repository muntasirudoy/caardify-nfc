"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Trash2 } from "lucide-react";
import { Controller } from "react-hook-form";
import { type ProfileFormValues } from "./profile-schema";
import { UseEditProfileReturn } from "./useEditProfile.hook";

interface ProfileFormProps {
  onSubmit?: (data: ProfileFormValues) => void;
  submitPofileLoading: boolean;
  formValues: UseEditProfileReturn["formValues"];
}

export function ProfileForm({
  onSubmit,
  submitPofileLoading,
  formValues: {
    appendEmail,
    appendPhone,
    appendWebsite,
    control,
    emailFields,
    errors,
    handleSubmit,
    isStudent,
    phoneFields,
    register,
    removeEmail,
    removePhone,
    removeWebsite,
    websiteFields,
  },
}: ProfileFormProps) {
  const onSubmitForm = (data: ProfileFormValues) => {
    onSubmit?.(data);
  };

  return (
    <ScrollArea className="pb-6 w-full bg-white border-[1px]">
      <h1 className=" pt-4 pl-4 pb-2 font-secondary text-[24px] font-semibold">
        Customize Your Profile
      </h1>
      <hr />
      <form
        onSubmit={handleSubmit(onSubmitForm)}
        className="space-y-6 p-6 text-gray-700 font-secondary"
      >
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label
                htmlFor="template"
                className="text-sm font-medium text-gray-700 mb-2 block"
              >
                Template
              </Label>
              <Controller
                name="template"
                control={control}
                defaultValue=""
                rules={{ required: "Please select a template" }}
                render={({ field }) => (
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a template" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gold">Gold</SelectItem>
                      <SelectItem value="standard">Standard</SelectItem>
                      <SelectItem value="basic">Basic</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>

            <div>
              <Label
                htmlFor="username"
                className="text-sm font-medium text-gray-700 mb-2 block"
              >
                User Name
              </Label>
              <Input
                id="username"
                {...register("username")}
                className="bg-gray-50 border-gray-200"
              />
              {errors.username && (
                <p className="text-red-500 text-sm">{errors.username.message}</p>
              )}
            </div>
          </div>
          <div>
            <Label
              htmlFor="fullName"
              className="text-sm font-medium text-gray-700 mb-2 block"
            >
              Full Name
            </Label>
            <Input
              id="fullName"
              {...register("fullName")}
              className="bg-gray-50 border-gray-200"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm">{errors.fullName.message}</p>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2 col-span-1">
              <Label htmlFor="designation">Profession</Label>
              <Input
                id="designation"
                {...register("designation")}
                className="bg-gray-50 border-gray-200"
              />
              {errors.designation && (
                <p className="text-red-500 text-sm">
                  {errors.designation.message}
                </p>
              )}
            </div>
            <div className="space-y-2 col-span-1">
              <Label htmlFor="company">
                Company {isStudent && "(Optional)"}
              </Label>
              <Input
                id="company"
                {...register("company")}
                className="bg-gray-50 border-gray-200"
              />
              {errors.company && (
                <p className="text-red-500 text-sm">{errors.company.message}</p>
              )}
            </div>
          </div>
          <div className="space-y-2 col-span-2">
            <Label htmlFor="about">About</Label>
            <Textarea
              id="about"
              {...register("about")}
              className="bg-gray-50 border-gray-200"
            />
            {errors.about && (
              <p className="text-red-500 text-sm">{errors.about.message}</p>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label>Emails</Label>
            <Button
              type="button"
              variant="default"
              size="sm"
              onClick={() => appendEmail("")}
              className="h-8"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Email
            </Button>
          </div>
          {emailFields.map((field, index) => (
            <div key={field.id} className="flex gap-2">
              <Input
                {...register(`emails.${index}`)}
                placeholder="Email address"
                className="bg-gray-50 border-gray-200"
              />
              <Button
                type="button"
                variant="secondary"
                size="icon"
                onClick={() => removeEmail(index)}
                className="h-10 w-10"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
          {errors.emails && (
            <p className="text-red-500 text-sm">{errors.emails.message}</p>
          )}
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label>Phone Numbers</Label>
            <Button
              type="button"
              variant="default"
              size="sm"
              onClick={() => appendPhone("")}
              className="h-8"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Phone
            </Button>
          </div>
          {phoneFields.map((field, index) => (
            <div key={field.id} className="flex gap-2">
              <Input
                {...register(`phones.${index}`)}
                placeholder="Phone number"
                className="bg-gray-50 border-gray-200"
              />
              <Button
                type="button"
                variant="secondary"
                size="icon"
                onClick={() => removePhone(index)}
                className="h-10 w-10"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
          {errors.phones && (
            <p className="text-red-500 text-sm">{errors.phones.message}</p>
          )}
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label>Websites</Label>
            <Button
              type="button"
              variant="default"
              size="sm"
              onClick={() => appendWebsite("")}
              className="h-8"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Website
            </Button>
          </div>
          {websiteFields.map((field, index) => (
            <div key={field.id} className="flex gap-2">
              <Input
                {...register(`websites.${index}`)}
                placeholder="Website URL"
                className="bg-gray-50 border-gray-200"
              />
              <Button
                type="button"
                variant="secondary"
                size="icon"
                onClick={() => removeWebsite(index)}
                className="h-10 w-10"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
          {errors.websites && (
            <p className="text-red-500 text-sm">{errors.websites.message}</p>
          )}
        </div>
        <div className="space-y-2 col-span-2">
          <Label htmlFor="about">Address</Label>
          <Textarea
            id="address"
            {...register("address")}
            className="bg-gray-50 border-gray-200"
          />
          {errors.about && (
            <p className="text-red-500 text-sm">{errors.about.message}</p>
          )}
        </div>
        <Button className="w-full bg-black hover:bg-gray-800 text-white py-3 mt-8">
          {" "}
          {submitPofileLoading ? "Submitting..." : "Save Changes"}
        </Button>
      </form>
    </ScrollArea>
  );
}
