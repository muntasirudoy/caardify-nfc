"use client";

import { Button } from "@/components/ui/button";
import { ReactLenis } from "@studio-freight/react-lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import React, { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedCard({
  children,
}: {
  children: React.ReactNode;
}) {
  const generateRows = () => {
    const rows = [];
    for (let i = 1; i <= 3; i++) {
      rows.push(
        <div className="row grid grid-cols-2 justify-center  " key={i}>
          <div className="card-left col-span-1 m-4">
            <img
              src={`img/img-${2 * i - 1}.jpeg`}
              className="w-[450px] ml-auto rounded-xl"
              alt=""
            />
          </div>
          <div className="card-right col-span-1 m-4">
            <img
              src={`img/img-${2 * i}.jpeg`}
              className="w-[450px] rounded-xl"
              alt=""
            />
          </div>
        </div>
      );
    }
    return rows;
  };

  useEffect(() => {
    const init = () => {
      const scrollTrigger = {
        trigger: ".main",
        start: "top 25%",
        toggleActions: "play reverse play reverse",
      };

      const leftXValues = [-800, -900, -400];
      const rightXValues = [800, 900, 400];
      const leftRotationValues = [-30, -20, -35];
      const rightRotationValues = [30, 20, 35];
      const yValues = [100, -150, -400];
      const rows = gsap.utils.toArray(".row") as HTMLElement[];
      rows.forEach((row, index) => {
        const cardLeft = row.querySelector(".card-left");
        const cardRight = row.querySelector(".card-right");

        // Animate left card
        if (cardLeft instanceof HTMLElement && cardRight instanceof HTMLElement) {
          gsap.to(cardLeft, {
            x: leftXValues[index],
            scrollTrigger: {
              trigger: ".main",
              start: "top center",
              end: "150% bottom",
              scrub: true,
              onUpdate: (self) => {
                const scrollProgress = self.progress;
                cardLeft.style.transform = `
        translateX(${scrollProgress * leftXValues[index]}px)
        translateY(${scrollProgress * yValues[index]}px)
        rotate(${scrollProgress * leftRotationValues[index]}deg)`;
              },
            },
          });

          // Animate right card
          gsap.to(cardRight, {
            x: rightXValues[index],
            scrollTrigger: {
              trigger: ".main",
              start: "top center",
              end: "150% bottom",
              scrub: true,
              onUpdate: (self) => {
                const scrollProgress = self.progress;
                cardRight.style.transform = `
        translateX(${scrollProgress * rightXValues[index]}px)
        translateY(${scrollProgress * yValues[index]}px)
        rotate(${scrollProgress * rightRotationValues[index]}deg)`;
              },
            },
          });
        }

        // Animate FAQ

        gsap.to(".faq", {
          ease: "power1.out",
          scrollTrigger: scrollTrigger,
        });
        gsap.to(".action", {
          opacity: 1,
          scale: 1.5,
          ease: "power1.in",
          stagger: 0.1,
          duration: 0.5,
          scrollTrigger: scrollTrigger,
        });
      });
    }


    const allImages = document.querySelectorAll(".row img");
    let imagesLoaded = 0;

    allImages.forEach((img) => {
      img.addEventListener("load", () => {
        imagesLoaded += 1;
        if (imagesLoaded === allImages.length) {
          init();
        }
      });
    });
    const handleResize = () => {
      ScrollTrigger.refresh(); // Wrap ScrollTrigger.refresh in a callback
    };

    window.addEventListener("resize", handleResize);
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <ReactLenis root>{children}</ReactLenis>
      <div className="main overflow-hidden w-full">
        <div className="container relative ">
          <div className="action opacity-0 absolute flex justify-center flex-col items-center top-[30%] left-[45%] -translate-1/2">
            <Image src="/logos/black.png" width={200} height={130} alt="logo" />

            <Button className="mt-10">Book Now</Button>
          </div>

          {generateRows()}
          {/* <div className=" w-full h-[200px] bg-black -mt-[300px] rounded-t-[25px]"></div> */}
        </div>
      </div>
    </>
  );
}
