"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useSignup } from "./signup.hook";

function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const { register, errors, onSubmitForm, mutation } = useSignup();
  const handleGoogleLogin = () => {};
  return (
    <div className="container flex justify-center py-5 md:p-10 bg-white">
      <div className="w-full md:grid md:grid-cols-2 h-[100%] overflow-hidden md:gap-8 lg:gap-10">
        <div className=" max-w-md w-full md:max-w-none 2xl:max-w-3xl lg:w-full md:h-full 2xl:ml-auto  bg-gray-900 mx-auto py-8  flex md:flex justify-center items-center flex-col rounded-3xl">
          <Image
            src="/logos/w-icon.png"
            className="w-[60px] h-[60px]"
            width={160}
            height={160}
            alt="Caardify Logo"
          />
          <h1 className="font-primary text-white text-[20px] md:text-[42px] mt-3 md:mt-5 font-bold">
            Caardify
          </h1>
        </div>

        <div className=" flex items-center 2xl:items-start flex-col justify-center bg-white w-full   h-full p-4 lg:p-0">
          <div className="w-full max-w-md md:max-w-none 2xl:max-w-xl bg-white dark:bg-black py-5">
            <h2 className="font-bold font-primary text-4xl text-neutral-800 dark:text-neutral-200">
              Welcome to Caardify
            </h2>
            <p className="text-neutral-600 font-secondary text-lg max-w-sm mt-2 dark:text-neutral-300">
              Create an account to get started
            </p>
            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

            <form className="my-8" onSubmit={onSubmitForm}>
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4"></div>
              <LabelInputContainer className="mb-4 font-secondary font-medium">
                <Label htmlFor="email">Email or Phone Number</Label>
                <Input
                  id="email"
                  placeholder="Enter your email or phone"
                  type="email"
                  {...register("email_mobile", {
                    required: "Email or phone number is required",
                  })}
                />
                {errors.email_mobile && (
                  <p className="text-red-500 text-sm">
                    {errors.email_mobile.message}
                  </p>
                )}
              </LabelInputContainer>
              <LabelInputContainer className="mb-4 font-secondary font-medium">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    placeholder="Enter your password"
                    type={showPassword ? "text" : "password"}
                    {...register("password", {
                      required: "Password is required",
                    })}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                    tabIndex={-1}
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-5" />
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </LabelInputContainer>
              <LabelInputContainer className="mb-4 font-secondary font-medium">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    placeholder="Enter your confirm password"
                    type={showPassword ? "text" : "password"}
                    {...register("confirmPassword", {
                      required: "Confirm Password is required",
                    })}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                    tabIndex={-1}
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-5" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </LabelInputContainer>

              <button
                className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                type="submit"
              >
                {mutation.isLoading ? "Loading...." : "Sign up"}

                <BottomGradient />
              </button>

              {mutation.isSuccess && (
                <div className=" h-[40px] bg-green-100 flex justify-center items-center font-secondary font-semibold text-green-700 border-[1px] border-green-300">
                  Successfully sign-up
                </div>
              )}
            </form>
            <div className="flex items-center my-6">
              <div className="flex-grow h-px bg-gray-300" />
              <span className="px-4 text-lg text-gray-500 font-secondary">
                or
              </span>
              <div className="flex-grow h-px bg-gray-300" />
            </div>

            <div className="flex items-center gap-5 mt-5 w-full">
              <button
                onClick={handleGoogleLogin}
                className="w-full relative group/btn flex space-x-2 items-center justify-center px-4 text-black rounded-md h-10 font-medium shadow-input border border-gray-200 bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                type="button"
              >
                <div className="flex items-center space-x-1 ">
                  <Image
                    src="/icons/google-icon.svg"
                    alt="logo"
                    width={16}
                    height={16}
                  />

                  <span className="text-neutral-700 dark:text-neutral-300 text-base">
                    Login with Google
                  </span>
                </div>
                <BottomGradient />
              </button>
            </div>
            <p className="font-semibold font-secondary mt-8 text-center">
              Already have an account?{" "}
              <Link
                className=" font-semibold text-blue-800 underline"
                href="/auth/login"
              >
                Login
              </Link>
            </p>
            <span className="font-secondary text-gray-600 text-[12px] inline-block text-center w-full mt-10">
              @2025 ALL RIGHTS RESERVED
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
export default SignupForm;
