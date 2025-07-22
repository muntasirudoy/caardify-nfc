"use client";
import { cn } from "@/lib/utils";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const StickyScroll = ({
  content,
  contentClassName,
  children,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
  children?: React.ReactNode;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref,
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCard]);

  return (
    <>
      {children}
      <motion.div
        animate={
          {
            //  backgroundColor: backgroundColors[activeCard % backgroundColors.length],
          }
        }
        className="h-[70vh] z-40 w-full flex justify-center my-10 bg-white overflow-y-auto relative space-x-10 rounded-md p-10"
        ref={ref}
      >
        <div className="div relative w-full lg:w-[50%] flex items-start px-4">
          <div className="max-w-full">
            {content.map((item, index) => (
              <div key={item.title + index} className="my-20">
                <motion.h2
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-2xl font-bold font-secondary "
                >
                  # {item.title}
                </motion.h2>
                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-base md:text-lg   font-secondary text-gray-700 font-semibold max-w-full mt-10"
                >
                  {item.description}
                </motion.p>
              </div>
            ))}
            <div className="h-40" />
          </div>
        </div>
        <div
          style={{ background: backgroundGradient }}
          className={cn(
            "hidden lg:block mt-14 h-[500px] w-[628px] rounded-md bg-white sticky top-10 overflow-hidden",
            contentClassName
          )}
        >
          {content[activeCard].content ?? null}
        </div>
      </motion.div>
    </>
  );
};

// "use client";

// import { cn } from "@/lib/utils";
// import { motion, useMotionValueEvent, useScroll } from "framer-motion";
// import React, { useEffect, useRef, useState } from "react";

// export const StickyScroll = ({
//   content,
//   contentClassName,
//   children,
// }: {
//   content: {
//     title: string;
//     description: string;
//     content?: React.ReactNode;
//   }[];
//   contentClassName?: string;
//   children?: React.ReactNode;
// }) => {
//   const [activeCard, setActiveCard] = useState(0);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     container: containerRef, // track only this scroll area
//     offset: ["start start", "end end"],
//   });

//   const cardLength = content.length;

//   useMotionValueEvent(scrollYProgress, "change", (latest) => {
//     const cardsBreakpoints = content.map((_, index) => index / cardLength);
//     const closestBreakpointIndex = cardsBreakpoints.reduce(
//       (acc, breakpoint, index) => {
//         const distance = Math.abs(latest - breakpoint);
//         return distance < Math.abs(latest - cardsBreakpoints[acc]) ? index : acc;
//       },
//       0
//     );
//     setActiveCard(closestBreakpointIndex);
//   });

//   const linearGradients = [
//     "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
//     "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
//     "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
//   ];

//   const [backgroundGradient, setBackgroundGradient] = useState(
//     linearGradients[0]
//   );

//   useEffect(() => {
//     setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
//   }, [activeCard]);

//   return (
//     <>
//       {children}
//       <div className="min-h-screen w-full flex flex-col lg:flex-row-reverse md:flex-row-reverse my-10 bg-white rounded-md p-4 lg:p-10">
//         {/* Image Content (Sticky) */}
//         <div
//           style={{ background: backgroundGradient }}
//           className={cn(
//             "w-full h-[300px] mb-5 md:mb-0 md:h-[500px] md:w-1/2 rounded-md overflow-hidden",
//             "md:sticky md:top-10",
//             contentClassName
//           )}
//         >
//           {content[activeCard].content}
//         </div>

//         {/* Scrollable Text Content */}
//         <motion.div
//           ref={containerRef}
//           className="w-full md:w-1/2 h-[400px] md:h-[500px] overflow-y-auto px-2 lg:px-4 space-y-10"
//         >
//           {content.map((item, index) => (
//             <div key={item.title + index} className="my-10 lg:my-20">
//               <motion.h2
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: activeCard === index ? 1 : 0.3 }}
//                 className="text-xl md:text-2xl xl:text-3xl font-bold"
//               >
//                 # {item.title}
//               </motion.h2>
//               <motion.p
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: activeCard === index ? 1 : 0.3 }}
//                 className="text-sm md:text-base lg:text-lg xl:text-xl text-gray-700 font-semibold mt-4"
//               >
//                 {item.description}
//               </motion.p>
//             </div>
//           ))}
//           <div className="h-20 lg:h-40" />
//         </motion.div>
//       </div>
//     </>
//   );
// };

// "use client";
// import { cn } from "@/lib/utils";
// import { motion, useMotionValueEvent, useScroll } from "framer-motion";
// import React, { useEffect, useRef, useState } from "react";

// export const StickyScroll = ({
//   content,
//   contentClassName,
//   children,
// }: {
//   content: {
//     title: string;
//     description: string;
//     content?: React.ReactNode;
//   }[];
//   contentClassName?: string;
//   children?: React.ReactNode;
// }) => {
//   const [activeCard, setActiveCard] = useState(0);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const scrollAreaRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     container: scrollAreaRef,
//     offset: ["start start", "end start"],
//   });

//   const cardLength = content.length;

//   useMotionValueEvent(scrollYProgress, "change", (latest) => {
//     const breakpoints = content.map((_, i) => i / cardLength);
//     const nearestIndex = breakpoints.reduce((acc, bp, i) => {
//       const dist = Math.abs(latest - bp);
//       return dist < Math.abs(latest - breakpoints[acc]) ? i : acc;
//     }, 0);
//     setActiveCard(nearestIndex);
//   });

//   const gradients = [
//     "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
//     "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
//     "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
//   ];

//   const [bgGradient, setBgGradient] = useState(gradients[0]);

//   useEffect(() => {
//     setBgGradient(gradients[activeCard % gradients.length]);
//   }, [activeCard]);

//   // Scroll trap logic 👇
//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           // Lock body scroll when in view
//           document.body.style.overflow = "hidden";
//         } else {
//           // Unlock when out of view
//           document.body.style.overflow = "";
//         }
//       },
//       { threshold: 0.2 } // 20% visible triggers the lock
//     );

//     observer.observe(container);

//     return () => {
//       observer.disconnect();
//       document.body.style.overflow = ""; // cleanup
//     };
//   }, []);

//   return (
//     <>
//       {children}
//       <motion.div
//         animate={{}}
//         className="relative flex flex-col-reverse lg:flex-row gap-10 h-auto w-full bg-white my-10 rounded-md p-5"
//         ref={containerRef}
//       >
//         {/* Text Scroll Area */}
//         <div
//           ref={scrollAreaRef}
//           className="h-[500px] w-full lg:w-[50%] overflow-y-auto px-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-400 overscroll-contain"
//         >
//           {content.map((item, i) => (
//             <div key={item.title + i} className="min-h-[300px]">
//               <motion.h2
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: activeCard === i ? 1 : 0.4 }}
//                 className="text-xl lg:text-2xl font-bold"
//               >
//                 # {item.title}
//               </motion.h2>
//               <motion.p
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: activeCard === i ? 1 : 0.4 }}
//                 className="mt-4 text-gray-600 text-base lg:text-lg font-medium"
//               >
//                 {item.description}
//               </motion.p>
//             </div>
//           ))}
//         </div>

//         {/* Image Area */}
//         <div
//           style={{ background: bgGradient }}
//           className={cn(
//             "sticky top-10 h-[300px] lg:h-[500px] w-full lg:w-[50%] rounded-md overflow-hidden",
//             contentClassName
//           )}
//         >
//           {content[activeCard].content}
//         </div>
//       </motion.div>
//     </>
//   );
// };
