import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ExtendedCardProps extends React.ComponentProps<typeof Card> {
  subTitle?: string;
  image: string;
}

export function DesignCard({
  subTitle,
  image,
  className,
  ...props
}: ExtendedCardProps) {
  return (
    <Card className={cn("w-[320px] rounded-xl overflow-hidden", className)} {...props}>

      <CardContent className="grid gap-4 p-0">
        <Image
          src={image}
          width={200}
          height={200}
          alt="image"
          className="w-full h-[400px] object-cover object-top duration-1000 hover:object-bottom"
        />
      </CardContent>
      <CardHeader>
        <CardTitle className=" text-[24px]">{props.title}</CardTitle>
        <CardDescription>Model : {subTitle}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full">
          <Check /> Order {subTitle}
        </Button>
      </CardFooter>
    </Card>
  );
}
