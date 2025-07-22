"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";
import Link from "next/link";

import { CardProvider, useCard } from "../card-provider";
import { type UserCard } from "./card.schema";

const CardDashboardItems = () => {
  const { userCards, isLoading } = useCard();
  const renderButton = (card: UserCard) => {
    switch (card.status) {
      case "active":
        return <Button>Active Now</Button>;
      case "pending":
        return (
          <div className=" flex justify-between gap-3">
            <Button className=" w-full" variant={"outline"}>
              Pending
            </Button>
            <Button className=" !w-1/2">Pay Now</Button>
          </div>
        );
      case "expire":
        return <Button>Expire</Button>;
      case "inactive":
        return <Button>Inactive</Button>;
      case "paid":
        return <Button>Paid</Button>;
      default:
        break;
    }
  };


  if (isLoading) {
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

  if (!isLoading && userCards) {
    return (
      <>
        <div className="w-full p-6 mx-auto font-secondary ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Total Cards</CardTitle>
                <CardDescription>Your NFC card collection</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">{userCards.length}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Last Used</CardTitle>
                <CardDescription>Most recently activated card</CardDescription>
              </CardHeader>
              <CardContent>
                {/* <p className="text-xl font-semibold">{userCards[1].name}</p>
                        <p className="text-sm text-muted-foreground">{userCards[1].lastUsed}</p> */}
              </CardContent>
            </Card>
          </div>

          <h2 className="text-2xl font-semibold mb-4">Your NFC Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {isLoading ? (
              "Loading..."
            ) : (
              <>
                {userCards.map((card: UserCard) => (
                  <Card key={card.id} className="flex flex-col">
                    <CardHeader>
                      <CardTitle>{card.profile.fullName}</CardTitle>
                      <CardDescription>
                        {card.profile.designation}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <div
                        className={`w-full h-40 rounded-lg ${card.createdAt} flex items-center justify-center mb-4`}
                      >
                        <Image
                          src={card.cardImage || "/img/placeholder.png"}
                          alt="NFC icon"
                          width={100}
                          height={100}
                          className="opacity-75"
                        />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Last used: {card.updatedAt}
                      </p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Link href={`cards/${card.id}`}>
                        {renderButton(card)}
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </>
            )}
          </div>
        </div>
      </>
    );
  }
};

export const CardDashboard = () => {
  return (
    <CardProvider>
      <CardDashboardItems />
    </CardProvider>
  );
};
