"use client";
import { useAuth } from "@/components/providers/auth.provider";
import { Button } from "@/components/ui/button";
import { NotFound } from "@/components/ui/not-found";
import Link from "next/link";
import React from "react";

export const ConfirmOrderWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { user } = useAuth();
  console.log(user);

  if (user) {
    return children;
  }
  return (
    <div>
      <NotFound>
        <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Uh-oh!
        </h1>
        <p className="my-4 text-gray-500">
          You are not authorised user. Please login first.
        </p>
        <Link href="/auth/login">
          <Button variant={"outline"}>Login</Button>
        </Link>
      </NotFound>
    </div>
  );
};
