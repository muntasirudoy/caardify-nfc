"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLogin } from "./login.hook";
// import { IconBrandGoogle } from "@tabler/icons-react";

// import { useRouter } from "next/router";

function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const { register, errors, handleSubmit, mutation } = useLogin();
  const handleGoogleLogin = () => {};
  return (
    <div className="container flex justify-center py-5 md:p-10 bg-white">
      <div className="w-full md:grid md:grid-cols-2 h-[100%] overflow-hidden md:gap-5">
        <div className="order-2 max-w-md w-full md:max-w-none md:h-full bg-gray-900 mx-auto md:mx-0 py-8  flex md:flex justify-center items-center flex-col rounded-3xl">
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
        <div className="order-1 flex items-center flex-col justify-center bg-white w-full xl:W-[40%] h-full p-4 lg:p-0">
          <div className="max-w-md 2xl:w-full bg-white dark:bg-black py-10">
            <h2 className="font-bold font-primary text-4xl text-neutral-800 dark:text-neutral-200">
              Welcome to Caardify
            </h2>
            <p className="text-neutral-600 font-secondary text-lg max-w-sm mt-2 dark:text-neutral-300">
              Welcome back! Please log in to your account.
            </p>
            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
            <form className="my-8" onSubmit={handleSubmit}>
              <LabelInputContainer className="mb-4 font-secondary font-medium">
                <Label htmlFor="email_or_phone">Email or Phone Number</Label>
                <Input
                  id="email_or_phone"
                  placeholder="Enter your email or phone"
                  type="email"
                  {...register("email_or_phone", {
                    required: "Email or phone number is required",
                  })}
                />
                {errors.email_or_phone && (
                  <p className="text-red-500 text-sm">
                    {errors.email_or_phone.message}
                  </p>
                )}
              </LabelInputContainer>

              <LabelInputContainer className="mb-4 font-secondary font-semibold">
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
                {errors.password && (
                  <p className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </LabelInputContainer>

              {mutation.isError && (
                <p className="text-red-500 text-center mt-4">
                  {"Something went wrong!"}
                </p>
              )}
              <div className="flex w-full mb-3">
                <Link
                  href=""
                  className="ml-auto font-secondary underline text-sm font-semibold"
                >
                  Forget Password?
                </Link>
              </div>
              <button
                className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium font-secondary"
                type="submit"
              >
                {mutation.isLoading ? "Loading..." : "Login"}
                <BottomGradient />
              </button>
            </form>
            <div className="flex items-center my-6">
              <div className="flex-grow h-px bg-gray-300" />
              <span className="px-4 text-lg text-gray-500 font-secondary">
                or
              </span>
              <div className="flex-grow h-px bg-gray-300" />
            </div>

            <div className="flex items-center flex-col gap-5 mt-5 w-full">
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
                    Sign in with Google
                  </span>
                </div>
                <BottomGradient />
              </button>
              {/* <button
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
                  Sign in with Facebook
                  </span>
                </div>
                <BottomGradient />
              </button> */}
            </div>
            <p className="font-semibold font-secondary mt-8 text-center ">
              Don’t have an account?{" "}
              <Link
                className="font-semibold text-blue-800 underline"
                href="/auth/signup"
              >
                Signup
              </Link>
            </p>

            {/* <p className="font-secondary mt-3">By continuing, you acknowledge that you agree to our <Link href={`policy`}>Terms of Use</Link> and <Link href={`policy`}>Privacy Policy</Link>.</p> */}

            {!mutation.isLoading && mutation.isSuccess && (
              <p className="text-green-500 text-center mt-4">
                Successfylly Log-in
              </p>
            )}
          </div>
          <span className="font-secondary text-gray-600 text-[12px] mt-auto inline-block text-center">
            @2025 ALL RIGHTS RESERVED
          </span>
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
